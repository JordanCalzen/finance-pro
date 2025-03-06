"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	submitWithdrawalRequest,
	WithdrawalFormData,
} from "@/app/actions/withdraw-form";
// import {
// 	submitWithdrawalRequest,
// 	WithdrawalFormData,
// } from "../actions/withdrawal-actions";

export function WithdrawalForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formResponse, setFormResponse] = useState<{
		success?: boolean;
		message?: string;
	} | null>(null);

	// Initialize form with React Hook Form
	const form = useForm<WithdrawalFormData>({
		defaultValues: {
			amount: undefined,
			method: "",
			accountDetails: "",
			reason: "",
		},
	});

	// Get current method value for conditional fields
	const currentMethod = form.watch("method");

	// Handle form submission
	const onSubmit = async (data: WithdrawalFormData) => {
		setIsSubmitting(true);
		setFormResponse(null);

		try {
			const response = await submitWithdrawalRequest(data);
			setFormResponse(response);

			if (response.success) {
				form.reset();
			}
		} catch (error) {
			setFormResponse({
				success: false,
				message: "An unexpected error occurred. Please try again.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	// Get account detail label based on method
	const getAccountDetailLabel = () => {
		switch (currentMethod) {
			case "bank_transfer":
				return "Bank Account Number";
			case "mobile_money":
				return "Mobile Money Number";
			case "paypal":
				return "PayPal Email";
			case "crypto":
				return "Wallet Address";
			default:
				return "Account Details";
		}
	};

	// Get account detail placeholder based on method
	const getAccountDetailPlaceholder = () => {
		switch (currentMethod) {
			case "bank_transfer":
				return "Enter your bank account number";
			case "mobile_money":
				return "Enter your mobile money number";
			case "paypal":
				return "Enter your PayPal email address";
			case "crypto":
				return "Enter your wallet address";
			default:
				return "Enter your account details";
		}
	};

	return (
		<Card className="w-full max-w-lg mx-auto">
			<CardHeader>
				<CardTitle className="text-2xl">Withdrawal Request</CardTitle>
				<CardDescription>
					Complete the form below to request a withdrawal from your account.
				</CardDescription>
			</CardHeader>
			<CardContent>
				{formResponse && (
					<Alert
						className={`mb-6 ${
							formResponse.success
								? "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800"
								: "bg-destructive/10 border-destructive/20"
						}`}
					>
						{formResponse.success ? (
							<CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
						) : (
							<AlertCircle className="h-4 w-4 text-destructive" />
						)}
						<AlertTitle
							className={
								formResponse.success ? "text-green-600 dark:text-green-400" : ""
							}
						>
							{formResponse.success ? "Success" : "Error"}
						</AlertTitle>
						<AlertDescription
							className={
								formResponse.success ? "text-green-600 dark:text-green-400" : ""
							}
						>
							{formResponse.message}
						</AlertDescription>
					</Alert>
				)}

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<FormField
							control={form.control}
							name="amount"
							rules={{
								required: "Amount is required",
								min: {
									value: 0.01,
									message: "Amount must be greater than zero",
								},
								validate: (value) =>
									!isNaN(Number(value)) || "Please enter a valid number",
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Amount</FormLabel>
									<FormControl>
										<div className="relative">
											<span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
												$
											</span>
											<Input
												type="number"
												placeholder="0.00"
												className="pl-8"
												{...field}
												onChange={(e) => {
													// Ensure only numbers and decimals
													if (
														e.target.value === "" ||
														/^\d*\.?\d*$/.test(e.target.value)
													) {
														field.onChange(e);
													}
												}}
											/>
										</div>
									</FormControl>
									<FormDescription>
										Enter the amount you wish to withdraw.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="method"
							rules={{ required: "Please select a withdrawal method" }}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Withdrawal Method</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select withdrawal method" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="bank_transfer">
												Bank Transfer
											</SelectItem>
											<SelectItem value="mobile_money">Mobile Money</SelectItem>
											<SelectItem value="paypal">PayPal</SelectItem>
											<SelectItem value="crypto">Cryptocurrency</SelectItem>
										</SelectContent>
									</Select>
									<FormDescription>
										Choose how you would like to receive your funds.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						{currentMethod && (
							<FormField
								control={form.control}
								name="accountDetails"
								rules={{
									required: "Account details are required",
									minLength: {
										value: 3,
										message: "Account details must be at least 3 characters",
									},
								}}
								render={({ field }) => (
									<FormItem>
										<FormLabel>{getAccountDetailLabel()}</FormLabel>
										<FormControl>
											<Input
												placeholder={getAccountDetailPlaceholder()}
												{...field}
											/>
										</FormControl>
										<FormDescription>
											Enter the details for your selected withdrawal method.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						)}

						<FormField
							control={form.control}
							name="reason"
							rules={{
								required: "Reason is required",
								minLength: {
									value: 10,
									message:
										"Please provide a detailed reason (minimum 10 characters)",
								},
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Reason for Withdrawal</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Please explain why you are making this withdrawal"
											className="min-h-[100px]"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										Provide a brief explanation for your withdrawal request.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</form>
				</Form>
			</CardContent>
			<CardFooter className="flex justify-end">
				<Button
					type="submit"
					onClick={form.handleSubmit(onSubmit)}
					disabled={isSubmitting}
				>
					{isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
					{isSubmitting ? "Submitting..." : "Submit Withdrawal Request"}
				</Button>
			</CardFooter>
		</Card>
	);
}
