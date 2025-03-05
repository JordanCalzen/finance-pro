import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface Asset {
	name: string;
	value: number;
}

interface AssetAllocationProps {
	data: Asset[];
}

export function AssetAllocation({ data }: AssetAllocationProps) {
	return (
		<Card className="lg:col-span-3">
			<CardHeader className="p-3 sm:p-6">
				<CardTitle className="text-sm sm:text-base">Asset Allocation</CardTitle>
				<CardDescription className="text-xs">
					Your current investment portfolio
				</CardDescription>
			</CardHeader>
			<CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
				<div className="space-y-3 sm:space-y-4">
					{data.map((item) => (
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
	);
}
