import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const menuLinks = [
	{ title: "Home", href: "/dashboard" },
	{ title: "Accounts", href: "/dashboard/accounts" },
	{ title: "Transactions", href: "/dashboard/transactions" },
	{ title: "Deposits", href: "/dashboard/deposits" },
	{ title: "Withdrawals", href: "/dashboard/withdrawals" },
	{ title: "Loans", href: "/dashboard/loans" },
	{ title: "Savings", href: "/dashboard/savings" },
	{ title: "Support", href: "/dashboard/support" },
	{ title: "Settings", href: "/dashboard/settings" },
];

export function MobileNav() {
	const [isOpen, setIsOpen] = React.useState(false);
	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
				>
					<svg
						strokeWidth="1.5"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="size-5"
					>
						<path
							d="M3 5H11"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
						<path
							d="M3 12H16"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
						<path
							d="M3 19H21"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</svg>
					<span className="sr-only">Toggle Menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left">
				<ScrollArea className="my-4 h-[calc(100vh-6rem)]">
					<div className="flex flex-col space-y-1.5">
						{menuLinks.map((item) => (
							<MobileLink key={item.href} href={item.href}>
								{item.title}
							</MobileLink>
						))}
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
}

interface MobileLinkProps extends LinkProps {
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
	className?: string;
}

function MobileLink({
	href,
	onOpenChange,
	className,
	children,
	...props
}: MobileLinkProps) {
	const router = useRouter();
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<SheetClose asChild>
			<Link
				href={href}
				onClick={() => {
					router.push(href.toString());
					onOpenChange?.(false);
				}}
				className={cn(
					className,
					"p-2 pl-3 text-[15px] rounded-md transition-colors",
					"hover:bg-primary/10 hover:text-primary",
					isActive ? "bg-primary/20 text-primary font-medium" : ""
				)}
				{...props}
			>
				{children}
			</Link>
		</SheetClose>
	);
}
