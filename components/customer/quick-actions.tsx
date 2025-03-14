import {
	ArrowDownIcon,
	ArrowUpIcon,
	CreditCardIcon,
	PiggyBankIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function QuickActions() {
	return (
		<div className="grid grid-cols-2 gap-4">
			<Button
				className="relative h-24 flex flex-col items-center justify-center space-y-2 bg-cover bg-center text-white overflow-hidden"
				style={{
					backgroundImage: "url('/savings2.avif')", // Replace with your actual image path
				}}
				asChild
			>
				<div>
					{/* Linear Gradient Overlay */}
					<div className="absolute -inset-3 bg-gradient-to-b from-black/50 to-transparent" />

					{/* Dark Overlay for better contrast */}
					<div className="absolute -inset-3 h-full bg-black/40" />
					<Link
						href="/dashboard/deposit"
						className="relative z-10 flex flex-col items-center"
					>
						<ArrowDownIcon className="h-6 w-6" />
						<span>Deposit Funds</span>
					</Link>
				</div>
			</Button>
			<Button
				className="relative h-24 flex flex-col items-center justify-center space-y-2 bg-cover bg-center text-white overflow-hidden"
				style={{
					backgroundImage: "url('/withdraw-funds.avif')", // Replace with your actual image path
				}}
				asChild
			>
				<div>
					{/* Linear Gradient Overlay */}
					<div className="absolute -inset-3 bg-gradient-to-b from-black/50 to-transparent" />

					{/* Dark Overlay for better contrast */}
					<div className="absolute -inset-3 bg-black/40" />
					<Link
						href="/dashboard/withdraw"
						className="relative z-10 flex flex-col items-center"
					>
						<ArrowUpIcon className="h-6 w-6" />
						<span>Withdraw Funds</span>
					</Link>
				</div>
			</Button>
			<Button
				className="relative h-24 flex flex-col items-center justify-center space-y-2 bg-cover bg-center text-white overflow-hidden"
				style={{
					backgroundImage: "url('/apply-loan.avif')", // Replace with your actual image path
				}}
				asChild
			>
				<div>
					{/* Linear Gradient Overlay */}
					<div className="absolute -inset-3 bg-gradient-to-b from-black/50 to-transparent" />

					{/* Dark Overlay for better contrast */}
					<div className="absolute -inset-3 bg-black/40" />
					<Link
						href="/dashboard/deposit"
						className="relative z-10 flex flex-col items-center"
					>
						<CreditCardIcon className="h-6 w-6" />
						<span>Apply for Loan</span>
					</Link>
				</div>
			</Button>
			<Button
				className="relative h-24 flex flex-col items-center justify-center space-y-2 bg-cover bg-center text-white overflow-hidden"
				style={{
					backgroundImage: "url('/saving-account.avif')", // Replace with your actual image path
				}}
				asChild
			>
				<div>
					{/* Linear Gradient Overlay */}
					<div className="absolute -inset-3 bg-gradient-to-b from-black/50 to-transparent" />

					{/* Dark Overlay for better contrast */}
					<div className="absolute h-full -inset-3 bg-black/40" />
					<Link
						href="/dashboard/deposit"
						className="relative z-10 flex flex-col items-center"
					>
						<PiggyBankIcon className="h-6 w-6" />
						<span>Open Savings</span>
					</Link>
				</div>
			</Button>
		</div>
	);
}
