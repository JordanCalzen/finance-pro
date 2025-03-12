import AccountProfileForm from "@/components/account-profile-form";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import React from "react";

export default async function page() {
	const session = await getServerSession(authOptions);
	const user = session?.user;
	console.log(user, "Hello");
	return (
		<div>
			<AccountProfileForm />
		</div>
	);
}
