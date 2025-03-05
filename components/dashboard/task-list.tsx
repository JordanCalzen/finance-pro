import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckIcon, XIcon, ArrowRightIcon } from "lucide-react";

interface Task {
	id: string;
	title: string;
	customer: string;
	time: string;
	type: "transaction" | "loan" | "dispute";
	status: "pending" | "urgent" | "escalated";
}

interface TaskListProps {
	title: string;
	description: string;
	tasks: Task[];
	emptyMessage: string;
}

export function TaskList({
	title,
	description,
	tasks,
	emptyMessage,
}: TaskListProps) {
	const getStatusBadge = (status: string) => {
		switch (status) {
			case "urgent":
				return <Badge variant="destructive">Urgent</Badge>;
			case "escalated":
				return (
					<Badge
						variant="outline"
						className="bg-amber-100 text-amber-800 hover:bg-amber-100 border-amber-200 dark:bg-amber-900/30 dark:text-amber-500 dark:border-amber-800"
					>
						Escalated
					</Badge>
				);
			default:
				return <Badge variant="secondary">Pending</Badge>;
		}
	};

	const getTypeIcon = (type: string) => {
		switch (type) {
			case "transaction":
				return "💰";
			case "loan":
				return "📝";
			case "dispute":
				return "⚠️";
			default:
				return "📋";
		}
	};

	return (
		<Card>
			<CardHeader className="p-3 sm:p-6">
				<CardTitle className="text-sm sm:text-base">{title}</CardTitle>
				<CardDescription className="text-xs">{description}</CardDescription>
			</CardHeader>
			<CardContent className="p-0">
				{tasks.length === 0 ? (
					<div className="py-6 text-center text-sm text-muted-foreground">
						{emptyMessage}
					</div>
				) : (
					<div className="divide-y">
						{tasks.map((task) => (
							<div
								key={task.id}
								className="flex items-center justify-between p-3 sm:p-4 hover:bg-muted/50"
							>
								<div className="min-w-0 flex-1">
									<div className="flex items-center gap-2">
										<span className="text-base">{getTypeIcon(task.type)}</span>
										<div className="truncate">
											<p className="text-xs sm:text-sm font-medium truncate">
												{task.title}
											</p>
											<p className="text-[10px] sm:text-xs text-muted-foreground truncate">
												Customer: {task.customer} • {task.time}
											</p>
										</div>
									</div>
								</div>
								<div className="ml-2 flex items-center gap-2">
									{getStatusBadge(task.status)}
									<div className="flex gap-1">
										<Button
											size="icon"
											variant="ghost"
											className="h-7 w-7 rounded-full"
										>
											<CheckIcon className="h-3.5 w-3.5 text-emerald-500" />
											<span className="sr-only">Approve</span>
										</Button>
										<Button
											size="icon"
											variant="ghost"
											className="h-7 w-7 rounded-full"
										>
											<XIcon className="h-3.5 w-3.5 text-rose-500" />
											<span className="sr-only">Reject</span>
										</Button>
										<Button
											size="icon"
											variant="ghost"
											className="h-7 w-7 rounded-full"
										>
											<ArrowRightIcon className="h-3.5 w-3.5" />
											<span className="sr-only">View Details</span>
										</Button>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</CardContent>
		</Card>
	);
}
