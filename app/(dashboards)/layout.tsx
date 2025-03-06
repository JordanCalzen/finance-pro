import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import Mobile from "@/components/mobile";
import { Header } from "@/components/layout/header";

export default async function DashboardLayout({
	children,
}: {
	children: ReactNode;
}) {
	const user = await getServerSession(authOptions);
	if (!user) {
		redirect("/login");
	}
	return (
		<div className={`min-h-screen bg-background`}>
			{/* Mobile Menu */}
			<Mobile />
			<div className="flex min-h-screen">
				{/* Sidebar - Desktop */}
				<Sidebar />

				{/* Main Content */}
				<main className="flex-1 lg:pl-64">
					{/* Header */}
					<div className="sticky top-0">
						<Header />
					</div>

					{children}
				</main>
			</div>
		</div>
	);
}
