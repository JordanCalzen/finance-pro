"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { MonthlyExpensesChart } from "./monthly-expenses-chart";
import { AssetAllocation } from "./asset-allocation";
import { MonthlyExpensesChart } from "./monthly-expenses-chart";
import { IncomeVsExpensesChart } from "./income-vs-expenses-chart";
import { RecentTransactions } from "./recent-transactions";
// import { IncomeVsExpensesChart } from "./income-vs-expenses-chart";
// import { RecentTransactions } from "./recent-transactions";

interface DashboardTabsProps {
	monthlyExpensesData: Array<{ name: string; value: number }>;
	incomeVsExpensesData: Array<{
		name: string;
		income: number;
		expenses: number;
	}>;
	assetAllocationData: Array<{ name: string; value: number }>;
	recentTransactions: Array<{
		id: number;
		description: string;
		date: string;
		amount: number;
		category: string;
		status: string;
	}>;
}

export function DashboardTabs({
	monthlyExpensesData,
	incomeVsExpensesData,
	assetAllocationData,
	recentTransactions,
}: DashboardTabsProps) {
	return (
		<Tabs defaultValue="overview" className="space-y-4">
			<div className="overflow-x-auto -mx-2 px-2">
				<TabsList className="flex w-full justify-start sm:justify-center">
					<TabsTrigger value="overview" className="text-xs sm:text-sm">
						Overview
					</TabsTrigger>
					<TabsTrigger value="analytics" className="text-xs sm:text-sm">
						Analytics
					</TabsTrigger>
					<TabsTrigger value="reports" className="text-xs sm:text-sm">
						Reports
					</TabsTrigger>
					<TabsTrigger value="notifications" className="text-xs sm:text-sm">
						Notifications
					</TabsTrigger>
				</TabsList>
			</div>
			<TabsContent value="overview" className="space-y-4">
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
					<MonthlyExpensesChart data={monthlyExpensesData} />
					<AssetAllocation data={assetAllocationData} />
				</div>
				<IncomeVsExpensesChart data={incomeVsExpensesData} />
				<RecentTransactions transactions={recentTransactions} />
			</TabsContent>
			<TabsContent value="analytics" className="space-y-4">
				<Card>
					<CardHeader className="p-3 sm:p-6">
						<CardTitle className="text-sm sm:text-base">
							Advanced Analytics
						</CardTitle>
						<CardDescription className="text-xs">
							Detailed analysis of your financial data
						</CardDescription>
					</CardHeader>
					<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
						<div className="flex items-center justify-center h-32 sm:h-40 border rounded-md">
							<p className="text-xs sm:text-sm text-muted-foreground">
								Analytics content will appear here
							</p>
						</div>
					</CardContent>
				</Card>
			</TabsContent>
			<TabsContent value="reports" className="space-y-4">
				<Card>
					<CardHeader className="p-3 sm:p-6">
						<CardTitle className="text-sm sm:text-base">
							Financial Reports
						</CardTitle>
						<CardDescription className="text-xs">
							Generate and view your financial reports
						</CardDescription>
					</CardHeader>
					<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
						<div className="flex items-center justify-center h-32 sm:h-40 border rounded-md">
							<p className="text-xs sm:text-sm text-muted-foreground">
								Reports content will appear here
							</p>
						</div>
					</CardContent>
				</Card>
			</TabsContent>
			<TabsContent value="notifications" className="space-y-4">
				<Card>
					<CardHeader className="p-3 sm:p-6">
						<CardTitle className="text-sm sm:text-base">
							Notifications
						</CardTitle>
						<CardDescription className="text-xs">
							Your financial alerts and notifications
						</CardDescription>
					</CardHeader>
					<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
						<div className="flex items-center justify-center h-32 sm:h-40 border rounded-md">
							<p className="text-xs sm:text-sm text-muted-foreground">
								Notifications content will appear here
							</p>
						</div>
					</CardContent>
				</Card>
			</TabsContent>
		</Tabs>
	);
}
