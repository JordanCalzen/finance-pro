"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	MenuIcon,
	SearchIcon,
	SunIcon,
	MoonIcon,
	BellIcon,
	UserIcon,
	SettingsIcon,
} from "lucide-react";

interface HeaderProps {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
	toggleMobileMenu: () => void;
}

export function Header({
	isDarkMode,
	toggleDarkMode,
	toggleMobileMenu,
}: HeaderProps) {
	return (
		<header className="sticky top-0 z-40 border-b bg-background">
			<div className="flex h-12 sm:h-14 items-center justify-between px-2 sm:px-4 md:px-6">
				<div className="flex items-center gap-1 sm:gap-2">
					<Button
						variant="ghost"
						size="icon"
						className="h-8 w-8 lg:hidden"
						onClick={toggleMobileMenu}
					>
						<MenuIcon className="h-5 w-5" />
						<span className="sr-only">Toggle Menu</span>
					</Button>
					<div className="relative w-full max-w-[120px] sm:max-w-none sm:w-64 lg:w-80">
						<SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search..."
							className="h-8 w-full bg-background pl-7 text-xs sm:text-sm"
						/>
					</div>
				</div>
				<div className="flex items-center gap-1 sm:gap-2">
					<Button
						variant="ghost"
						size="icon"
						className="h-8 w-8"
						onClick={toggleDarkMode}
					>
						{isDarkMode ? (
							<SunIcon className="h-4 w-4 sm:h-5 sm:w-5" />
						) : (
							<MoonIcon className="h-4 w-4 sm:h-5 sm:w-5" />
						)}
						<span className="sr-only">Toggle theme</span>
					</Button>
					<Button variant="ghost" size="icon" className="h-8 w-8">
						<BellIcon className="h-4 w-4 sm:h-5 sm:w-5" />
						<span className="sr-only">Notifications</span>
					</Button>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="h-8 w-8 rounded-full"
							>
								<Avatar className="h-7 w-7 sm:h-8 sm:w-8">
									<AvatarImage
										src="/placeholder.svg?height=32&width=32"
										alt="User"
									/>
									<AvatarFallback>JD</AvatarFallback>
								</Avatar>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<UserIcon className="mr-2 h-4 w-4" />
								Profile
							</DropdownMenuItem>
							<DropdownMenuItem>
								<SettingsIcon className="mr-2 h-4 w-4" />
								Settings
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Log out</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</header>
	);
}
