"use client";

import { Button } from "@/components/ui/button";
import {
	HomeIcon,
	LineChartIcon,
	CreditCardIcon,
	PieChartIcon,
	UsersIcon,
	SettingsIcon,
	XIcon,
} from "lucide-react";

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden">
			<div className="fixed inset-y-0 left-0 z-50 w-[85%] max-w-xs bg-background p-4 shadow-lg">
				<div className="flex items-center justify-between mb-6">
					<span className="text-lg font-bold">FinancePro</span>
					<Button variant="ghost" size="icon" onClick={onClose}>
						<XIcon className="h-5 w-5" />
					</Button>
				</div>
				<nav className="space-y-4">
					<div className="space-y-1">
						<Button
							variant="ghost"
							className="w-full justify-start text-sm h-9"
							asChild
						>
							<a href="#" className="flex items-center">
								<HomeIcon className="mr-2 h-4 w-4" />
								Dashboard
							</a>
						</Button>
						<Button
							variant="ghost"
							className="w-full justify-start text-sm h-9"
							asChild
						>
							<a href="#" className="flex items-center">
								<LineChartIcon className="mr-2 h-4 w-4" />
								Analytics
							</a>
						</Button>
						<Button
							variant="ghost"
							className="w-full justify-start text-sm h-9"
							asChild
						>
							<a href="#" className="flex items-center">
								<CreditCardIcon className="mr-2 h-4 w-4" />
								Transactions
							</a>
						</Button>
						<Button
							variant="ghost"
							className="w-full justify-start text-sm h-9"
							asChild
						>
							<a href="#" className="flex items-center">
								<PieChartIcon className="mr-2 h-4 w-4" />
								Investments
							</a>
						</Button>
						<Button
							variant="ghost"
							className="w-full justify-start text-sm h-9"
							asChild
						>
							<a href="#" className="flex items-center">
								<UsersIcon className="mr-2 h-4 w-4" />
								Accounts
							</a>
						</Button>
						<Button
							variant="ghost"
							className="w-full justify-start text-sm h-9"
							asChild
						>
							<a href="#" className="flex items-center">
								<SettingsIcon className="mr-2 h-4 w-4" />
								Settings
							</a>
						</Button>
					</div>
				</nav>
			</div>
		</div>
	);
}
