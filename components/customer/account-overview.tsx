"use client";
import { useDeposits, useWithdraws } from "@/app/hooks/useAccounts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Account } from "@prisma/client";
import {
	ArrowDownIcon,
	ArrowUpIcon,
	BanknoteIcon as BanknotesIcon,
	PiggyBankIcon,
} from "lucide-react";

// This would typically fetch data from an API
function getAccountData() {
	// Simulated API call
	return {
		currentBalance: 12450.75,
		totalDeposits: 15000,
		totalWithdrawals: 2549.25,
		loanStatus: "Active",
		loanAmount: 5000,
		savingsBalance: 3500,
	};
}

export function AccountOverview({ account }: { account: Account }) {
	const accountData = getAccountData();
	const { deposits, isLoading, error } = useDeposits();
	if (isLoading) {
		<p>Loading...</p>;
	}

	const totalDeposits = Array.isArray(deposits)
		? deposits.reduce((total, deposit) => total + deposit.amount, 0)
		: 0;

	const { withdraws } = useWithdraws();
	const totalWithdrawals = Array.isArray(withdraws)
		? withdraws.reduce((total, withdraw) => total + withdraw.amount, 0)
		: 0;

	return (
		<>
			<Card>
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-sm font-medium">Current Balance</CardTitle>
					<BanknotesIcon className="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold">
						{account.currency}
						{accountData.currentBalance.toLocaleString()}
					</div>
					<p className="text-xs text-muted-foreground">
						Available for withdrawal
					</p>
				</CardContent>
			</Card>

			<Card>
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-sm font-medium">Total Deposits</CardTitle>
					<ArrowDownIcon className="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold">
						{account.currency}
						{totalDeposits.toLocaleString()}
					</div>
					<p className="text-xs text-muted-foreground">Lifetime deposits</p>
				</CardContent>
			</Card>

			<Card>
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-sm font-medium">
						Total Withdrawals
					</CardTitle>
					<ArrowUpIcon className="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold">
						{account.currency}
						{totalWithdrawals.toLocaleString()}
					</div>
					<p className="text-xs text-muted-foreground">Lifetime withdrawals</p>
				</CardContent>
			</Card>

			<Card>
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-sm font-medium">Savings Balance</CardTitle>
					<PiggyBankIcon className="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold">
						{account.currency}
						{accountData.savingsBalance.toLocaleString()}
					</div>
					<p className="text-xs text-muted-foreground">Earning 2.5% APY</p>
				</CardContent>
			</Card>
		</>
	);
}
