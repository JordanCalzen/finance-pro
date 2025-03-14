"use client";
import {
	ArrowUpIcon,
	ChevronDownIcon,
	CreditCardIcon,
	FileTextIcon,
	GavelIcon,
	UsersIcon,
} from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
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
import { Progress } from "@/components/ui/progress";

export function AdminContent() {
	// Sample data for charts
	const monthlyTransactionsData = [
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

	const loanStatusData = [
		{ name: "Approved", value: 65 },
		{ name: "Pending", value: 25 },
		{ name: "Rejected", value: 10 },
	];

	const recentUsers = [
		{
			id: 1,
			name: "John Smith",
			email: "john.smith@example.com",
			role: "Customer",
			status: "Active",
			joined: "Mar 15, 2023",
		},
		{
			id: 2,
			name: "Sarah Johnson",
			email: "sarah.j@example.com",
			role: "Worker",
			status: "Active",
			joined: "Feb 28, 2023",
		},
		{
			id: 3,
			name: "Michael Brown",
			email: "michael.b@example.com",
			role: "Customer",
			status: "Suspended",
			joined: "Jan 12, 2023",
		},
		{
			id: 4,
			name: "Emily Davis",
			email: "emily.d@example.com",
			role: "Worker",
			status: "Active",
			joined: "Apr 5, 2023",
		},
		{
			id: 5,
			name: "Robert Wilson",
			email: "robert.w@example.com",
			role: "Customer",
			status: "Active",
			joined: "Mar 22, 2023",
		},
	];

	const recentTransactions = [
		{
			id: 1,
			description: "Loan Disbursement",
			user: "John Smith",
			date: "Today, 2:34 PM",
			amount: 5000.0,
			status: "Completed",
		},
		{
			id: 2,
			description: "Loan Repayment",
			user: "Sarah Johnson",
			date: "Yesterday",
			amount: 750.0,
			status: "Completed",
		},
		{
			id: 3,
			description: "Deposit",
			user: "Michael Brown",
			date: "Mar 12, 2023",
			amount: 1200.0,
			status: "Completed",
		},
		{
			id: 4,
			description: "Withdrawal",
			user: "Emily Davis",
			date: "Mar 10, 2023",
			amount: 500.0,
			status: "Pending",
		},
		{
			id: 5,
			description: "Loan Application",
			user: "Robert Wilson",
			date: "Mar 8, 2023",
			amount: 3000.0,
			status: "Pending",
		},
	];

	const recentDisputes = [
		{
			id: 1,
			description: "Transaction Error",
			user: "John Smith",
			date: "Mar 15, 2023",
			status: "Open",
			priority: "High",
		},
		{
			id: 2,
			description: "Loan Terms Dispute",
			user: "Sarah Johnson",
			date: "Mar 10, 2023",
			status: "Under Review",
			priority: "Medium",
		},
		{
			id: 3,
			description: "Unauthorized Withdrawal",
			user: "Michael Brown",
			date: "Mar 5, 2023",
			status: "Resolved",
			priority: "High",
		},
		{
			id: 4,
			description: "Account Access Issue",
			user: "Emily Davis",
			date: "Feb 28, 2023",
			status: "Closed",
			priority: "Low",
		},
	];

	return (
		<div className="p-2 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
			<div className="flex flex-col gap-1 sm:gap-2">
				<h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
					Admin Dashboard
				</h1>
				<p className="text-xs sm:text-sm text-muted-foreground">
					Welcome back, Admin! Here's an overview of the platform.
				</p>
			</div>

			{/* Overview Cards */}
			<div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card className="overflow-hidden">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 sm:pb-2">
						<CardTitle className="text-xs sm:text-sm font-medium">
							Total Users
						</CardTitle>
						<UsersIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
						<div className="text-base sm:text-xl md:text-2xl font-bold">
							12,345
						</div>
						<p className="text-[10px] sm:text-xs text-muted-foreground">
							<span className="text-emerald-500 flex items-center">
								<ArrowUpIcon className="mr-0.5 h-3 w-3 sm:mr-1 sm:h-4 sm:w-4" />
								+5.2%
							</span>{" "}
							from last month
						</p>
					</CardContent>
				</Card>
				<Card className="overflow-hidden">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 sm:pb-2">
						<CardTitle className="text-xs sm:text-sm font-medium">
							Total Transactions
						</CardTitle>
						<CreditCardIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
						<div className="text-base sm:text-xl md:text-2xl font-bold">
							45,678
						</div>
						<p className="text-[10px] sm:text-xs text-muted-foreground">
							<span className="text-emerald-500 flex items-center">
								<ArrowUpIcon className="mr-0.5 h-3 w-3 sm:mr-1 sm:h-4 sm:w-4" />
								+12.3%
							</span>{" "}
							from last month
						</p>
					</CardContent>
				</Card>
				<Card className="overflow-hidden">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 sm:pb-2">
						<CardTitle className="text-xs sm:text-sm font-medium">
							Active Loans
						</CardTitle>
						<FileTextIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
						<div className="text-base sm:text-xl md:text-2xl font-bold">
							2,567
						</div>
						<p className="text-[10px] sm:text-xs text-muted-foreground">
							<span className="text-emerald-500 flex items-center">
								<ArrowUpIcon className="mr-0.5 h-3 w-3 sm:mr-1 sm:h-4 sm:w-4" />
								+3.7%
							</span>{" "}
							from last month
						</p>
					</CardContent>
				</Card>
				<Card className="overflow-hidden">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 sm:pb-2">
						<CardTitle className="text-xs sm:text-sm font-medium">
							Open Disputes
						</CardTitle>
						<GavelIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
						<div className="text-base sm:text-xl md:text-2xl font-bold">78</div>
						<p className="text-[10px] sm:text-xs text-muted-foreground">
							<span className="text-rose-500 flex items-center">
								<ArrowUpIcon className="mr-0.5 h-3 w-3 sm:mr-1 sm:h-4 sm:w-4" />
								+8.1%
							</span>{" "}
							from last month
						</p>
					</CardContent>
				</Card>
			</div>

			{/* Main Dashboard Tabs */}
			<Tabs defaultValue="overview" className="space-y-4">
				<div className="overflow-x-auto -mx-2 px-2">
					<TabsList className="flex w-full justify-start sm:justify-center">
						<TabsTrigger value="overview" className="text-xs sm:text-sm">
							Overview
						</TabsTrigger>
						<TabsTrigger value="users" className="text-xs sm:text-sm">
							Users
						</TabsTrigger>
						<TabsTrigger value="transactions" className="text-xs sm:text-sm">
							Transactions
						</TabsTrigger>
						<TabsTrigger value="disputes" className="text-xs sm:text-sm">
							Disputes
						</TabsTrigger>
					</TabsList>
				</div>

				{/* Overview Tab Content */}
				<TabsContent value="overview" className="space-y-4">
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
						{/* Loan Status */}
						<Card className="lg:col-span-3">
							<CardHeader className="p-3 sm:p-6">
								<CardTitle className="text-sm sm:text-base">
									Loan Status
								</CardTitle>
								<CardDescription className="text-xs">
									Current loan application status
								</CardDescription>
							</CardHeader>
							<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
								<div className="space-y-3 sm:space-y-4">
									{loanStatusData.map((item) => (
										<div key={item.name} className="flex items-center">
											<div className="w-1/3 font-medium text-xs sm:text-sm">
												{item.name}
											</div>
											<div className="w-2/3 flex items-center gap-2">
												<Progress
													value={item.value}
													className="h-1.5 sm:h-2.5"
												/>
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

					{/* Recent Disputes */}
					<Card>
						<CardHeader className="p-3 sm:p-6">
							<CardTitle className="text-sm sm:text-base">
								Recent Disputes
							</CardTitle>
							<CardDescription className="text-xs">
								Latest customer complaints requiring resolution
							</CardDescription>
						</CardHeader>
						<CardContent className="p-0 sm:p-6 sm:pt-0">
							<div className="overflow-x-auto">
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead className="text-xs">Description</TableHead>
											<TableHead className="text-xs hidden sm:table-cell">
												User
											</TableHead>
											<TableHead className="text-xs">Date</TableHead>
											<TableHead className="text-xs">Status</TableHead>
											<TableHead className="text-xs text-right">
												Priority
											</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{recentDisputes.map((dispute) => (
											<TableRow key={dispute.id}>
												<TableCell className="font-medium text-xs p-2 sm:p-4">
													{dispute.description}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 hidden sm:table-cell">
													{dispute.user}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4">
													{dispute.date}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4">
													<Badge
														variant={
															dispute.status === "Open" ||
															dispute.status === "Under Review"
																? "secondary"
																: "outline"
														}
														className="text-[10px] sm:text-xs px-1 py-0 sm:px-2 sm:py-0.5"
													>
														{dispute.status}
													</Badge>
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 text-right">
													<Badge
														variant={
															dispute.priority === "High"
																? "destructive"
																: dispute.priority === "Medium"
																? "secondary"
																: "outline"
														}
														className="text-[10px] sm:text-xs px-1 py-0 sm:px-2 sm:py-0.5"
													>
														{dispute.priority}
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

				{/* Users Tab Content */}
				<TabsContent value="users" className="space-y-4">
					<Card>
						<CardHeader className="p-3 sm:p-6 flex flex-row items-center justify-between">
							<div>
								<CardTitle className="text-sm sm:text-base">
									User Management
								</CardTitle>
								<CardDescription className="text-xs">
									Manage customers and workers
								</CardDescription>
							</div>
							<Button size="sm" className="h-8 text-xs sm:text-sm">
								Add User
							</Button>
						</CardHeader>
						<CardContent className="p-0 sm:p-6 sm:pt-0">
							<div className="overflow-x-auto">
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead className="text-xs">Name</TableHead>
											<TableHead className="text-xs hidden sm:table-cell">
												Email
											</TableHead>
											<TableHead className="text-xs">Role</TableHead>
											<TableHead className="text-xs">Status</TableHead>
											<TableHead className="text-xs hidden sm:table-cell">
												Joined
											</TableHead>
											<TableHead className="text-xs text-right">
												Actions
											</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{recentUsers.map((user) => (
											<TableRow key={user.id}>
												<TableCell className="font-medium text-xs p-2 sm:p-4">
													{user.name}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 hidden sm:table-cell">
													{user.email}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4">
													{user.role}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4">
													<Badge
														variant={
															user.status === "Active" ? "outline" : "secondary"
														}
														className="text-[10px] sm:text-xs px-1 py-0 sm:px-2 sm:py-0.5"
													>
														{user.status}
													</Badge>
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 hidden sm:table-cell">
													{user.joined}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 text-right">
													<DropdownMenu>
														<DropdownMenuTrigger asChild>
															<Button
																variant="ghost"
																size="sm"
																className="h-7 w-7 p-0"
															>
																<span className="sr-only">Open menu</span>
																<ChevronDownIcon className="h-4 w-4" />
															</Button>
														</DropdownMenuTrigger>
														<DropdownMenuContent align="end">
															<DropdownMenuItem>Edit</DropdownMenuItem>
															<DropdownMenuItem>Suspend</DropdownMenuItem>
															<DropdownMenuSeparator />
															<DropdownMenuItem className="text-destructive">
																Delete
															</DropdownMenuItem>
														</DropdownMenuContent>
													</DropdownMenu>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				{/* Transactions Tab Content */}
				<TabsContent value="transactions" className="space-y-4">
					<Card>
						<CardHeader className="p-3 sm:p-6">
							<CardTitle className="text-sm sm:text-base">
								Transaction Monitoring
							</CardTitle>
							<CardDescription className="text-xs">
								View and monitor all financial activities
							</CardDescription>
						</CardHeader>
						<CardContent className="p-0 sm:p-6 sm:pt-0">
							<div className="overflow-x-auto">
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead className="text-xs">Description</TableHead>
											<TableHead className="text-xs hidden sm:table-cell">
												User
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
													{transaction.user}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4">
													{transaction.date}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 text-right">
													${transaction.amount.toFixed(2)}
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

				{/* Disputes Tab Content */}
				<TabsContent value="disputes" className="space-y-4">
					<Card>
						<CardHeader className="p-3 sm:p-6 flex flex-row items-center justify-between">
							<div>
								<CardTitle className="text-sm sm:text-base">
									Dispute Resolution
								</CardTitle>
								<CardDescription className="text-xs">
									Handle escalated customer complaints
								</CardDescription>
							</div>
							<Button size="sm" className="h-8 text-xs sm:text-sm">
								View All
							</Button>
						</CardHeader>
						<CardContent className="p-0 sm:p-6 sm:pt-0">
							<div className="overflow-x-auto">
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead className="text-xs">Description</TableHead>
											<TableHead className="text-xs hidden sm:table-cell">
												User
											</TableHead>
											<TableHead className="text-xs">Date</TableHead>
											<TableHead className="text-xs">Status</TableHead>
											<TableHead className="text-xs text-right">
												Priority
											</TableHead>
											<TableHead className="text-xs text-right">
												Actions
											</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{recentDisputes.map((dispute) => (
											<TableRow key={dispute.id}>
												<TableCell className="font-medium text-xs p-2 sm:p-4">
													{dispute.description}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 hidden sm:table-cell">
													{dispute.user}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4">
													{dispute.date}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4">
													<Badge
														variant={
															dispute.status === "Open" ||
															dispute.status === "Under Review"
																? "secondary"
																: "outline"
														}
														className="text-[10px] sm:text-xs px-1 py-0 sm:px-2 sm:py-0.5"
													>
														{dispute.status}
													</Badge>
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 text-right">
													<Badge
														variant={
															dispute.priority === "High"
																? "destructive"
																: dispute.priority === "Medium"
																? "secondary"
																: "outline"
														}
														className="text-[10px] sm:text-xs px-1 py-0 sm:px-2 sm:py-0.5"
													>
														{dispute.priority}
													</Badge>
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 text-right">
													<DropdownMenu>
														<DropdownMenuTrigger asChild>
															<Button
																variant="ghost"
																size="sm"
																className="h-7 w-7 p-0"
															>
																<span className="sr-only">Open menu</span>
																<ChevronDownIcon className="h-4 w-4" />
															</Button>
														</DropdownMenuTrigger>
														<DropdownMenuContent align="end">
															<DropdownMenuItem>Review</DropdownMenuItem>
															<DropdownMenuItem>Escalate</DropdownMenuItem>
															<DropdownMenuSeparator />
															<DropdownMenuItem>Resolve</DropdownMenuItem>
														</DropdownMenuContent>
													</DropdownMenu>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
