"use client";

import { Button } from "@/components/ui/button";
import {
	HomeIcon,
	LineChartIcon,
	CreditCardIcon,
	PieChartIcon,
	UsersIcon,
	SettingsIcon,
} from "lucide-react";

export function Sidebar() {
	return (
		<aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 z-50 border-r bg-background">
			<div className="flex h-14 items-center border-b px-4">
				<span className="text-xl font-bold">FinancePro</span>
			</div>
			<nav className="flex-1 space-y-2 p-4">
				<Button variant="secondary" className="w-full justify-start" asChild>
					<a href="#" className="flex items-center">
						<HomeIcon className="mr-2 h-5 w-5" />
						Dashboard
					</a>
				</Button>
				<Button variant="ghost" className="w-full justify-start" asChild>
					<a href="#" className="flex items-center">
						<LineChartIcon className="mr-2 h-5 w-5" />
						Analytics
					</a>
				</Button>
				<Button variant="ghost" className="w-full justify-start" asChild>
					<a href="#" className="flex items-center">
						<CreditCardIcon className="mr-2 h-5 w-5" />
						Transactions
					</a>
				</Button>
				<Button variant="ghost" className="w-full justify-start" asChild>
					<a href="#" className="flex items-center">
						<PieChartIcon className="mr-2 h-5 w-5" />
						Investments
					</a>
				</Button>
				<Button variant="ghost" className="w-full justify-start" asChild>
					<a href="#" className="flex items-center">
						<UsersIcon className="mr-2 h-5 w-5" />
						Accounts
					</a>
				</Button>
				<Button variant="ghost" className="w-full justify-start" asChild>
					<a href="#" className="flex items-center">
						<SettingsIcon className="mr-2 h-5 w-5" />
						Settings
					</a>
				</Button>
			</nav>
		</aside>
	);
}
