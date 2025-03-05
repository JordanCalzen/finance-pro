"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Bar } from "react-chartjs-2";

interface IncomeExpense {
	name: string;
	income: number;
	expenses: number;
}

interface IncomeVsExpensesChartProps {
	data: IncomeExpense[];
}

export function IncomeVsExpensesChart({ data }: IncomeVsExpensesChartProps) {
	return (
		<Card>
			<CardHeader className="p-3 sm:p-6">
				<CardTitle className="text-sm sm:text-base">
					Income vs Expenses
				</CardTitle>
				<CardDescription className="text-xs">
					Comparison of your income and expenses for the past 6 months
				</CardDescription>
			</CardHeader>
			<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0 h-[200px] sm:h-[250px] md:h-[300px]">
				<div className="flex items-center gap-4 mb-2 sm:mb-4">
					<div className="flex items-center gap-1 sm:gap-2">
						<div className="h-2 w-2 sm:h-3 sm:w-3 rounded-sm bg-primary"></div>
						<span className="text-xs sm:text-sm font-medium">Income</span>
					</div>
					<div className="flex items-center gap-1 sm:gap-2">
						<div className="h-2 w-2 sm:h-3 sm:w-3 rounded-sm bg-destructive"></div>
						<span className="text-xs sm:text-sm font-medium">Expenses</span>
					</div>
				</div>
				<div className="h-[170px] sm:h-[220px] md:h-[250px]">
					<Bar
						data={{
							labels: data.map((item) => item.name),
							datasets: [
								{
									label: "Income",
									data: data.map((item) => item.income),
									backgroundColor: "hsl(var(--primary))",
									borderRadius: 4,
								},
								{
									label: "Expenses",
									data: data.map((item) => item.expenses),
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
	);
}
