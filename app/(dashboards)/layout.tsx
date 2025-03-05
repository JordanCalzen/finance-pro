import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

export default async function DashboardLayout({
	children,
}: {
	children: ReactNode;
}) {
	const user = await getServerSession(authOptions);
	if (!user) {
		redirect("/login");
	}
	return <div>{children}</div>;
}
