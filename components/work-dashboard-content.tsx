"use client";
import {
	AlertTriangle,
	ChevronDown,
	ChevronUp,
	CreditCard,
	FileText,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export function WorkerContent() {
	// Sample data for pending transactions
	const pendingTransactions = [
		{
			id: "TRX-1234",
			customer: "John Smith",
			type: "Deposit",
			amount: 1500.0,
			date: "Today, 10:23 AM",
			status: "Pending",
		},
		{
			id: "TRX-1235",
			customer: "Sarah Johnson",
			type: "Withdrawal",
			amount: 750.5,
			date: "Today, 09:45 AM",
			status: "Pending",
		},
		{
			id: "TRX-1236",
			customer: "Michael Brown",
			type: "Deposit",
			amount: 3000.0,
			date: "Yesterday, 4:30 PM",
			status: "Pending",
		},
		{
			id: "TRX-1237",
			customer: "Emily Davis",
			type: "Withdrawal",
			amount: 1200.0,
			date: "Yesterday, 2:15 PM",
			status: "Pending",
		},
	];

	// Sample data for loan applications
	const loanApplications = [
		{
			id: "LOAN-4321",
			customer: "Robert Wilson",
			amount: 25000.0,
			purpose: "Home Renovation",
			date: "Mar 15, 2023",
			status: "Pending Review",
		},
		{
			id: "LOAN-4322",
			customer: "Jennifer Lee",
			amount: 10000.0,
			purpose: "Education",
			date: "Mar 14, 2023",
			status: "Pending Review",
		},
		{
			id: "LOAN-4323",
			customer: "David Martinez",
			amount: 5000.0,
			purpose: "Medical Expenses",
			date: "Mar 13, 2023",
			status: "Pending Review",
		},
	];

	// Sample data for dispute cases
	const disputeCases = [
		{
			id: "DSP-5678",
			customer: "Lisa Anderson",
			issue: "Unauthorized Transaction",
			amount: 299.99,
			date: "Mar 16, 2023",
			priority: "High",
		},
		{
			id: "DSP-5679",
			customer: "Kevin Taylor",
			issue: "Double Charge",
			amount: 89.95,
			date: "Mar 15, 2023",
			priority: "Medium",
		},
		{
			id: "DSP-5680",
			customer: "Amanda White",
			issue: "Wrong Amount",
			amount: 150.0,
			date: "Mar 14, 2023",
			priority: "Low",
		},
	];

	return (
		<div className="p-2 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
			<div className="flex flex-col gap-1 sm:gap-2">
				<h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
					Worker Dashboard
				</h1>
				<p className="text-xs sm:text-sm text-muted-foreground">
					Welcome back, Worker Admin! Here's an overview of pending tasks.
				</p>
			</div>

			{/* Overview Cards */}
			<div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
				<Card className="overflow-hidden">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 sm:pb-2">
						<CardTitle className="text-xs sm:text-sm font-medium">
							Pending Transactions
						</CardTitle>
						<CreditCard className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
						<div className="text-base sm:text-xl md:text-2xl font-bold">
							{pendingTransactions.length}
						</div>
						<p className="text-[10px] sm:text-xs text-muted-foreground">
							<span className="text-amber-500 flex items-center">
								<ChevronUp className="mr-0.5 h-3 w-3 sm:mr-1 sm:h-4 sm:w-4" />
								+2
							</span>{" "}
							from yesterday
						</p>
					</CardContent>
				</Card>
				<Card className="overflow-hidden">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 sm:pb-2">
						<CardTitle className="text-xs sm:text-sm font-medium">
							Loan Applications
						</CardTitle>
						<FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
						<div className="text-base sm:text-xl md:text-2xl font-bold">
							{loanApplications.length}
						</div>
						<p className="text-[10px] sm:text-xs text-muted-foreground">
							<span className="text-emerald-500 flex items-center">
								<ChevronDown className="mr-0.5 h-3 w-3 sm:mr-1 sm:h-4 sm:w-4" />
								-1
							</span>{" "}
							from yesterday
						</p>
					</CardContent>
				</Card>
				<Card className="overflow-hidden">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 sm:pb-2">
						<CardTitle className="text-xs sm:text-sm font-medium">
							Active Disputes
						</CardTitle>
						<AlertTriangle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
						<div className="text-base sm:text-xl md:text-2xl font-bold">
							{disputeCases.length}
						</div>
						<p className="text-[10px] sm:text-xs text-muted-foreground">
							<span className="text-rose-500 flex items-center">
								<ChevronUp className="mr-0.5 h-3 w-3 sm:mr-1 sm:h-4 sm:w-4" />
								+2
							</span>{" "}
							from yesterday
						</p>
					</CardContent>
				</Card>
			</div>

			{/* Main Content Tabs */}
			<Tabs defaultValue="overview" className="space-y-4">
				<div className="overflow-x-auto -mx-2 px-2">
					<TabsList className="flex w-full justify-start sm:justify-center">
						<TabsTrigger value="overview" className="text-xs sm:text-sm">
							Overview
						</TabsTrigger>
						<TabsTrigger value="transactions" className="text-xs sm:text-sm">
							Transactions
						</TabsTrigger>
						<TabsTrigger value="loans" className="text-xs sm:text-sm">
							Loans
						</TabsTrigger>
						<TabsTrigger value="disputes" className="text-xs sm:text-sm">
							Disputes
						</TabsTrigger>
					</TabsList>
				</div>

				{/* Overview Tab */}
				<TabsContent value="overview" className="space-y-4">
					{/* Pending Transactions */}
					<Card>
						<CardHeader className="p-3 sm:p-6">
							<CardTitle className="text-sm sm:text-base">
								Pending Transactions
							</CardTitle>
							<CardDescription className="text-xs">
								Deposits and withdrawals awaiting approval
							</CardDescription>
						</CardHeader>
						<CardContent className="p-0 sm:p-6 sm:pt-0">
							<div className="overflow-x-auto">
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead className="text-xs">ID</TableHead>
											<TableHead className="text-xs">Customer</TableHead>
											<TableHead className="text-xs">Type</TableHead>
											<TableHead className="text-xs">Amount</TableHead>
											<TableHead className="text-xs hidden sm:table-cell">
												Date
											</TableHead>
											<TableHead className="text-xs text-right">
												Actions
											</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{pendingTransactions.slice(0, 2).map((transaction) => (
											<TableRow key={transaction.id}>
												<TableCell className="font-medium text-xs p-2 sm:p-4">
													{transaction.id}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4">
													{transaction.customer}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4">
													<Badge
														variant={
															transaction.type === "Deposit"
																? "outline"
																: "secondary"
														}
														className="text-[10px] sm:text-xs"
													>
														{transaction.type}
													</Badge>
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4">
													${transaction.amount.toFixed(2)}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 hidden sm:table-cell">
													{transaction.date}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 text-right">
													<div className="flex justify-end gap-1">
														<Button
															variant="outline"
															size="sm"
															className="h-7 text-[10px] sm:text-xs"
														>
															Approve
														</Button>
														<Button
															variant="outline"
															size="sm"
															className="h-7 text-[10px] sm:text-xs"
														>
															Reject
														</Button>
													</div>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</div>
							<div className="p-3 sm:p-6 pt-3 sm:pt-4">
								<Button variant="outline" size="sm" className="w-full text-xs">
									View All Transactions
								</Button>
							</div>
						</CardContent>
					</Card>

					{/* Loan Applications */}
					<Card>
						<CardHeader className="p-3 sm:p-6">
							<CardTitle className="text-sm sm:text-base">
								Loan Applications
							</CardTitle>
							<CardDescription className="text-xs">
								Recent loan applications awaiting review
							</CardDescription>
						</CardHeader>
						<CardContent className="p-0 sm:p-6 sm:pt-0">
							<div className="overflow-x-auto">
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead className="text-xs">ID</TableHead>
											<TableHead className="text-xs">Customer</TableHead>
											<TableHead className="text-xs">Amount</TableHead>
											<TableHead className="text-xs hidden sm:table-cell">
												Purpose
											</TableHead>
											<TableHead className="text-xs hidden sm:table-cell">
												Date
											</TableHead>
											<TableHead className="text-xs text-right">
												Actions
											</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{loanApplications.slice(0, 2).map((loan) => (
											<TableRow key={loan.id}>
												<TableCell className="font-medium text-xs p-2 sm:p-4">
													{loan.id}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4">
													{loan.customer}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4">
													${loan.amount.toFixed(2)}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 hidden sm:table-cell">
													{loan.purpose}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 hidden sm:table-cell">
													{loan.date}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 text-right">
													<div className="flex justify-end gap-1">
														<Button
															variant="outline"
															size="sm"
															className="h-7 text-[10px] sm:text-xs"
														>
															Review
														</Button>
													</div>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</div>
							<div className="p-3 sm:p-6 pt-3 sm:pt-4">
								<Button variant="outline" size="sm" className="w-full text-xs">
									View All Loan Applications
								</Button>
							</div>
						</CardContent>
					</Card>

					{/* Dispute Cases */}
					<Card>
						<CardHeader className="p-3 sm:p-6">
							<CardTitle className="text-sm sm:text-base">
								Dispute Cases
							</CardTitle>
							<CardDescription className="text-xs">
								Active customer complaints requiring resolution
							</CardDescription>
						</CardHeader>
						<CardContent className="p-0 sm:p-6 sm:pt-0">
							<div className="overflow-x-auto">
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead className="text-xs">ID</TableHead>
											<TableHead className="text-xs">Customer</TableHead>
											<TableHead className="text-xs">Issue</TableHead>
											<TableHead className="text-xs hidden sm:table-cell">
												Amount
											</TableHead>
											<TableHead className="text-xs hidden sm:table-cell">
												Date
											</TableHead>
											<TableHead className="text-xs text-right">
												Priority
											</TableHead>
											<TableHead className="text-xs text-right">
												Actions
											</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{disputeCases.slice(0, 2).map((dispute) => (
											<TableRow key={dispute.id}>
												<TableCell className="font-medium text-xs p-2 sm:p-4">
													{dispute.id}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4">
													{dispute.customer}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4">
													{dispute.issue}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 hidden sm:table-cell">
													${dispute.amount.toFixed(2)}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 hidden sm:table-cell">
													{dispute.date}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 text-right">
													<Badge
														variant={
															dispute.priority === "High"
																? "destructive"
																: dispute.priority === "Medium"
																? "default"
																: "outline"
														}
														className="text-[10px] sm:text-xs"
													>
														{dispute.priority}
													</Badge>
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 text-right">
													<div className="flex justify-end gap-1">
														<Button
															variant="outline"
															size="sm"
															className="h-7 text-[10px] sm:text-xs"
														>
															Resolve
														</Button>
													</div>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</div>
							<div className="p-3 sm:p-6 pt-3 sm:pt-4">
								<Button variant="outline" size="sm" className="w-full text-xs">
									View All Disputes
								</Button>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				{/* Transactions Tab */}
				<TabsContent value="transactions" className="space-y-4">
					<Card>
						<CardHeader className="p-3 sm:p-6">
							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
								<div>
									<CardTitle className="text-sm sm:text-base">
										Transactions
									</CardTitle>
									<CardDescription className="text-xs">
										Manage customer deposits and withdrawals
									</CardDescription>
								</div>
								<div className="flex items-center gap-2">
									<Input
										placeholder="Search transactions..."
										className="h-8 text-xs w-full sm:w-auto"
									/>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button
												variant="outline"
												size="sm"
												className="h-8 text-xs"
											>
												Filter
												<ChevronDown className="ml-1 h-3 w-3" />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											<DropdownMenuItem>All Transactions</DropdownMenuItem>
											<DropdownMenuItem>Deposits Only</DropdownMenuItem>
											<DropdownMenuItem>Withdrawals Only</DropdownMenuItem>
											<DropdownMenuItem>Pending Only</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
							</div>
						</CardHeader>
						<CardContent className="p-0 sm:p-6 sm:pt-0">
							<div className="overflow-x-auto">
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead className="text-xs">ID</TableHead>
											<TableHead className="text-xs">Customer</TableHead>
											<TableHead className="text-xs">Type</TableHead>
											<TableHead className="text-xs">Amount</TableHead>
											<TableHead className="text-xs hidden sm:table-cell">
												Date
											</TableHead>
											<TableHead className="text-xs hidden sm:table-cell">
												Status
											</TableHead>
											<TableHead className="text-xs text-right">
												Actions
											</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{pendingTransactions.map((transaction) => (
											<TableRow key={transaction.id}>
												<TableCell className="font-medium text-xs p-2 sm:p-4">
													{transaction.id}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4">
													{transaction.customer}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4">
													<Badge
														variant={
															transaction.type === "Deposit"
																? "outline"
																: "secondary"
														}
														className="text-[10px] sm:text-xs"
													>
														{transaction.type}
													</Badge>
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4">
													${transaction.amount.toFixed(2)}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 hidden sm:table-cell">
													{transaction.date}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 hidden sm:table-cell">
													<Badge
														variant="secondary"
														className="text-[10px] sm:text-xs"
													>
														{transaction.status}
													</Badge>
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 text-right">
													<div className="flex justify-end gap-1">
														<Button
															variant="outline"
															size="sm"
															className="h-7 text-[10px] sm:text-xs"
														>
															Approve
														</Button>
														<Button
															variant="outline"
															size="sm"
															className="h-7 text-[10px] sm:text-xs"
														>
															Reject
														</Button>
													</div>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</div>
						</CardContent>
						<CardFooter className="p-3 sm:p-6 flex items-center justify-between">
							<div className="text-xs text-muted-foreground">
								Showing {pendingTransactions.length} transactions
							</div>
							<div className="flex items-center gap-1">
								<Button
									variant="outline"
									size="sm"
									className="h-7 text-[10px] sm:text-xs"
								>
									Previous
								</Button>
								<Button
									variant="outline"
									size="sm"
									className="h-7 text-[10px] sm:text-xs"
								>
									Next
								</Button>
							</div>
						</CardFooter>
					</Card>
				</TabsContent>

				{/* Loans Tab */}
				<TabsContent value="loans" className="space-y-4">
					<Card>
						<CardHeader className="p-3 sm:p-6">
							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
								<div>
									<CardTitle className="text-sm sm:text-base">
										Loan Applications
									</CardTitle>
									<CardDescription className="text-xs">
										Review and process customer loan requests
									</CardDescription>
								</div>
								<div className="flex items-center gap-2">
									<Input
										placeholder="Search applications..."
										className="h-8 text-xs w-full sm:w-auto"
									/>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button
												variant="outline"
												size="sm"
												className="h-8 text-xs"
											>
												Status
												<ChevronDown className="ml-1 h-3 w-3" />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											<DropdownMenuItem>All Applications</DropdownMenuItem>
											<DropdownMenuItem>Pending Review</DropdownMenuItem>
											<DropdownMenuItem>Approved</DropdownMenuItem>
											<DropdownMenuItem>Rejected</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
							</div>
						</CardHeader>
						<CardContent className="p-0 sm:p-6 sm:pt-0">
							<div className="overflow-x-auto">
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead className="text-xs">ID</TableHead>
											<TableHead className="text-xs">Customer</TableHead>
											<TableHead className="text-xs">Amount</TableHead>
											<TableHead className="text-xs hidden sm:table-cell">
												Purpose
											</TableHead>
											<TableHead className="text-xs hidden sm:table-cell">
												Date
											</TableHead>
											<TableHead className="text-xs hidden sm:table-cell">
												Status
											</TableHead>
											<TableHead className="text-xs text-right">
												Actions
											</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{loanApplications.map((loan) => (
											<TableRow key={loan.id}>
												<TableCell className="font-medium text-xs p-2 sm:p-4">
													{loan.id}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4">
													{loan.customer}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4">
													${loan.amount.toFixed(2)}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 hidden sm:table-cell">
													{loan.purpose}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 hidden sm:table-cell">
													{loan.date}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 hidden sm:table-cell">
													<Badge
														variant="secondary"
														className="text-[10px] sm:text-xs"
													>
														{loan.status}
													</Badge>
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 text-right">
													<div className="flex justify-end gap-1">
														<Button
															variant="outline"
															size="sm"
															className="h-7 text-[10px] sm:text-xs"
														>
															Approve
														</Button>
														<Button
															variant="outline"
															size="sm"
															className="h-7 text-[10px] sm:text-xs"
														>
															Reject
														</Button>
														<Button
															variant="outline"
															size="sm"
															className="h-7 text-[10px] sm:text-xs"
														>
															Details
														</Button>
													</div>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</div>
						</CardContent>
						<CardFooter className="p-3 sm:p-6 flex items-center justify-between">
							<div className="text-xs text-muted-foreground">
								Showing {loanApplications.length} applications
							</div>
							<div className="flex items-center gap-1">
								<Button
									variant="outline"
									size="sm"
									className="h-7 text-[10px] sm:text-xs"
								>
									Previous
								</Button>
								<Button
									variant="outline"
									size="sm"
									className="h-7 text-[10px] sm:text-xs"
								>
									Next
								</Button>
							</div>
						</CardFooter>
					</Card>
				</TabsContent>

				{/* Disputes Tab */}
				<TabsContent value="disputes" className="space-y-4">
					<Card>
						<CardHeader className="p-3 sm:p-6">
							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
								<div>
									<CardTitle className="text-sm sm:text-base">
										Customer Disputes
									</CardTitle>
									<CardDescription className="text-xs">
										Resolve customer complaints and issues
									</CardDescription>
								</div>
								<div className="flex items-center gap-2">
									<Input
										placeholder="Search disputes..."
										className="h-8 text-xs w-full sm:w-auto"
									/>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button
												variant="outline"
												size="sm"
												className="h-8 text-xs"
											>
												Priority
												<ChevronDown className="ml-1 h-3 w-3" />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											<DropdownMenuItem>All Priorities</DropdownMenuItem>
											<DropdownMenuItem>High Priority</DropdownMenuItem>
											<DropdownMenuItem>Medium Priority</DropdownMenuItem>
											<DropdownMenuItem>Low Priority</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
							</div>
						</CardHeader>
						<CardContent className="p-0 sm:p-6 sm:pt-0">
							<div className="overflow-x-auto">
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead className="text-xs">ID</TableHead>
											<TableHead className="text-xs">Customer</TableHead>
											<TableHead className="text-xs">Issue</TableHead>
											<TableHead className="text-xs hidden sm:table-cell">
												Amount
											</TableHead>
											<TableHead className="text-xs hidden sm:table-cell">
												Date
											</TableHead>
											<TableHead className="text-xs text-right">
												Priority
											</TableHead>
											<TableHead className="text-xs text-right">
												Actions
											</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{disputeCases.map((dispute) => (
											<TableRow key={dispute.id}>
												<TableCell className="font-medium text-xs p-2 sm:p-4">
													{dispute.id}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4">
													{dispute.customer}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4">
													{dispute.issue}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 hidden sm:table-cell">
													${dispute.amount.toFixed(2)}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 hidden sm:table-cell">
													{dispute.date}
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 text-right">
													<Badge
														variant={
															dispute.priority === "High"
																? "destructive"
																: dispute.priority === "Medium"
																? "default"
																: "outline"
														}
														className="text-[10px] sm:text-xs"
													>
														{dispute.priority}
													</Badge>
												</TableCell>
												<TableCell className="text-xs p-2 sm:p-4 text-right">
													<div className="flex justify-end gap-1">
														<Button
															variant="outline"
															size="sm"
															className="h-7 text-[10px] sm:text-xs"
														>
															Resolve
														</Button>
														<Button
															variant="outline"
															size="sm"
															className="h-7 text-[10px] sm:text-xs"
														>
															Escalate
														</Button>
														<Button
															variant="outline"
															size="sm"
															className="h-7 text-[10px] sm:text-xs"
														>
															Details
														</Button>
													</div>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</div>
						</CardContent>
						<CardFooter className="p-3 sm:p-6 flex items-center justify-between">
							<div className="text-xs text-muted-foreground">
								Showing {disputeCases.length} disputes
							</div>
							<div className="flex items-center gap-1">
								<Button
									variant="outline"
									size="sm"
									className="h-7 text-[10px] sm:text-xs"
								>
									Previous
								</Button>
								<Button
									variant="outline"
									size="sm"
									className="h-7 text-[10px] sm:text-xs"
								>
									Next
								</Button>
							</div>
						</CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
