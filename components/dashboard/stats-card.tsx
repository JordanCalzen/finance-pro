import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TypeIcon as type, LucideIcon } from "lucide-react";

interface StatsCardProps {
	title: string;
	value: string | number;
	description: string;
	icon: LucideIcon;
	variant?: "default" | "warning" | "success" | "danger";
}

export function StatsCard({
	title,
	value,
	description,
	icon: Icon,
	variant = "default",
}: StatsCardProps) {
	const getVariantClasses = () => {
		switch (variant) {
			case "warning":
				return "text-amber-500 bg-amber-50 dark:bg-amber-950/20";
			case "success":
				return "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20";
			case "danger":
				return "text-rose-500 bg-rose-50 dark:bg-rose-950/20";
			default:
				return "text-blue-500 bg-blue-50 dark:bg-blue-950/20";
		}
	};

	return (
		<Card className="overflow-hidden">
			<CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 sm:pb-2">
				<CardTitle className="text-xs sm:text-sm font-medium">
					{title}
				</CardTitle>
				<div className={`p-1.5 rounded-full ${getVariantClasses()}`}>
					<Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
				</div>
			</CardHeader>
			<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
				<div className="text-base sm:text-xl md:text-2xl font-bold">
					{value}
				</div>
				<p className="text-[10px] sm:text-xs text-muted-foreground">
					{description}
				</p>
			</CardContent>
		</Card>
	);
}
