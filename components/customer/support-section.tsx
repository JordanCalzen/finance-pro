import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	MessageSquareIcon,
	AlertTriangleIcon,
	PhoneIcon,
	MailIcon,
} from "lucide-react";

export function SupportSection() {
	return (
		<div className="grid gap-4 md:grid-cols-2">
			<Card>
				<CardHeader>
					<CardTitle>Raise a Dispute</CardTitle>
					<CardDescription>Report an issue with a transaction</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col space-y-4">
						<p className="text-sm text-muted-foreground">
							If you notice any unauthorized transactions or have issues with a
							specific transaction, you can raise a dispute for our team to
							investigate.
						</p>
						<Button className="w-full" asChild>
							<a href="/dashboard/support/dispute">
								<AlertTriangleIcon className="mr-2 h-4 w-4" />
								Raise a Dispute
							</a>
						</Button>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Contact Support</CardTitle>
					<CardDescription>
						Get help from our customer service team
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col space-y-4">
						<div className="grid gap-2">
							<div className="flex items-center">
								<PhoneIcon className="mr-2 h-4 w-4 text-muted-foreground" />
								<span className="text-sm">+1 (800) 123-4567</span>
							</div>
							<div className="flex items-center">
								<MailIcon className="mr-2 h-4 w-4 text-muted-foreground" />
								<span className="text-sm">support@bankname.com</span>
							</div>
						</div>
						<Button className="w-full" asChild>
							<a href="/dashboard/support/chat">
								<MessageSquareIcon className="mr-2 h-4 w-4" />
								Start Live Chat
							</a>
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
