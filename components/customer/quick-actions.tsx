import {
	ArrowDownIcon,
	ArrowUpIcon,
	CreditCardIcon,
	PiggyBankIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuickActions() {
	return (
		<div className="grid grid-cols-2 gap-4">
			<Button
				className="h-24 flex flex-col items-center justify-center space-y-2"
				asChild
			>
				<a href="/dashboard/deposit">
					<ArrowDownIcon className="h-6 w-6" />
					<span>Deposit Funds</span>
				</a>
			</Button>

			<Button
				className="h-24 flex flex-col items-center justify-center space-y-2"
				asChild
			>
				<a href="/dashboard/withdraw">
					<ArrowUpIcon className="h-6 w-6" />
					<span>Withdraw Funds</span>
				</a>
			</Button>

			<Button
				className="h-24 flex flex-col items-center justify-center space-y-2"
				asChild
			>
				<a href="/dashboard/loan/apply">
					<CreditCardIcon className="h-6 w-6" />
					<span>Apply for Loan</span>
				</a>
			</Button>

			<Button
				className="h-24 flex flex-col items-center justify-center space-y-2"
				asChild
			>
				<a href="/dashboard/savings/open">
					<PiggyBankIcon className="h-6 w-6" />
					<span>Open Savings</span>
				</a>
			</Button>
		</div>
	);
}
