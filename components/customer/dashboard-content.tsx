"use client";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { AccountOverview } from "./account-overview";
import { RecentTransactions } from "./recent-transactions";
import { QuickActions } from "./quick-actions";
import { LoanManagement } from "./loan-management";
import { SavingsManagement } from "./savings-management";
import { SupportSection } from "./support-section";
import { useAccount, useAccounts } from "@/app/hooks/useAccounts";
import { Session } from "next-auth";

export default function DashboardContent({
	session,
}: {
	session: Session | null;
}) {
	const { Accounts, isLoading, error } = useAccounts();

	console.log("Accounts Data:", Accounts);
	console.log("Session Data:", session);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error loading accounts</p>;
	if (!Accounts || Accounts.length === 0) return <p>No accounts found</p>;

	const filteredAccounts = Accounts.filter(
		(account) => session?.user?.id && account.userId === session.user.id
	);
	const firstAccount = filteredAccounts[0];
	return (
		<div className="flex flex-col">
			<div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
				<div className="flex items-center justify-between space-y-2">
					<h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
				</div>

				<Tabs defaultValue="overview" className="space-y-4">
					<TabsList>
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="transactions">Transactions</TabsTrigger>
						<TabsTrigger value="loans">Loans & Savings</TabsTrigger>
						<TabsTrigger value="support">Support</TabsTrigger>
					</TabsList>

					<TabsContent value="overview" className="space-y-4">
						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
							<Suspense fallback={<Skeleton className="h-[125px] w-full" />}>
								{firstAccount ? (
									<AccountOverview
										key={firstAccount.id}
										account={firstAccount}
									/>
								) : (
									<p>No account data available.</p>
								)}
							</Suspense>
						</div>

						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
							<Card className="col-span-4">
								<CardHeader>
									<CardTitle>Recent Transactions</CardTitle>
									<CardDescription>
										Your recent financial activity
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Suspense
										fallback={<Skeleton className="h-[200px] w-full" />}
									>
										<RecentTransactions limit={5} />
									</Suspense>
								</CardContent>
								<CardFooter>
									<Button variant="outline" className="w-full" asChild>
										<a href="/dashboard/transactions">View All Transactions</a>
									</Button>
								</CardFooter>
							</Card>

							<Card className="col-span-4 lg:col-span-3">
								<CardHeader>
									<CardTitle>Quick Actions</CardTitle>
									<CardDescription>
										Frequently used banking functions
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Suspense
										fallback={<Skeleton className="h-[200px] w-full" />}
									>
										<QuickActions />
									</Suspense>
								</CardContent>
							</Card>
						</div>
					</TabsContent>

					<TabsContent value="transactions" className="space-y-4">
						<Card>
							<CardHeader>
								<CardTitle>Transaction History</CardTitle>
								<CardDescription>
									A complete record of your financial activity
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
									<RecentTransactions />
								</Suspense>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="loans" className="space-y-4">
						<div className="grid gap-4 md:grid-cols-2">
							<Card>
								<CardHeader>
									<CardTitle>Loan Management</CardTitle>
									<CardDescription>
										Manage your current loans and repayments
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Suspense
										fallback={<Skeleton className="h-[300px] w-full" />}
									>
										<LoanManagement />
									</Suspense>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle>Savings Account</CardTitle>
									<CardDescription>
										Manage your savings and interest
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Suspense
										fallback={<Skeleton className="h-[300px] w-full" />}
									>
										<SavingsManagement />
									</Suspense>
								</CardContent>
							</Card>
						</div>
					</TabsContent>

					<TabsContent value="support" className="space-y-4">
						<Card>
							<CardHeader>
								<CardTitle>Support & Conflict Resolution</CardTitle>
								<CardDescription>
									Get help with your account or report issues
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
									<SupportSection />
								</Suspense>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
