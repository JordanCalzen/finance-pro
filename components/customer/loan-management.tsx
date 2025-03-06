import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

// This would typically fetch data from an API
async function getLoanData() {
	// Simulated API call
	return {
		hasActiveLoan: true,
		loanAmount: 5000,
		remainingBalance: 3750,
		nextPaymentDate: "2025-04-01",
		nextPaymentAmount: 250,
		interestRate: 5.5,
		paymentsMade: 5,
		totalPayments: 20,
	};
}

export function LoanManagement() {
	// In a real app, this would use React Query or SWR to fetch data
	// For this example, we'll simulate the data
	const loanData = {
		hasActiveLoan: true,
		loanAmount: 5000,
		remainingBalance: 3750,
		nextPaymentDate: "2025-04-01",
		nextPaymentAmount: 250,
		interestRate: 5.5,
		paymentsMade: 5,
		totalPayments: 20,
	};

	const progressPercentage =
		(loanData.paymentsMade / loanData.totalPayments) * 100;

	if (!loanData.hasActiveLoan) {
		return (
			<div className="flex flex-col items-center justify-center space-y-4 py-8">
				<p className="text-center text-muted-foreground">
					You don't have any active loans
				</p>
				<Button asChild>
					<a href="/dashboard/loan/apply">Apply for a Loan</a>
				</Button>
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="space-y-2">
				<div className="flex justify-between">
					<span className="text-sm font-medium">Loan Progress</span>
					<span className="text-sm text-muted-foreground">
						{loanData.paymentsMade} of {loanData.totalPayments} payments
					</span>
				</div>
				<Progress value={progressPercentage} className="h-2" />
			</div>

			<div className="grid gap-4 grid-cols-2">
				<div>
					<p className="text-sm font-medium">Original Amount</p>
					<p className="text-2xl font-bold">
						${loanData.loanAmount.toLocaleString()}
					</p>
				</div>
				<div>
					<p className="text-sm font-medium">Remaining Balance</p>
					<p className="text-2xl font-bold">
						${loanData.remainingBalance.toLocaleString()}
					</p>
				</div>
			</div>

			<Card>
				<CardContent className="p-4 flex items-center space-x-2">
					<AlertCircle className="h-5 w-5 text-primary" />
					<div>
						<p className="text-sm font-medium">
							Next Payment: ${loanData.nextPaymentAmount} due on{" "}
							{new Date(loanData.nextPaymentDate).toLocaleDateString()}
						</p>
					</div>
				</CardContent>
			</Card>

			<div className="flex space-x-2">
				<Button className="flex-1" asChild>
					<a href="/dashboard/loan/repay">Make Payment</a>
				</Button>
				<Button variant="outline" className="flex-1" asChild>
					<a href="/dashboard/loan/details">View Details</a>
				</Button>
			</div>
		</div>
	);
}
