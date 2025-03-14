"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
	BanknoteIcon,
	CreditCardIcon,
	DollarSignIcon,
	Loader2,
	Clock,
	CheckCircle2,
	XCircle,
	RefreshCw,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";

// Define the form data type
export type DepositValues = {
	amount: number;
	depositMethod: string;
	bankName?: string;
	accountNumber?: string;
	provider?: string;
	phoneNumber?: string;
	email?: string;
	referenceNumber?: string;
	notes?: string;
	userId: string;
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// Mock previous deposits data
const previousDeposits = [
	{
		id: "DEP-001",
		date: "2024-03-10",
		amount: 500,
		method: "Bank Transfer",
		status: "completed",
	},
	{
		id: "DEP-002",
		date: "2024-03-05",
		amount: 250,
		method: "Mobile Money",
		status: "completed",
	},
	{
		id: "DEP-003",
		date: "2024-02-28",
		amount: 1000,
		method: "PayPal",
		status: "pending",
	},
];

export default function DepositForm({ userId }: { userId: string }) {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");
	// const { toast } = useToast();

	const {
		register,
		handleSubmit,
		watch,
		reset,
		setValue,
		formState: { errors },
	} = useForm<DepositValues>({
		defaultValues: {
			amount: 0,
			depositMethod: "",
		},
	});

	// Watch deposit method for conditional rendering
	const depositMethod = watch("depositMethod");

	// Clear error when user types in any field
	const clearError = () => {
		if (error) {
			setError("");
		}
		if (success) {
			setSuccess(false);
		}
	};

	// Get processing time based on deposit method
	const getProcessingTime = (method: string) => {
		switch (method) {
			case "Bank Transfer":
				return "Bank transfers typically take 1-2 business days to process";
			case "Mobile Money":
				return "Mobile Money deposits are usually processed within 30 minutes";
			case "PayPal":
				return "PayPal deposits are typically processed instantly";
			default:
				return "";
		}
	};

	async function onSubmit(data: DepositValues) {
		data.amount = Number(data.amount);
		setLoading(true);
		setError("");
		const payLoad = { ...data, userId };
		try {
			const res = await fetch(`${baseUrl}/api/v1/deposits`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payLoad),
			});
			if (res) {
				setSuccess(true);
				setLoading(false);
				toast.success("Deposit Initiated");
				//   toast({
				//     title: "Deposit Initiated",
				//     description: `Your ${data.depositMethod} deposit of $${data.amount} has been initiated successfully.`,
				//   })

				// Reset form after successful submission
				reset();
			}
			console.log(res);
		} catch (error) {
			setLoading(false);
			setError(
				"An error occurred while processing your deposit. Please try again."
			);
			toast.error("Deposit Failed");
			// toast({
			//   title: "Deposit Failed",
			//   description: "There was an error processing your deposit request.",
			//   variant: "destructive",
			// })
		}
	}

	function handleReset() {
		reset();
		setError("");
		setSuccess(false);
	}

	return (
		<div className="container mx-auto py-6 px-4 md:px-6">
			<Card className="w-full max-w-3xl mx-auto">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl font-bold text-center">
						Deposit Funds
					</CardTitle>
					<CardDescription className="text-center">
						Add funds to your account securely using your preferred payment
						method
					</CardDescription>
				</CardHeader>
				<CardContent>
					{success && (
						<Alert className="mb-6 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900">
							<CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
							<AlertTitle>Deposit Initiated Successfully</AlertTitle>
							<AlertDescription>
								Your deposit request has been submitted and is being processed.
								You can track its status in your transaction history.
							</AlertDescription>
						</Alert>
					)}

					{error && (
						<Alert
							className="mb-6 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-900"
							variant="destructive"
						>
							<XCircle className="h-4 w-4" />
							<AlertTitle>Deposit Failed</AlertTitle>
							<AlertDescription>{error}</AlertDescription>
						</Alert>
					)}

					<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
						{/* Deposit Amount Section */}
						<div className="space-y-4">
							<div className="flex items-center gap-2">
								<DollarSignIcon className="h-5 w-5 text-primary" />
								<h3 className="text-lg font-medium">Deposit Amount</h3>
							</div>
							<Separator />

							<div className="space-y-2">
								<Label htmlFor="amount">Amount</Label>
								<div className="relative">
									<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
										<DollarSignIcon className="h-4 w-4" />
									</div>
									<Input
										id="amount"
										type="number"
										step="0.01"
										placeholder="0.00"
										className="pl-10"
										{...register("amount", {
											required: "Amount is required",
											min: {
												value: 1,
												message: "Amount must be greater than 0",
											},
											valueAsNumber: true,
										})}
										onInput={clearError}
									/>
								</div>
								{errors.amount && (
									<p className="text-destructive text-sm mt-1">
										{errors.amount.message}
									</p>
								)}
							</div>
						</div>

						{/* Deposit Method Section */}
						<div className="space-y-4">
							<div className="flex items-center gap-2">
								<CreditCardIcon className="h-5 w-5 text-primary" />
								<h3 className="text-lg font-medium">Deposit Method</h3>
							</div>
							<Separator />

							<div className="space-y-2">
								<Label htmlFor="depositMethod">Select Method</Label>
								<Select
									onValueChange={(value) => {
										setValue("depositMethod", value, { shouldValidate: true });
										clearError();
									}}
									value={depositMethod}
								>
									<SelectTrigger id="depositMethod">
										<SelectValue placeholder="Select deposit method" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
										<SelectItem value="Mobile Money">Mobile Money</SelectItem>
										<SelectItem value="PayPal">PayPal</SelectItem>
									</SelectContent>
								</Select>

								<input
									type="hidden"
									{...register("depositMethod", {
										required: "Deposit method is required",
									})}
								/>
								{errors.depositMethod && (
									<p className="text-destructive text-sm mt-1">
										{errors.depositMethod.message}
									</p>
								)}
							</div>

							{/* Conditional Fields Based on Deposit Method */}
							{depositMethod && (
								<div className="p-4 border rounded-md bg-muted/30">
									{depositMethod === "Bank Transfer" && (
										<div className="space-y-4">
											<div className="space-y-2">
												<Label htmlFor="bankName">Bank Name</Label>
												<Input
													id="bankName"
													placeholder="Enter bank name"
													{...register("bankName", {
														required: "Bank name is required",
													})}
													onInput={clearError}
												/>
												{errors.bankName && (
													<p className="text-destructive text-sm mt-1">
														{errors.bankName.message}
													</p>
												)}
											</div>
											<div className="space-y-2">
												<Label htmlFor="accountNumber">Account Number</Label>
												<Input
													id="accountNumber"
													placeholder="Enter account number"
													{...register("accountNumber", {
														required: "Account number is required",
													})}
													onInput={clearError}
												/>
												{errors.accountNumber && (
													<p className="text-destructive text-sm mt-1">
														{errors.accountNumber.message}
													</p>
												)}
											</div>
											<div className="space-y-2">
												<Label htmlFor="referenceNumber">
													Reference Number (Optional)
												</Label>
												<Input
													id="referenceNumber"
													placeholder="Enter reference number"
													{...register("referenceNumber")}
													onInput={clearError}
												/>
											</div>
										</div>
									)}

									{depositMethod === "Mobile Money" && (
										<div className="space-y-4">
											<div className="space-y-2">
												<Label htmlFor="provider">Mobile Money Provider</Label>
												<Select
													onValueChange={(value) => {
														setValue("provider", value, {
															shouldValidate: true,
														});
														clearError();
													}}
												>
													<SelectTrigger id="provider">
														<SelectValue placeholder="Select provider" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="MTN">
															MTN Mobile Money
														</SelectItem>
														<SelectItem value="Airtel">Airtel Money</SelectItem>
														<SelectItem value="Vodafone">
															Vodafone Cash
														</SelectItem>
														<SelectItem value="Other">Other</SelectItem>
													</SelectContent>
												</Select>

												<input
													type="hidden"
													{...register("provider", {
														required: "Provider is required",
													})}
												/>
												{errors.provider && (
													<p className="text-destructive text-sm mt-1">
														{errors.provider.message}
													</p>
												)}
											</div>
											<div className="space-y-2">
												<Label htmlFor="phoneNumber">Phone Number</Label>
												<Input
													id="phoneNumber"
													placeholder="Enter phone number"
													{...register("phoneNumber", {
														required: "Phone number is required",
													})}
													onInput={clearError}
												/>
												{errors.phoneNumber && (
													<p className="text-destructive text-sm mt-1">
														{errors.phoneNumber.message}
													</p>
												)}
											</div>
										</div>
									)}

									{depositMethod === "PayPal" && (
										<div className="space-y-4">
											<div className="space-y-2">
												<Label htmlFor="email">PayPal Email</Label>
												<Input
													id="email"
													type="email"
													placeholder="Enter PayPal email"
													{...register("email", {
														required: "Email is required",
														pattern: {
															value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
															message: "Please enter a valid email address",
														},
													})}
													onInput={clearError}
												/>
												{errors.email && (
													<p className="text-destructive text-sm mt-1">
														{errors.email.message}
													</p>
												)}
											</div>
										</div>
									)}

									{/* Processing Time Information */}
									{depositMethod && (
										<div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
											<Clock className="h-4 w-4 mt-0.5" />
											<p>{getProcessingTime(depositMethod)}</p>
										</div>
									)}
								</div>
							)}
						</div>

						{/* Additional Notes Section */}
						<div className="space-y-4">
							<div className="flex items-center gap-2">
								<BanknoteIcon className="h-5 w-5 text-primary" />
								<h3 className="text-lg font-medium">Additional Information</h3>
							</div>
							<Separator />

							<div className="space-y-2">
								<Label htmlFor="notes">Notes (Optional)</Label>
								<Textarea
									id="notes"
									placeholder="Add any additional information about this deposit"
									className="min-h-[100px]"
									{...register("notes")}
									onInput={clearError}
								/>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-4">
							<Button
								type="button"
								variant="outline"
								className="flex-1"
								onClick={handleReset}
							>
								<RefreshCw className="mr-2 h-4 w-4" />
								Reset Form
							</Button>
							<Button type="submit" className="flex-1" disabled={loading}>
								{loading ? (
									<>
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />
										Processing...
									</>
								) : (
									"Process Deposit"
								)}
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>

			{/* Previous Deposits Section */}
			<Card className="w-full max-w-3xl mx-auto mt-8">
				<CardHeader className="space-y-1">
					<CardTitle className="text-xl font-bold">Recent Deposits</CardTitle>
					<CardDescription>Your recent deposit history</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="overflow-x-auto">
						<table className="w-full text-sm">
							<thead>
								<tr className="border-b">
									<th className="py-3 px-2 text-left font-medium">ID</th>
									<th className="py-3 px-2 text-left font-medium">Date</th>
									<th className="py-3 px-2 text-left font-medium">Amount</th>
									<th className="py-3 px-2 text-left font-medium">Method</th>
									<th className="py-3 px-2 text-left font-medium">Status</th>
								</tr>
							</thead>
							<tbody>
								{previousDeposits.map((deposit) => (
									<tr key={deposit.id} className="border-b">
										<td className="py-3 px-2">{deposit.id}</td>
										<td className="py-3 px-2">
											{new Date(deposit.date).toLocaleDateString()}
										</td>
										<td className="py-3 px-2">${deposit.amount.toFixed(2)}</td>
										<td className="py-3 px-2">{deposit.method}</td>
										<td className="py-3 px-2">
											<span
												className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
													deposit.status === "completed"
														? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
														: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
												}`}
											>
												{deposit.status === "completed" ? (
													<>
														<CheckCircle2 className="mr-1 h-3 w-3" />
														Completed
													</>
												) : (
													<>
														<Clock className="mr-1 h-3 w-3" />
														Pending
													</>
												)}
											</span>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

function useToast(): { toast: any } {
	throw new Error("Function not implemented.");
}
