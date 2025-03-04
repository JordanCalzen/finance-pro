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
import { Line, Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	LineElement,
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	Filler,
} from "chart.js";

// Register the Chart.js components
ChartJS.register(
	ArcElement,
	Tooltip,
	Legend,
	LineElement,
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	Filler
);

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
					<div className="fixed inset-y-0 left-0 z-50 w-[85%] max-w-xs bg-background p-4 shadow-lg">
						<div className="flex items-center justify-between mb-6">
							<span className="text-lg font-bold">FinancePro</span>
							<Button
								variant="ghost"
								size="icon"
								onClick={() => setIsMobileMenuOpen(false)}
							>
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
						<div className="flex h-12 sm:h-14 items-center justify-between px-2 sm:px-4 md:px-6">
							<div className="flex items-center gap-1 sm:gap-2">
								<Button
									variant="ghost"
									size="icon"
									className="h-8 w-8 lg:hidden"
									onClick={() => setIsMobileMenuOpen(true)}
								>
									<MenuIcon className="h-5 w-5" />
									<span className="sr-only">Toggle Menu</span>
								</Button>
								<div className="relative w-full max-w-[120px] sm:max-w-none sm:w-64 lg:w-80">
									<SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
									<Input
										type="search"
										placeholder="Search..."
										className="h-8 w-full bg-background pl-7 text-xs sm:text-sm"
									/>
								</div>
							</div>
							<div className="flex items-center gap-1 sm:gap-2">
								<Button
									variant="ghost"
									size="icon"
									className="h-8 w-8"
									onClick={toggleDarkMode}
								>
									{isDarkMode ? (
										<SunIcon className="h-4 w-4 sm:h-5 sm:w-5" />
									) : (
										<MoonIcon className="h-4 w-4 sm:h-5 sm:w-5" />
									)}
									<span className="sr-only">Toggle theme</span>
								</Button>
								<Button variant="ghost" size="icon" className="h-8 w-8">
									<BellIcon className="h-4 w-4 sm:h-5 sm:w-5" />
									<span className="sr-only">Notifications</span>
								</Button>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button
											variant="ghost"
											size="icon"
											className="h-8 w-8 rounded-full"
										>
											<Avatar className="h-7 w-7 sm:h-8 sm:w-8">
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
					<div className="p-2 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
						<div className="flex flex-col gap-1 sm:gap-2">
							<h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
								Financial Dashboard
							</h1>
							<p className="text-xs sm:text-sm text-muted-foreground">
								Welcome back, John! Here's an overview of your finances.
							</p>
						</div>

						{/* Financial Overview Cards */}
						<div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
							<Card className="overflow-hidden">
								<CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 sm:pb-2">
									<CardTitle className="text-xs sm:text-sm font-medium">
										Total Balance
									</CardTitle>
									<DollarSignIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
								</CardHeader>
								<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
									<div className="text-base sm:text-xl md:text-2xl font-bold">
										$24,563.00
									</div>
									<p className="text-[10px] sm:text-xs text-muted-foreground">
										<span className="text-emerald-500 flex items-center">
											<ArrowUpIcon className="mr-0.5 h-3 w-3 sm:mr-1 sm:h-4 sm:w-4" />
											+2.5%
										</span>{" "}
										from last month
									</p>
								</CardContent>
							</Card>
							<Card className="overflow-hidden">
								<CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 sm:pb-2">
									<CardTitle className="text-xs sm:text-sm font-medium">
										Monthly Income
									</CardTitle>
									<ArrowUpIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
								</CardHeader>
								<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
									<div className="text-base sm:text-xl md:text-2xl font-bold">
										$5,231.89
									</div>
									<p className="text-[10px] sm:text-xs text-muted-foreground">
										<span className="text-emerald-500 flex items-center">
											<ArrowUpIcon className="mr-0.5 h-3 w-3 sm:mr-1 sm:h-4 sm:w-4" />
											+14.2%
										</span>{" "}
										from last month
									</p>
								</CardContent>
							</Card>
							<Card className="overflow-hidden">
								<CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 sm:pb-2">
									<CardTitle className="text-xs sm:text-sm font-medium">
										Monthly Expenses
									</CardTitle>
									<ArrowDownIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
								</CardHeader>
								<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
									<div className="text-base sm:text-xl md:text-2xl font-bold">
										$3,045.50
									</div>
									<p className="text-[10px] sm:text-xs text-muted-foreground">
										<span className="text-rose-500 flex items-center">
											<ArrowUpIcon className="mr-0.5 h-3 w-3 sm:mr-1 sm:h-4 sm:w-4" />
											+5.1%
										</span>{" "}
										from last month
									</p>
								</CardContent>
							</Card>
							<Card className="overflow-hidden">
								<CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 sm:pb-2">
									<CardTitle className="text-xs sm:text-sm font-medium">
										Savings Rate
									</CardTitle>
									<PieChartIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
								</CardHeader>
								<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
									<div className="text-base sm:text-xl md:text-2xl font-bold">
										41.8%
									</div>
									<p className="text-[10px] sm:text-xs text-muted-foreground">
										<span className="text-emerald-500 flex items-center">
											<ArrowUpIcon className="mr-0.5 h-3 w-3 sm:mr-1 sm:h-4 sm:w-4" />
											+8.2%
										</span>{" "}
										from last month
									</p>
								</CardContent>
							</Card>
						</div>

						{/* Charts Section */}
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
									<TabsTrigger
										value="notifications"
										className="text-xs sm:text-sm"
									>
										Notifications
									</TabsTrigger>
								</TabsList>
							</div>
							<TabsContent value="overview" className="space-y-4">
								<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
									{/* Monthly Expenses Chart */}
									<Card className="lg:col-span-4">
										<CardHeader className="p-3 sm:p-6">
											<CardTitle className="text-sm sm:text-base">
												Monthly Expenses
											</CardTitle>
											<CardDescription className="text-xs">
												Your expense trend over the past 12 months
											</CardDescription>
										</CardHeader>
										<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0 h-[200px] sm:h-[250px] md:h-[300px]">
											<div className="h-full w-full">
												<Line
													data={{
														labels: monthlyExpensesData.map(
															(item) => item.name
														),
														datasets: [
															{
																label: "Monthly Expenses",
																data: monthlyExpensesData.map(
																	(item) => item.value
																),
																fill: true,
																backgroundColor: "rgba(59, 130, 246, 0.2)",
																borderColor: "rgba(59, 130, 246, 1)",
																tension: 0.4,
															},
														],
													}}
													options={{
														responsive: true,
														maintainAspectRatio: false,
														plugins: {
															legend: {
																display: false,
															},
															tooltip: {
																mode: "index",
																intersect: false,
																bodyFont: {
																	size: 10,
																},
																titleFont: {
																	size: 10,
																},
															},
														},
														scales: {
															y: {
																beginAtZero: true,
																grid: {
																	color: "rgba(0, 0, 0, 0.1)",
																},
																ticks: {
																	font: {
																		size: 9,
																	},
																},
															},
															x: {
																grid: {
																	display: false,
																},
																ticks: {
																	font: {
																		size: 9,
																	},
																	maxRotation: 45,
																	minRotation: 45,
																},
															},
														},
													}}
												/>
											</div>
										</CardContent>
									</Card>

									{/* Asset Allocation */}
									<Card className="lg:col-span-3">
										<CardHeader className="p-3 sm:p-6">
											<CardTitle className="text-sm sm:text-base">
												Asset Allocation
											</CardTitle>
											<CardDescription className="text-xs">
												Your current investment portfolio
											</CardDescription>
										</CardHeader>
										<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
											<div className="space-y-3 sm:space-y-4">
												{assetAllocationData.map((item) => (
													<div key={item.name} className="flex items-center">
														<div className="w-1/3 font-medium text-xs sm:text-sm">
															{item.name}
														</div>
														<div className="w-2/3 flex items-center gap-2">
															<div className="w-full bg-muted rounded-full h-1.5 sm:h-2.5">
																<div
																	className="bg-primary h-1.5 sm:h-2.5 rounded-full"
																	style={{ width: `${item.value}%` }}
																></div>
															</div>
															<span className="text-xs sm:text-sm font-medium">
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
									<CardHeader className="p-3 sm:p-6">
										<CardTitle className="text-sm sm:text-base">
											Income vs Expenses
										</CardTitle>
										<CardDescription className="text-xs">
											Comparison of your income and expenses for the past 6
											months
										</CardDescription>
									</CardHeader>
									<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0 h-[200px] sm:h-[250px] md:h-[300px]">
										<div className="flex items-center gap-4 mb-2 sm:mb-4">
											<div className="flex items-center gap-1 sm:gap-2">
												<div className="h-2 w-2 sm:h-3 sm:w-3 rounded-sm bg-primary"></div>
												<span className="text-xs sm:text-sm font-medium">
													Income
												</span>
											</div>
											<div className="flex items-center gap-1 sm:gap-2">
												<div className="h-2 w-2 sm:h-3 sm:w-3 rounded-sm bg-destructive"></div>
												<span className="text-xs sm:text-sm font-medium">
													Expenses
												</span>
											</div>
										</div>
										<div className="h-[170px] sm:h-[220px] md:h-[250px]">
											<Bar
												data={{
													labels: incomeVsExpensesData.map((item) => item.name),
													datasets: [
														{
															label: "Income",
															data: incomeVsExpensesData.map(
																(item) => item.income
															),
															backgroundColor: "hsl(var(--primary))",
															borderRadius: 4,
														},
														{
															label: "Expenses",
															data: incomeVsExpensesData.map(
																(item) => item.expenses
															),
															backgroundColor: "hsl(var(--destructive))",
															borderRadius: 4,
														},
													],
												}}
												options={{
													responsive: true,
													maintainAspectRatio: false,
													plugins: {
														legend: {
															display: false,
														},
														tooltip: {
															mode: "index",
															intersect: false,
															bodyFont: {
																size: 10,
															},
															titleFont: {
																size: 10,
															},
														},
													},
													scales: {
														y: {
															beginAtZero: true,
															grid: {
																color: "rgba(0, 0, 0, 0.1)",
															},
															ticks: {
																font: {
																	size: 9,
																},
															},
														},
														x: {
															grid: {
																display: false,
															},
															ticks: {
																font: {
																	size: 9,
																},
															},
														},
													},
												}}
											/>
										</div>
									</CardContent>
								</Card>

								{/* Recent Transactions */}
								<Card>
									<CardHeader className="p-3 sm:p-6">
										<CardTitle className="text-sm sm:text-base">
											Recent Transactions
										</CardTitle>
										<CardDescription className="text-xs">
											Your recent financial activities
										</CardDescription>
									</CardHeader>
									<CardContent className="p-0 sm:p-6 sm:pt-0">
										<div className="overflow-x-auto">
											<Table>
												<TableHeader>
													<TableRow>
														<TableHead className="text-xs">
															Description
														</TableHead>
														<TableHead className="text-xs hidden sm:table-cell">
															Category
														</TableHead>
														<TableHead className="text-xs">Date</TableHead>
														<TableHead className="text-xs text-right">
															Amount
														</TableHead>
														<TableHead className="text-xs text-right">
															Status
														</TableHead>
													</TableRow>
												</TableHeader>
												<TableBody>
													{recentTransactions.map((transaction) => (
														<TableRow key={transaction.id}>
															<TableCell className="font-medium text-xs p-2 sm:p-4">
																{transaction.description}
															</TableCell>
															<TableCell className="text-xs p-2 sm:p-4 hidden sm:table-cell">
																{transaction.category}
															</TableCell>
															<TableCell className="text-xs p-2 sm:p-4">
																{transaction.date}
															</TableCell>
															<TableCell
																className={`text-xs p-2 sm:p-4 text-right ${
																	transaction.amount > 0
																		? "text-emerald-500"
																		: ""
																}`}
															>
																{transaction.amount > 0 ? "+" : ""}$
																{Math.abs(transaction.amount).toFixed(2)}
															</TableCell>
															<TableCell className="text-xs p-2 sm:p-4 text-right">
																<Badge
																	variant={
																		transaction.status === "Completed"
																			? "outline"
																			: "secondary"
																	}
																	className="text-[10px] sm:text-xs px-1 py-0 sm:px-2 sm:py-0.5"
																>
																	{transaction.status}
																</Badge>
															</TableCell>
														</TableRow>
													))}
												</TableBody>
											</Table>
										</div>
									</CardContent>
								</Card>
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
					</div>
				</main>
			</div>
		</div>
	);
}
