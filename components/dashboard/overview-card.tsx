import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon, type LucideIcon } from "lucide-react";

interface OverviewCardProps {
	title: string;
	value: string;
	change: {
		value: string;
		trend: "up" | "down";
		percentage: string;
	};
	icon: LucideIcon;
}

export function OverviewCard({
	title,
	value,
	change,
	icon: Icon,
}: OverviewCardProps) {
	return (
		<Card className="overflow-hidden">
			<CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 sm:pb-2">
				<CardTitle className="text-xs sm:text-sm font-medium">
					{title}
				</CardTitle>
				<Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
				<div className="text-base sm:text-xl md:text-2xl font-bold">
					{value}
				</div>
				<p className="text-[10px] sm:text-xs text-muted-foreground">
					<span
						className={`${
							change.trend === "up" ? "text-emerald-500" : "text-rose-500"
						} flex items-center`}
					>
						{change.trend === "up" ? (
							<ArrowUpIcon className="mr-0.5 h-3 w-3 sm:mr-1 sm:h-4 sm:w-4" />
						) : (
							<ArrowDownIcon className="mr-0.5 h-3 w-3 sm:mr-1 sm:h-4 sm:w-4" />
						)}
						{change.percentage}
					</span>{" "}
					{change.value}
				</p>
			</CardContent>
		</Card>
	);
}
