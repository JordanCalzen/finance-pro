// "use client";

// import { Button } from "@/components/ui/button";
// import {
// 	HomeIcon,
// 	LineChartIcon,
// 	CreditCardIcon,
// 	UsersIcon,
// 	SettingsIcon,
// 	HandCoins,
// 	Wallet,
// 	AlertTriangle,
// 	FileText,
// 	DollarSignIcon,
// 	GavelIcon,
// 	PieChartIcon,
// } from "lucide-react";
// import { PiHandWithdrawDuotone } from "react-icons/pi";
// import { RiLuggageDepositLine } from "react-icons/ri";
// import Link from "next/link";
// // import { UserRole } from "@prisma/client";

// const navItems = [
// 	{
// 		href: "/",
// 		label: "Home",
// 		icon: HomeIcon,
// 		roles: ["USER"],
// 	},
// 	{
// 		href: "/worker",
// 		label: "Worker Dashboard",
// 		icon: HomeIcon,
// 		roles: ["ADMIN", "SERVICE_PROVIDER"],
// 	},
// 	{
// 		href: "/admin",
// 		label: "Admin Dashboard",
// 		icon: HomeIcon,
// 		roles: ["ADMIN"],
// 	},
// 	{
// 		href: "#",
// 		label: "Analytics",
// 		icon: LineChartIcon,
// 		roles: ["USER"],
// 	},
// 	{
// 		href: "#",
// 		label: "Transactions",
// 		icon: CreditCardIcon,
// 		roles: ["USER"], // Fixed extra space
// 	},
// 	{
// 		href: "#",
// 		label: "Savings",
// 		icon: Wallet,
// 		roles: ["USER"],
// 	},
// 	{
// 		href: "/withdraw",
// 		label: "Withdraw",
// 		icon: PiHandWithdrawDuotone,
// 		roles: ["USER"],
// 	},
// 	{
// 		href: "/deposits",
// 		label: "Deposits",
// 		icon: RiLuggageDepositLine,
// 		roles: ["USER"], // Fixed empty slot
// 	},
// 	{
// 		href: "/loans",
// 		label: "Loans",
// 		icon: HandCoins,
// 		roles: ["USER"], // Fixed empty slot
// 	},
// 	{
// 		href: "#",
// 		label: "Accounts",
// 		icon: UsersIcon,
// 		roles: ["USER"],
// 	},
// 	{
// 		href: "/setup",
// 		label: "Settings",
// 		icon: SettingsIcon,
// 		roles: ["USER"],
// 	},
// 	{
// 		href: "/disputes",
// 		label: "Disputes",
// 		icon: AlertTriangle,
// 		roles: ["ADMIN", "SERVICE_PROVIDER"],
// 	},
// 	{
// 		href: "/approveLoans",
// 		label: "Approve Loans",
// 		icon: FileText,
// 		roles: ["ADMIN", "SERVICE_PROVIDER"],
// 	},
// 	{
// 		href: "/userManagement",
// 		label: "User Management",
// 		icon: UsersIcon,
// 		roles: ["ADMIN"], // Fixed extra space
// 	},
// 	{
// 		href: "/transactions",
// 		label: "Transactions",
// 		icon: CreditCardIcon,
// 		roles: ["ADMIN"], // Fixed extra space
// 	},
// 	{
// 		href: "/adminLoansApproval",
// 		label: "Loan Approvals",
// 		icon: DollarSignIcon,
// 		roles: ["ADMIN"], // Fixed extra space
// 	},
// 	{
// 		href: "/adminDisputes",
// 		label: "Admin Disputes",
// 		icon: GavelIcon,
// 		roles: ["ADMIN"], // Fixed extra space
// 	},
// 	{
// 		href: "/reports",
// 		label: "Reports",
// 		icon: PieChartIcon,
// 		roles: ["ADMIN"], // Fixed extra space
// 	},
// 	{
// 		href: "/adminSettings",
// 		label: "System Settings",
// 		icon: SettingsIcon,
// 		roles: ["ADMIN"], // Fixed extra space
// 	},
// ];

// export function Sidebar({ role }: { role: string }) {
// 	// Debugging: Log role and matched nav items
// 	console.log("User Role:", role);
// 	const filteredNavItems = navItems.filter(({ roles }) =>
// 		roles.map((r) => r.trim()).includes(role)
// 	);
// 	console.log("Filtered Nav Items:", filteredNavItems);

// 	return (
// 		<aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 z-50 border-r bg-background">
// 			<div className="flex h-14 items-center border-b px-4">
// 				<span className="text-xl font-bold">FinancePro</span>
// 			</div>
// 			<nav className="flex-1 space-y-2 p-4">
// 				{filteredNavItems.map(({ href, label, icon: Icon }) => (
// 					<Button
// 						key={label}
// 						variant={href === "/" ? "secondary" : "ghost"}
// 						className="w-full justify-start"
// 						asChild
// 					>
// 						<Link href={href} className="flex items-center">
// 							<Icon className="mr-2 h-5 w-5" />
// 							{label}
// 						</Link>
// 					</Button>
// 				))}
// 			</nav>
// 		</aside>
// 	);
// }

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
	AlertTriangle,
	FileText,
	DollarSignIcon,
	GavelIcon,
	PieChartIcon,
} from "lucide-react";
import { PiHandWithdrawDuotone } from "react-icons/pi";
import { RiLuggageDepositLine } from "react-icons/ri";
import Link from "next/link";
import { UserRole } from "@prisma/client";

const navItems = [
	{
		href: "/",
		label: "Home",
		icon: HomeIcon,
		roles: ["USER"],
	},
	{
		href: "/worker",
		label: "Home",
		icon: HomeIcon,
		roles: ["ADMIN", "SERVICE_PROVIDER"],
	},
	{
		href: "/admin",
		label: "Home",
		icon: HomeIcon,
		roles: ["ADMIN"],
	},
	{
		href: "#",
		label: "Analytics",
		icon: LineChartIcon,
		roles: ["USER"],
	},
	{
		href: "#",
		label: "Transactions",
		icon: CreditCardIcon,
		roles: ["USER"],
	},
	{
		href: "#",
		label: "Savings",
		icon: Wallet,
		roles: ["USER"],
	},
	{
		href: "/withdraw",
		label: "Withdraw",
		icon: PiHandWithdrawDuotone,
		roles: ["USER"],
	},
	{
		href: "/deposits",
		label: "Deposits",
		icon: RiLuggageDepositLine,
		roles: ["USER"],
	},
	{
		href: "/loans",
		label: "Loans",
		icon: HandCoins,
		roles: ["USER"],
	},
	{
		href: "#",
		label: "Accounts",
		icon: UsersIcon,
		roles: ["USER"],
	},
	{
		href: "/setup",
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
		label: "Loans",
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
		href: "/transactions",
		label: "Transactions",
		icon: CreditCardIcon,
		roles: ["ADMIN"],
	},
	{
		href: "/adminLoansApproval",
		label: "Loans",
		icon: DollarSignIcon,
		roles: ["ADMIN"],
	},
	{
		href: "/adminDisputes",
		label: "Disputes",
		icon: GavelIcon,
		roles: ["ADMIN"],
	},
	{
		href: "/reports",
		label: "Reports",
		icon: PieChartIcon,
		roles: ["ADMIN"],
	},
	{
		href: "/adminSettings",
		label: "System Settings",
		icon: SettingsIcon,
		roles: ["ADMIN"],
	},
];

export function Sidebar({ role }: { role: string }) {
	return (
		<aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 z-50 border-r bg-background">
			<div className="flex h-14 items-center border-b px-4">
				<span className="text-xl font-bold">FinancePro</span>
			</div>
			<nav className="flex-1 space-y-2 p-4">
				{navItems
					.filter(({ roles }) => roles.includes(role)) // Only show allowed links
					.map(({ href, label, icon: Icon }) => (
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
