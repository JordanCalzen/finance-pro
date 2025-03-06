"use client";

import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type Transaction = {
	id: string;
	date: string;
	type: "Deposit" | "Withdrawal" | "Loan Payment";
	amount: number;
	status: "Pending" | "Approved" | "Rejected";
};

// This would typically fetch data from an API
async function getTransactions() {
	// Simulated API call
	return [
		{
			id: "T1001",
			date: "2025-03-05",
			type: "Deposit",
			amount: 1500,
			status: "Approved",
		},
		{
			id: "T1002",
			date: "2025-03-04",
			type: "Withdrawal",
			amount: 500,
			status: "Approved",
		},
		{
			id: "T1003",
			date: "2025-03-03",
			type: "Loan Payment",
			amount: 250,
			status: "Approved",
		},
		{
			id: "T1004",
			date: "2025-03-02",
			type: "Deposit",
			amount: 2000,
			status: "Approved",
		},
		{
			id: "T1005",
			date: "2025-03-01",
			type: "Withdrawal",
			amount: 300,
			status: "Pending",
		},
		{
			id: "T1006",
			date: "2025-02-28",
			type: "Deposit",
			amount: 1000,
			status: "Approved",
		},
		{
			id: "T1007",
			date: "2025-02-27",
			type: "Withdrawal",
			amount: 150,
			status: "Rejected",
		},
		{
			id: "T1008",
			date: "2025-02-26",
			type: "Loan Payment",
			amount: 250,
			status: "Approved",
		},
	] as Transaction[];
}

export function RecentTransactions({ limit }: { limit?: number }) {
	const [searchTerm, setSearchTerm] = useState("");
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	// In a real app, this would use useEffect or React Query to fetch data
	// For this example, we'll simulate the data fetch
	if (transactions.length === 0) {
		getTransactions().then((data) => {
			setTransactions(data);
		});
	}

	const filteredTransactions = transactions.filter(
		(transaction) =>
			transaction.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
			transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
			transaction.status.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const displayTransactions = limit
		? filteredTransactions.slice(0, limit)
		: filteredTransactions;

	return (
		<div className="space-y-4">
			<div className="flex w-full max-w-sm items-center space-x-2">
				<Input
					placeholder="Search transactions..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>

			<div className="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Date</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Amount</TableHead>
							<TableHead>Status</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{displayTransactions.map((transaction) => (
							<TableRow key={transaction.id}>
								<TableCell>
									{new Date(transaction.date).toLocaleDateString()}
								</TableCell>
								<TableCell>{transaction.type}</TableCell>
								<TableCell>${transaction.amount.toLocaleString()}</TableCell>
								<TableCell>
									<Badge
										variant={
											transaction.status === "Approved"
												? "success"
												: transaction.status === "Pending"
												? "outline"
												: "destructive"
										}
									>
										{transaction.status}
									</Badge>
								</TableCell>
							</TableRow>
						))}
						{displayTransactions.length === 0 && (
							<TableRow>
								<TableCell colSpan={4} className="text-center">
									No transactions found
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
