import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Transaction {
	id: number;
	description: string;
	date: string;
	amount: number;
	category: string;
	status: string;
}

interface RecentTransactionsProps {
	transactions: Transaction[];
}

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
	return (
		<Card>
			<CardHeader className="p-3 sm:p-6">
				<CardTitle className="text-sm sm:text-base">
					Recent Transactions
				</CardTitle>
				<CardDescription className="text-xs">
					Your recent financial activities
				</CardDescription>
			</CardHeader>
			<CardContent className="p-0 sm:p-6 sm:pt-0">
				<div className="overflow-x-auto">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="text-xs">Description</TableHead>
								<TableHead className="text-xs hidden sm:table-cell">
									Category
								</TableHead>
								<TableHead className="text-xs">Date</TableHead>
								<TableHead className="text-xs text-right">Amount</TableHead>
								<TableHead className="text-xs text-right">Status</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{transactions.map((transaction) => (
								<TableRow key={transaction.id}>
									<TableCell className="font-medium text-xs p-2 sm:p-4">
										{transaction.description}
									</TableCell>
									<TableCell className="text-xs p-2 sm:p-4 hidden sm:table-cell">
										{transaction.category}
									</TableCell>
									<TableCell className="text-xs p-2 sm:p-4">
										{transaction.date}
									</TableCell>
									<TableCell
										className={`text-xs p-2 sm:p-4 text-right ${
											transaction.amount > 0 ? "text-emerald-500" : ""
										}`}
									>
										{transaction.amount > 0 ? "+" : ""}$
										{Math.abs(transaction.amount).toFixed(2)}
									</TableCell>
									<TableCell className="text-xs p-2 sm:p-4 text-right">
										<Badge
											variant={
												transaction.status === "Completed"
													? "outline"
													: "secondary"
											}
											className="text-[10px] sm:text-xs px-1 py-0 sm:px-2 sm:py-0.5"
										>
											{transaction.status}
										</Badge>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</CardContent>
		</Card>
	);
}
