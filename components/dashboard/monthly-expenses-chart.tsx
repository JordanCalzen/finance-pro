"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Line } from "react-chartjs-2";

interface MonthlyExpense {
	name: string;
	value: number;
}

interface MonthlyExpensesChartProps {
	data: MonthlyExpense[];
}

export function MonthlyExpensesChart({ data }: MonthlyExpensesChartProps) {
	return (
		<Card className="lg:col-span-4">
			<CardHeader className="p-3 sm:p-6">
				<CardTitle className="text-sm sm:text-base">Monthly Expenses</CardTitle>
				<CardDescription className="text-xs">
					Your expense trend over the past 12 months
				</CardDescription>
			</CardHeader>
			<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0 h-[200px] sm:h-[250px] md:h-[300px]">
				<div className="h-full w-full">
					<Line
						data={{
							labels: data.map((item) => item.name),
							datasets: [
								{
									label: "Monthly Expenses",
									data: data.map((item) => item.value),
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
	);
}
