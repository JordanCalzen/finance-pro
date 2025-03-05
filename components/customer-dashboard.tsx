"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { Header } from "@/components/layout/header";
import { OverviewCards } from "@/components/dashboard/overview-cards";
import { DashboardTabs } from "@/components/dashboard/dashboard-tabs";
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

export default function CustomerDashboard() {
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
			{/* Mobile Menu */}
			<MobileMenu
				isOpen={isMobileMenuOpen}
				onClose={() => setIsMobileMenuOpen(false)}
			/>

			<div className="flex min-h-screen">
				{/* Sidebar - Desktop */}
				<Sidebar />

				{/* Main Content */}
				<main className="flex-1 lg:pl-64">
					{/* Header */}
					<Header
						isDarkMode={isDarkMode}
						toggleDarkMode={toggleDarkMode}
						toggleMobileMenu={() => setIsMobileMenuOpen(true)}
					/>

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
						<OverviewCards />

						{/* Charts Section */}
						<DashboardTabs
							monthlyExpensesData={monthlyExpensesData}
							incomeVsExpensesData={incomeVsExpensesData}
							assetAllocationData={assetAllocationData}
							recentTransactions={recentTransactions}
						/>
					</div>
				</main>
			</div>
		</div>
	);
}
