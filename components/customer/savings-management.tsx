import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpIcon, TrendingUpIcon } from "lucide-react";

// This would typically fetch data from an API
async function getSavingsData() {
	// Simulated API call
	return {
		hasSavingsAccount: true,
		balance: 3500,
		interestRate: 2.5,
		interestEarned: 87.5,
		lastDepositDate: "2025-02-15",
		lastDepositAmount: 500,
	};
}

export function SavingsManagement() {
	// In a real app, this would use React Query or SWR to fetch data
	// For this example, we'll simulate the data
	const savingsData = {
		hasSavingsAccount: true,
		balance: 3500,
		interestRate: 2.5,
		interestEarned: 87.5,
		lastDepositDate: "2025-02-15",
		lastDepositAmount: 500,
	};

	if (!savingsData.hasSavingsAccount) {
		return (
			<div className="flex flex-col items-center justify-center space-y-4 py-8">
				<p className="text-center text-muted-foreground">
					You don't have a savings account yet
				</p>
				<Button asChild>
					<a href="/dashboard/savings/open">Open Savings Account</a>
				</Button>
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="grid gap-4 grid-cols-2">
				<div>
					<p className="text-sm font-medium">Current Balance</p>
					<p className="text-2xl font-bold">
						${savingsData.balance.toLocaleString()}
					</p>
				</div>
				<div>
					<p className="text-sm font-medium">Interest Rate</p>
					<p className="text-2xl font-bold">{savingsData.interestRate}% APY</p>
				</div>
			</div>

			<Card>
				<CardContent className="p-4 flex items-center space-x-2">
					<TrendingUpIcon className="h-5 w-5 text-primary" />
					<div>
						<p className="text-sm font-medium">
							Interest Earned: ${savingsData.interestEarned.toLocaleString()}
						</p>
						<p className="text-xs text-muted-foreground">Year to date</p>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardContent className="p-4 flex items-center space-x-2">
					<ArrowUpIcon className="h-5 w-5 text-primary" />
					<div>
						<p className="text-sm font-medium">
							Last Deposit: ${savingsData.lastDepositAmount.toLocaleString()}
						</p>
						<p className="text-xs text-muted-foreground">
							on {new Date(savingsData.lastDepositDate).toLocaleDateString()}
						</p>
					</div>
				</CardContent>
			</Card>

			<div className="flex space-x-2">
				<Button className="flex-1" asChild>
					<a href="/dashboard/savings/deposit">Deposit</a>
				</Button>
				<Button variant="outline" className="flex-1" asChild>
					<a href="/dashboard/savings/withdraw">Withdraw</a>
				</Button>
			</div>
		</div>
	);
}
