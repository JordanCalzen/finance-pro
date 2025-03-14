import { AdminContent } from "@/components/admin-dashboard-content";
import DashboardContent from "@/components/customer/dashboard-content";
import { WorkerContent } from "@/components/work-dashboard-content";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import React from "react";

type RoleProps = {
	USER: "USER";
	ADMIN: "ADMIN";
	SERVICE_PROVIDER: "SERVICE_PROVIDER";
};

const ROLE: RoleProps = {
	USER: "USER",
	ADMIN: "ADMIN",
	SERVICE_PROVIDER: "SERVICE_PROVIDER",
};

export default async function Home() {
	const session = await getServerSession(authOptions);
	const role = session?.user.role;
	const userData = session;

	return (
		<div>
			{role === ROLE.USER ? (
				<DashboardContent session={userData} />
			) : role === ROLE.ADMIN ? (
				<AdminContent />
			) : role === ROLE.SERVICE_PROVIDER ? (
				<WorkerContent />
			) : (
				<p>Unauthorized</p>
			)}
		</div>
	);
}
