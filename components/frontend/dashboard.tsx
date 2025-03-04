"use client";

import { useState, useEffect } from "react";
import {
	ArrowDownIcon,
	ArrowUpIcon,
	BellIcon,
	CreditCardIcon,
	DollarSignIcon,
	HomeIcon,
	LineChartIcon,
	MenuIcon,
	MoonIcon,
	PieChartIcon,
	SearchIcon,
	SettingsIcon,
	SunIcon,
	UserIcon,
	UsersIcon,
	XIcon,
} from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	ChartLegend,
	// ChartLegendItem,
	// ChartGrid,
	// ChartArea,
	// ChartXAxis,
	// ChartYAxis,
	// ChartBar,
} from "@/components/ui/chart";

export default function Dashboard() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Toggle dark mode
	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	// Apply dark mode class to html element
	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [isDarkMode]);

	// Sample data for charts
	const monthlyExpensesData = [
		{ name: "Jan", value: 2400 },
		{ name: "Feb", value: 1398 },
		{ name: "Mar", value: 9800 },
		{ name: "Apr", value: 3908 },
		{ name: "May", value: 4800 },
		{ name: "Jun", value: 3800 },
		{ name: "Jul", value: 4300 },
		{ name: "Aug", value: 5300 },
		{ name: "Sep", value: 4500 },
		{ name: "Oct", value: 3200 },
		{ name: "Nov", value: 2400 },
		{ name: "Dec", value: 3800 },
	];

	const incomeVsExpensesData = [
		{ name: "Jan", income: 4000, expenses: 2400 },
		{ name: "Feb", income: 3000, expenses: 1398 },
		{ name: "Mar", income: 9000, expenses: 8800 },
		{ name: "Apr", income: 5000, expenses: 3908 },
		{ name: "May", income: 8000, expenses: 4800 },
		{ name: "Jun", income: 6000, expenses: 3800 },
	];

	const assetAllocationData = [
		{ name: "Stocks", value: 45 },
		{ name: "Bonds", value: 20 },
		{ name: "Real Estate", value: 15 },
		{ name: "Cash", value: 10 },
		{ name: "Crypto", value: 10 },
	];

	const recentTransactions = [
		{
			id: 1,
			description: "Netflix Subscription",
			date: "Today, 2:34 PM",
			amount: -14.99,
			category: "Entertainment",
			status: "Completed",
		},
		{
			id: 2,
			description: "Salary Deposit",
			date: "Yesterday",
			amount: 4750.0,
			category: "Income",
			status: "Completed",
		},
		{
			id: 3,
			description: "Grocery Store",
			date: "Mar 12, 2023",
			amount: -68.54,
			category: "Food",
			status: "Completed",
		},
		{
			id: 4,
			description: "Electric Bill",
			date: "Mar 10, 2023",
			amount: -120.0,
			category: "Utilities",
			status: "Pending",
		},
		{
			id: 5,
			description: "Freelance Payment",
			date: "Mar 8, 2023",
			amount: 950.0,
			category: "Income",
			status: "Completed",
		},
		{
			id: 6,
			description: "Amazon Purchase",
			date: "Mar 7, 2023",
			amount: -49.99,
			category: "Shopping",
			status: "Completed",
		},
	];

	return (
		<div className={`min-h-screen bg-background ${isDarkMode ? "dark" : ""}`}>
			{/* Mobile Menu Overlay */}
			{isMobileMenuOpen && (
				<div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden">
					<div className="fixed inset-y-0 left-0 z-50 w-3/4 max-w-xs bg-background p-6 shadow-lg">
						<div className="flex items-center justify-between mb-8">
							<span className="text-xl font-bold">FinancePro</span>
							<Button
								variant="ghost"
								size="icon"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<XIcon className="h-6 w-6" />
							</Button>
						</div>
						<nav className="space-y-6">
							<div className="space-y-2">
								<Button
									variant="ghost"
									className="w-full justify-start"
									asChild
								>
									<a href="#" className="flex items-center">
										<HomeIcon className="mr-2 h-5 w-5" />
										Dashboard
									</a>
								</Button>
								<Button
									variant="ghost"
									className="w-full justify-start"
									asChild
								>
									<a href="#" className="flex items-center">
										<LineChartIcon className="mr-2 h-5 w-5" />
										Analytics
									</a>
								</Button>
								<Button
									variant="ghost"
									className="w-full justify-start"
									asChild
								>
									<a href="#" className="flex items-center">
										<CreditCardIcon className="mr-2 h-5 w-5" />
										Transactions
									</a>
								</Button>
								<Button
									variant="ghost"
									className="w-full justify-start"
									asChild
								>
									<a href="#" className="flex items-center">
										<PieChartIcon className="mr-2 h-5 w-5" />
										Investments
									</a>
								</Button>
								<Button
									variant="ghost"
									className="w-full justify-start"
									asChild
								>
									<a href="#" className="flex items-center">
										<UsersIcon className="mr-2 h-5 w-5" />
										Accounts
									</a>
								</Button>
								<Button
									variant="ghost"
									className="w-full justify-start"
									asChild
								>
									<a href="#" className="flex items-center">
										<SettingsIcon className="mr-2 h-5 w-5" />
										Settings
									</a>
								</Button>
							</div>
						</nav>
					</div>
				</div>
			)}

			<div className="flex min-h-screen">
				{/* Sidebar - Desktop */}
				<aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 z-50 border-r bg-background">
					<div className="flex h-14 items-center border-b px-4">
						<span className="text-xl font-bold">FinancePro</span>
					</div>
					<nav className="flex-1 space-y-2 p-4">
						<Button
							variant="secondary"
							className="w-full justify-start"
							asChild
						>
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

				{/* Main Content */}
				<main className="flex-1 lg:pl-64">
					{/* Header */}
					<header className="sticky top-0 z-40 border-b bg-background">
						<div className="flex h-14 items-center justify-between px-4 md:px-6">
							<div className="flex items-center gap-2">
								<Button
									variant="ghost"
									size="icon"
									className="lg:hidden"
									onClick={() => setIsMobileMenuOpen(true)}
								>
									<MenuIcon className="h-6 w-6" />
									<span className="sr-only">Toggle Menu</span>
								</Button>
								<div className="relative md:w-64 lg:w-80">
									<SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
									<Input
										type="search"
										placeholder="Search..."
										className="w-full bg-background pl-8 md:w-60 lg:w-80"
									/>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<Button variant="ghost" size="icon" onClick={toggleDarkMode}>
									{isDarkMode ? (
										<SunIcon className="h-5 w-5" />
									) : (
										<MoonIcon className="h-5 w-5" />
									)}
									<span className="sr-only">Toggle theme</span>
								</Button>
								<Button variant="ghost" size="icon">
									<BellIcon className="h-5 w-5" />
									<span className="sr-only">Notifications</span>
								</Button>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button
											variant="ghost"
											size="icon"
											className="rounded-full"
										>
											<Avatar className="h-8 w-8">
												<AvatarImage
													src="/placeholder.svg?height=32&width=32"
													alt="User"
												/>
												<AvatarFallback>JD</AvatarFallback>
											</Avatar>
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuLabel>My Account</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuItem>
											<UserIcon className="mr-2 h-4 w-4" />
											Profile
										</DropdownMenuItem>
										<DropdownMenuItem>
											<SettingsIcon className="mr-2 h-4 w-4" />
											Settings
										</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuItem>Log out</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						</div>
					</header>

					{/* Dashboard Content */}
					<div className="p-4 md:p-6 space-y-6">
						<div className="flex flex-col gap-2">
							<h1 className="text-3xl font-bold tracking-tight">
								Financial Dashboard
							</h1>
							<p className="text-muted-foreground">
								Welcome back, John! Here's an overview of your finances.
							</p>
						</div>

						{/* Financial Overview Cards */}
						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
							<Card>
								<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
									<CardTitle className="text-sm font-medium">
										Total Balance
									</CardTitle>
									<DollarSignIcon className="h-4 w-4 text-muted-foreground" />
								</CardHeader>
								<CardContent>
									<div className="text-2xl font-bold">$24,563.00</div>
									<p className="text-xs text-muted-foreground">
										<span className="text-emerald-500 flex items-center">
											<ArrowUpIcon className="mr-1 h-4 w-4" />
											+2.5%
										</span>{" "}
										from last month
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
									<CardTitle className="text-sm font-medium">
										Monthly Income
									</CardTitle>
									<ArrowUpIcon className="h-4 w-4 text-muted-foreground" />
								</CardHeader>
								<CardContent>
									<div className="text-2xl font-bold">$5,231.89</div>
									<p className="text-xs text-muted-foreground">
										<span className="text-emerald-500 flex items-center">
											<ArrowUpIcon className="mr-1 h-4 w-4" />
											+14.2%
										</span>{" "}
										from last month
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
									<CardTitle className="text-sm font-medium">
										Monthly Expenses
									</CardTitle>
									<ArrowDownIcon className="h-4 w-4 text-muted-foreground" />
								</CardHeader>
								<CardContent>
									<div className="text-2xl font-bold">$3,045.50</div>
									<p className="text-xs text-muted-foreground">
										<span className="text-rose-500 flex items-center">
											<ArrowUpIcon className="mr-1 h-4 w-4" />
											+5.1%
										</span>{" "}
										from last month
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
									<CardTitle className="text-sm font-medium">
										Savings Rate
									</CardTitle>
									<PieChartIcon className="h-4 w-4 text-muted-foreground" />
								</CardHeader>
								<CardContent>
									<div className="text-2xl font-bold">41.8%</div>
									<p className="text-xs text-muted-foreground">
										<span className="text-emerald-500 flex items-center">
											<ArrowUpIcon className="mr-1 h-4 w-4" />
											+8.2%
										</span>{" "}
										from last month
									</p>
								</CardContent>
							</Card>
						</div>

						{/* Charts Section */}
						<Tabs defaultValue="overview" className="space-y-4">
							<TabsList>
								<TabsTrigger value="overview">Overview</TabsTrigger>
								<TabsTrigger value="analytics">Analytics</TabsTrigger>
								<TabsTrigger value="reports">Reports</TabsTrigger>
								<TabsTrigger value="notifications">Notifications</TabsTrigger>
							</TabsList>
							<TabsContent value="overview" className="space-y-4">
								<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
									{/* Monthly Expenses Chart */}
									<Card className="lg:col-span-4">
										<CardHeader>
											<CardTitle>Monthly Expenses</CardTitle>
											<CardDescription>
												Your expense trend over the past 12 months
											</CardDescription>
										</CardHeader>
										{/* <CardContent className="h-[300px]">
											<ChartContainer
												data={monthlyExpensesData}
												xAxisKey="name"
												yAxisWidth={65}
												className="h-[300px]"
											>
												<ChartTooltip>
													<ChartTooltipContent />
												</ChartTooltip>
												<ChartGrid horizontal vertical />
												<ChartYAxis />
												<ChartXAxis />
												<ChartArea
													dataKey="value"
													fill="url(#gradient)"
													stroke="hsl(var(--primary))"
													fillOpacity={0.2}
													strokeWidth={2}
												/>
												<defs>
													<linearGradient
														id="gradient"
														x1="0"
														y1="0"
														x2="0"
														y2="1"
													>
														<stop
															offset="0%"
															stopColor="hsl(var(--primary))"
															stopOpacity={0.4}
														/>
														<stop
															offset="100%"
															stopColor="hsl(var(--primary))"
															stopOpacity={0}
														/>
													</linearGradient>
												</defs>
											</ChartContainer>
										</CardContent> */}
									</Card>

									{/* Asset Allocation */}
									<Card className="lg:col-span-3">
										<CardHeader>
											<CardTitle>Asset Allocation</CardTitle>
											<CardDescription>
												Your current investment portfolio
											</CardDescription>
										</CardHeader>
										<CardContent>
											<div className="space-y-4">
												{assetAllocationData.map((item) => (
													<div key={item.name} className="flex items-center">
														<div className="w-1/3 font-medium">{item.name}</div>
														<div className="w-2/3 flex items-center gap-2">
															<div className="w-full bg-muted rounded-full h-2.5">
																<div
																	className="bg-primary h-2.5 rounded-full"
																	style={{ width: `${item.value}%` }}
																></div>
															</div>
															<span className="text-sm font-medium">
																{item.value}%
															</span>
														</div>
													</div>
												))}
											</div>
										</CardContent>
									</Card>
								</div>

								{/* Income vs Expenses Chart */}
								<Card>
									<CardHeader>
										<CardTitle>Income vs Expenses</CardTitle>
										<CardDescription>
											Comparison of your income and expenses for the past 6
											months
										</CardDescription>
									</CardHeader>
									{/* <CardContent className="h-[300px]">
										<ChartContainer
											data={incomeVsExpensesData}
											xAxisKey="name"
											yAxisWidth={65}
											className="h-[300px]"
										>
											<ChartTooltip>
												<ChartTooltipContent />
											</ChartTooltip>
											<ChartLegend className="mb-4">
												<ChartLegendItem
													name="Income"
													color="hsl(var(--primary))"
												/>
												<ChartLegendItem
													name="Expenses"
													color="hsl(var(--destructive))"
												/>
											</ChartLegend>
											<ChartGrid horizontal vertical />
											<ChartYAxis />
											<ChartXAxis />
											<ChartBar
												dataKey="income"
												fill="hsl(var(--primary))"
												radius={4}
												className="fill-primary"
											/>
											<ChartBar
												dataKey="expenses"
												fill="hsl(var(--destructive))"
												radius={4}
												className="fill-destructive"
											/>
										</ChartContainer>
									</CardContent> */}
								</Card>

								{/* Recent Transactions */}
								<Card>
									<CardHeader>
										<CardTitle>Recent Transactions</CardTitle>
										<CardDescription>
											Your recent financial activities
										</CardDescription>
									</CardHeader>
									<CardContent>
										<Table>
											<TableHeader>
												<TableRow>
													<TableHead>Description</TableHead>
													<TableHead>Category</TableHead>
													<TableHead>Date</TableHead>
													<TableHead className="text-right">Amount</TableHead>
													<TableHead className="text-right">Status</TableHead>
												</TableRow>
											</TableHeader>
											<TableBody>
												{recentTransactions.map((transaction) => (
													<TableRow key={transaction.id}>
														<TableCell className="font-medium">
															{transaction.description}
														</TableCell>
														<TableCell>{transaction.category}</TableCell>
														<TableCell>{transaction.date}</TableCell>
														<TableCell
															className={`text-right ${
																transaction.amount > 0 ? "text-emerald-500" : ""
															}`}
														>
															{transaction.amount > 0 ? "+" : ""}$
															{Math.abs(transaction.amount).toFixed(2)}
														</TableCell>
														<TableCell className="text-right">
															<Badge
																variant={
																	transaction.status === "Completed"
																		? "outline"
																		: "secondary"
																}
															>
																{transaction.status}
															</Badge>
														</TableCell>
													</TableRow>
												))}
											</TableBody>
										</Table>
									</CardContent>
								</Card>
							</TabsContent>
							<TabsContent value="analytics" className="space-y-4">
								<Card>
									<CardHeader>
										<CardTitle>Advanced Analytics</CardTitle>
										<CardDescription>
											Detailed analysis of your financial data
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="flex items-center justify-center h-40 border rounded-md">
											<p className="text-muted-foreground">
												Analytics content will appear here
											</p>
										</div>
									</CardContent>
								</Card>
							</TabsContent>
							<TabsContent value="reports" className="space-y-4">
								<Card>
									<CardHeader>
										<CardTitle>Financial Reports</CardTitle>
										<CardDescription>
											Generate and view your financial reports
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="flex items-center justify-center h-40 border rounded-md">
											<p className="text-muted-foreground">
												Reports content will appear here
											</p>
										</div>
									</CardContent>
								</Card>
							</TabsContent>
							<TabsContent value="notifications" className="space-y-4">
								<Card>
									<CardHeader>
										<CardTitle>Notifications</CardTitle>
										<CardDescription>
											Your financial alerts and notifications
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="flex items-center justify-center h-40 border rounded-md">
											<p className="text-muted-foreground">
												Notifications content will appear here
											</p>
										</div>
									</CardContent>
								</Card>
							</TabsContent>
						</Tabs>
					</div>
				</main>
			</div>
		</div>
	);
}
