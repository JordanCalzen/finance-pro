import DepositForm from "@/components/deposit-form";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import React from "react";

export default async function page() {
	const session = await getServerSession(authOptions);
	const userId = session?.user.id ?? "";
	console.log(userId);
	return (
		<div>
			<DepositForm userId={userId} />
		</div>
	);
}
