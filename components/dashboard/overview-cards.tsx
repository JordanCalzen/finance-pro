import {
	DollarSignIcon,
	ArrowUpIcon,
	ArrowDownIcon,
	PieChartIcon,
} from "lucide-react";
import { OverviewCard } from "./overview-card";

export function OverviewCards() {
	return (
		<div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
			<OverviewCard
				title="Total Balance"
				value="$24,563.00"
				change={{
					value: "from last month",
					trend: "up",
					percentage: "+2.5%",
				}}
				icon={DollarSignIcon}
			/>
			<OverviewCard
				title="Monthly Income"
				value="$5,231.89"
				change={{
					value: "from last month",
					trend: "up",
					percentage: "+14.2%",
				}}
				icon={ArrowUpIcon}
			/>
			<OverviewCard
				title="Monthly Expenses"
				value="$3,045.50"
				change={{
					value: "from last month",
					trend: "up",
					percentage: "+5.1%",
				}}
				icon={ArrowDownIcon}
			/>
			<OverviewCard
				title="Savings Rate"
				value="41.8%"
				change={{
					value: "from last month",
					trend: "up",
					percentage: "+8.2%",
				}}
				icon={PieChartIcon}
			/>
		</div>
	);
}
