"use client";

import { Button } from "@/components/ui/button";
import {
	HomeIcon,
	LineChartIcon,
	CreditCardIcon,
	UsersIcon,
	SettingsIcon,
	HandCoins,
	Wallet,
} from "lucide-react";
import { PiHandWithdrawDuotone } from "react-icons/pi";
import { RiLuggageDepositLine } from "react-icons/ri";
import Link from "next/link";

const navItems = [
	{ href: "/", label: "Home", icon: HomeIcon },
	{ href: "#", label: "Analytics", icon: LineChartIcon },
	{ href: "#", label: "Transactions", icon: CreditCardIcon },
	{ href: "#", label: "Savings", icon: Wallet },
	{ href: "/withdraw", label: "Withdraw", icon: PiHandWithdrawDuotone },
	{ href: "/deposits", label: "Deposits", icon: RiLuggageDepositLine },
	{ href: "/loans", label: "Loans", icon: HandCoins },
	{ href: "#", label: "Accounts", icon: UsersIcon },
	{ href: "#", label: "Settings", icon: SettingsIcon },
];

export function Sidebar() {
	return (
		<aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 z-50 border-r bg-background">
			<div className="flex h-14 items-center border-b px-4">
				<span className="text-xl font-bold">FinancePro</span>
			</div>
			<nav className="flex-1 space-y-2 p-4">
				{navItems.map(({ href, label, icon: Icon }) => (
					<Button
						key={label}
						variant={href === "/" ? "secondary" : "ghost"}
						className="w-full justify-start"
						asChild
					>
						<Link href={href} className="flex items-center">
							<Icon className="mr-2 h-5 w-5" />
							{label}
						</Link>
					</Button>
				))}
			</nav>
		</aside>
	);
}
