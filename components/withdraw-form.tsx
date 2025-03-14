"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
	BanknoteIcon,
	CheckCircle2,
	Clock,
	CreditCardIcon,
	DollarSignIcon,
	Loader2,
	RefreshCw,
	XCircle,
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
// import { useToast } from "@/hooks/use-toast"

// Define the form data type with expanded fields for each method
export type WithdrawalFormData = {
	amount: number;
	withdrawMethod: string;
	accountDetails: string;
	reason: string;
	bankName?: string;
	accountNumber?: string;
	accountHolderName?: string;
	swiftCode?: string;
	provider?: string;
	phoneNumber?: string;
	email?: string;
	walletAddress?: string;
	network?: string;
	userId: string;
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// Mock previous withdrawals data
const previousWithdrawals = [
	{
		id: "WD-001",
		date: "2024-03-12",
		amount: 750,
		withdrawMethod: "Bank Transfer",
		status: "completed",
	},
	{
		id: "WD-002",
		date: "2024-03-01",
		amount: 300,
		withdrawMethod: "Mobile Money",
		status: "completed",
	},
	{
		id: "WD-003",
		date: "2024-02-25",
		amount: 1200,
		withdrawMethod: "PayPal",
		status: "pending",
	},
	{
		id: "WD-004",
		date: "2024-02-20",
		amount: 500,
		withdrawMethod: "Cryptocurrency",
		status: "rejected",
	},
];

// Mock function to simulate server action
const submitWithdrawalRequest = async (data: WithdrawalFormData) => {
	// Simulate API call
	await new Promise((resolve) => setTimeout(resolve, 2000));

	// Simulate success response
	return {
		success: true,
		message: `Your withdrawal request for ${data.amount} has been submitted successfully.`,
	};
};

export default function WithdrawalForm({ userId }: { userId: string }) {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");
	//   const { toast } = useToast()

	const {
		register,
		handleSubmit,
		watch,
		reset,
		setValue,
		formState: { errors },
	} = useForm<WithdrawalFormData>({
		defaultValues: {
			amount: 0,
			withdrawMethod: "",
			accountDetails: "",
			reason: "",
		},
	});

	// Watch withdrawMethod for conditional rendering
	const withdrawMethod = watch("withdrawMethod");

	// Clear error when user types in any field
	const clearError = () => {
		if (error) {
			setError("");
		}
		if (success) {
			setSuccess(false);
		}
	};

	// Get processing time based on withdrawal method
	const getProcessingTime = (method: string) => {
		switch (method) {
			case "bank_transfer":
				return "Bank transfers typically take 2-3 business days to process";
			case "mobile_money":
				return "Mobile Money withdrawals are usually processed within 24 hours";
			case "paypal":
				return "PayPal withdrawals are typically processed within 1 business day";
			case "crypto":
				return "Cryptocurrency withdrawals are usually processed within 1 hour";
			default:
				return "";
		}
	};

	// Fee calculation based on withdrawal method and amount
	const calculateFee = () => {
		const amount = watch("amount") || 0;
		let fee = 0;

		switch (withdrawMethod) {
			case "bank_transfer":
				fee = Math.max(5, amount * 0.01); // $5 or 1%, whichever is higher
				break;
			case "mobile_money":
				fee = Math.max(2, amount * 0.025); // $2 or 2.5%, whichever is higher
				break;
			case "paypal":
				fee = Math.max(1, amount * 0.029) + 0.3; // $1 or 2.9% + $0.30, whichever is higher
				break;
			case "crypto":
				fee = Math.max(10, amount * 0.015); // $10 or 1.5%, whichever is higher
				break;
			default:
				fee = 0;
		}

		return fee.toFixed(2);
	};

	// Calculate the amount to receive after fees
	const calculateNetAmount = () => {
		const amount = watch("amount") || 0;
		const fee = Number.parseFloat(calculateFee());
		return (amount - fee).toFixed(2);
	};

	console.log("Base URL:", baseUrl);

	async function onSubmit(data: WithdrawalFormData) {
		// Debug logs
		console.log("Form submitted with data:", data);
		console.log("Base URL from env:", process.env.NEXT_PUBLIC_BASE_URL);
		console.log("Using baseUrl:", baseUrl);

		data.amount = Number(data.amount);
		setLoading(true);
		setError("");
		const payLoad = { ...data, userId };

		try {
			// Log the full request URL and payload
			console.log("Sending request to:", `${baseUrl}/api/v1/withdraws`);
			console.log("With payload:", JSON.stringify(payLoad));

			const res = await fetch(`${baseUrl}/api/v1/withdraws`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payLoad),
			});

			// Log the response status
			console.log("Response status:", res.status);

			if (!res.ok) {
				const errorData = await res
					.json()
					.catch(() => ({ message: "Failed to parse error response" }));
				console.error("Error response:", errorData);
				throw new Error(
					errorData.message || `Request failed with status ${res.status}`
				);
			}

			const responseData = await res.json();
			console.log("Success response:", responseData);

			setSuccess(true);
			setLoading(false);
			toast.success("Withdrawal Requested");
			reset();
		} catch (err) {
			console.error("Fetch error:", err);
			setLoading(false);
			setError(
				"An error occurred while processing your withdrawal. Please try again."
			);
			toast.error("Withdrawal Failed");
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
						Withdrawal Request
					</CardTitle>
					<CardDescription className="text-center">
						Complete the form below to request a withdrawal from your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					{success && (
						<Alert className="mb-6 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900">
							<CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
							<AlertTitle>Withdrawal Requested Successfully</AlertTitle>
							<AlertDescription>
								Your withdrawal request has been submitted and is being
								processed. You can track its status in your transaction history.
							</AlertDescription>
						</Alert>
					)}

					{error && (
						<Alert
							className="mb-6 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-900"
							variant="destructive"
						>
							<XCircle className="h-4 w-4" />
							<AlertTitle>Withdrawal Failed</AlertTitle>
							<AlertDescription>{error}</AlertDescription>
						</Alert>
					)}

					<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
						{/* Withdrawal Amount Section */}
						<div className="space-y-4">
							<div className="flex items-center gap-2">
								<DollarSignIcon className="h-5 w-5 text-primary" />
								<h3 className="text-lg font-medium">Withdrawal Amount</h3>
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
												value: 0.01,
												message: "Amount must be greater than zero",
											},
											validate: (value) =>
												!isNaN(Number(value)) || "Please enter a valid number",
										})}
										onInput={clearError}
									/>
								</div>
								{errors.amount && (
									<p className="text-destructive text-sm mt-1">
										{errors.amount.message}
									</p>
								)}
								<p className="text-sm text-muted-foreground">
									Enter the amount you wish to withdraw from your account.
								</p>
							</div>
						</div>

						{/* Withdrawal Method Section */}
						<div className="space-y-4">
							<div className="flex items-center gap-2">
								<CreditCardIcon className="h-5 w-5 text-primary" />
								<h3 className="text-lg font-medium">Withdrawal Method</h3>
							</div>
							<Separator />

							<div className="space-y-2">
								<Label htmlFor="withdrawMethod">Select Method</Label>
								<Select
									onValueChange={(value) => {
										setValue("withdrawMethod", value, { shouldValidate: true });
										clearError();
									}}
									value={withdrawMethod}
									{...register("withdrawMethod", {
										required: "Withdrawal method is required",
									})}
								>
									<SelectTrigger id="withdrawMethod">
										<SelectValue placeholder="Select withdrawal method" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="bank_transfer">Bank Transfer</SelectItem>
										<SelectItem value="mobile_money">Mobile Money</SelectItem>
										<SelectItem value="paypal">PayPal</SelectItem>
										<SelectItem value="crypto">Cryptocurrency</SelectItem>
									</SelectContent>
								</Select>
								{errors.withdrawMethod && (
									<p className="text-destructive text-sm mt-1">
										{errors.withdrawMethod.message}
									</p>
								)}
								<p className="text-sm text-muted-foreground">
									Choose how you would like to receive your funds.
								</p>
							</div>

							{/* Conditional Fields Based on Withdrawal Method */}
							{withdrawMethod && (
								<div className="p-4 border rounded-md bg-muted/30">
									{withdrawMethod === "bank_transfer" && (
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
												<Label htmlFor="accountHolderName">
													Account Holder Name
												</Label>
												<Input
													id="accountHolderName"
													placeholder="Enter account holder name"
													{...register("accountHolderName", {
														required: "Account holder name is required",
													})}
													onInput={clearError}
												/>
												{errors.accountHolderName && (
													<p className="text-destructive text-sm mt-1">
														{errors.accountHolderName.message}
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
												<Label htmlFor="swiftCode">
													SWIFT/BIC Code (For International Transfers)
												</Label>
												<Input
													id="swiftCode"
													placeholder="Enter SWIFT/BIC code (optional)"
													{...register("swiftCode")}
													onInput={clearError}
												/>
											</div>
										</div>
									)}

									{withdrawMethod === "mobile_money" && (
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

									{withdrawMethod === "paypal" && (
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

									{withdrawMethod === "crypto" && (
										<div className="space-y-4">
											<div className="space-y-2">
												<Label htmlFor="network">Cryptocurrency Network</Label>
												<Select
													onValueChange={(value) => {
														setValue("network", value, {
															shouldValidate: true,
														});
														clearError();
													}}
												>
													<SelectTrigger id="network">
														<SelectValue placeholder="Select network" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
														<SelectItem value="ETH">Ethereum (ETH)</SelectItem>
														<SelectItem value="USDT">Tether (USDT)</SelectItem>
														<SelectItem value="BNB">BNB Smart Chain</SelectItem>
													</SelectContent>
												</Select>
												{errors.network && (
													<p className="text-destructive text-sm mt-1">
														{errors.network.message}
													</p>
												)}
											</div>
											<div className="space-y-2">
												<Label htmlFor="walletAddress">Wallet Address</Label>
												<Input
													id="walletAddress"
													placeholder="Enter your wallet address"
													{...register("walletAddress", {
														required: "Wallet address is required",
													})}
													onInput={clearError}
												/>
												{errors.walletAddress && (
													<p className="text-destructive text-sm mt-1">
														{errors.walletAddress.message}
													</p>
												)}
											</div>
										</div>
									)}

									{/* Fee and Net Amount Information */}
									{withdrawMethod && (
										<div className="mt-6 p-3 bg-muted/50 rounded border">
											<div className="space-y-2">
												<div className="flex justify-between items-center">
													<span className="text-sm">Withdrawal Amount:</span>
													<span className="font-medium">
														${watch("amount") || "0.00"}
													</span>
												</div>
												<div className="flex justify-between items-center">
													<span className="text-sm">Fee:</span>
													<span className="text-destructive">
														${calculateFee()}
													</span>
												</div>
												<Separator className="my-2" />
												<div className="flex justify-between items-center">
													<span className="text-sm font-medium">
														You Will Receive:
													</span>
													<span className="font-bold">
														${calculateNetAmount()}
													</span>
												</div>
											</div>
										</div>
									)}

									{/* Processing Time Information */}
									{withdrawMethod && (
										<div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
											<Clock className="h-4 w-4 mt-0.5" />
											<p>{getProcessingTime(withdrawMethod)}</p>
										</div>
									)}
								</div>
							)}
						</div>

						{/* Reason Section */}
						<div className="space-y-4">
							<div className="flex items-center gap-2">
								<BanknoteIcon className="h-5 w-5 text-primary" />
								<h3 className="text-lg font-medium">Withdrawal Reason</h3>
							</div>
							<Separator />

							<div className="space-y-2">
								<Label htmlFor="reason">Reason for Withdrawal</Label>
								<Textarea
									id="reason"
									placeholder="Please explain why you are making this withdrawal"
									className="min-h-[100px]"
									{...register("reason", {
										required: "Reason is required",
										minLength: {
											value: 10,
											message:
												"Please provide a detailed reason (minimum 10 characters)",
										},
									})}
									onInput={clearError}
								/>
								{errors.reason && (
									<p className="text-destructive text-sm mt-1">
										{errors.reason.message}
									</p>
								)}
								<p className="text-sm text-muted-foreground">
									Provide a brief explanation for your withdrawal request.
								</p>
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
									"Submit Withdrawal Request"
								)}
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>

			{/* Previous Withdrawals Section */}
			<Card className="w-full max-w-3xl mx-auto mt-8">
				<CardHeader className="space-y-1">
					<CardTitle className="text-xl font-bold">
						Recent Withdrawals
					</CardTitle>
					<CardDescription>Your recent withdrawal history</CardDescription>
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
								{previousWithdrawals.map((withdrawal) => (
									<tr key={withdrawal.id} className="border-b">
										<td className="py-3 px-2">{withdrawal.id}</td>
										<td className="py-3 px-2">
											{new Date(withdrawal.date).toLocaleDateString()}
										</td>
										<td className="py-3 px-2">
											${withdrawal.amount.toFixed(2)}
										</td>
										<td className="py-3 px-2">{withdrawal.withdrawMethod}</td>
										<td className="py-3 px-2">
											<span
												className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
													withdrawal.status === "completed"
														? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
														: withdrawal.status === "pending"
														? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
														: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
												}`}
											>
												{withdrawal.status === "completed" ? (
													<>
														<CheckCircle2 className="mr-1 h-3 w-3" />
														Completed
													</>
												) : withdrawal.status === "pending" ? (
													<>
														<Clock className="mr-1 h-3 w-3" />
														Pending
													</>
												) : (
													<>
														<XCircle className="mr-1 h-3 w-3" />
														Rejected
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
