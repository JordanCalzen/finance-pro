"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	HomeIcon,
	LineChartIcon,
	CreditCardIcon,
	UsersIcon,
	SettingsIcon,
	HandCoins,
	Wallet,
	AlertTriangle,
	FileText,
	DollarSignIcon,
	GavelIcon,
	PieChartIcon,
} from "lucide-react";
import { PiHandWithdrawDuotone } from "react-icons/pi";
import { RiLuggageDepositLine } from "react-icons/ri";
import Link from "next/link";

const navItems = [
	{ href: "/", label: "Home", icon: HomeIcon, roles: ["USER"] },
	{
		href: "/worker",
		label: "Worker Dashboard",
		icon: HomeIcon,
		roles: ["ADMIN", "SERVICE_PROVIDER"],
	},
	{
		href: "/admin",
		label: "Admin Dashboard",
		icon: HomeIcon,
		roles: ["ADMIN"],
	},
	{
		href: "/transactions",
		label: "Transactions",
		icon: CreditCardIcon,
		roles: ["USER", "ADMIN"],
	},
	{ href: "/savings", label: "Savings", icon: Wallet, roles: ["USER"] },
	{
		href: "/dashboard/withdraw",
		label: "Withdraw",
		icon: PiHandWithdrawDuotone,
		roles: ["USER"],
	},
	{
		href: "/dashboard/deposit",
		label: "Deposits",
		icon: RiLuggageDepositLine,
		roles: ["USER"],
	},
	{ href: "/loans", label: "Loans", icon: HandCoins, roles: ["USER"] },
	{ href: "/accounts", label: "Accounts", icon: UsersIcon, roles: ["USER"] },
	{
		href: "/dashboard/setup",
		label: "Settings",
		icon: SettingsIcon,
		roles: ["USER"],
	},
	{
		href: "/disputes",
		label: "Disputes",
		icon: AlertTriangle,
		roles: ["ADMIN", "SERVICE_PROVIDER"],
	},
	{
		href: "/approveLoans",
		label: "Approve Loans",
		icon: FileText,
		roles: ["ADMIN", "SERVICE_PROVIDER"],
	},
	{
		href: "/userManagement",
		label: "User Management",
		icon: UsersIcon,
		roles: ["ADMIN"],
	},
	{
		href: "/adminLoansApproval",
		label: "Loan Approvals",
		icon: DollarSignIcon,
		roles: ["ADMIN"],
	},
	{
		href: "/adminDisputes",
		label: "Admin Disputes",
		icon: GavelIcon,
		roles: ["ADMIN"],
	},
	{ href: "/reports", label: "Reports", icon: PieChartIcon, roles: ["ADMIN"] },
	{
		href: "/adminSettings",
		label: "System Settings",
		icon: SettingsIcon,
		roles: ["ADMIN"],
	},
];

export function Sidebar({ role }: { role: string }) {
	const pathname = usePathname(); // Get the current path

	return (
		<aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 z-50 border-r bg-background">
			<div className="flex h-14 items-center border-b px-4">
				<span className="text-xl font-bold">FinancePro</span>
			</div>
			<nav className="flex-1 space-y-2 p-4">
				{navItems
					.filter(({ roles }) => roles.includes(role))
					.map(({ href, label, icon: Icon }) => {
						const isActive = pathname === href;
						return (
							<Button
								key={label}
								variant={isActive ? "secondary" : "ghost"}
								className={`w-full justify-start ${
									isActive ? "bg-primary text-white" : ""
								}`}
								asChild
							>
								<Link href={href} className="flex items-center">
									<Icon className="mr-2 h-5 w-5" />
									{label}
								</Link>
							</Button>
						);
					})}
			</nav>
		</aside>
	);
}
