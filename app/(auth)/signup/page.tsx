import SignupPage from "@/components/signup-page";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import React from "react";

export default function page() {
	return (
		<div>
			<SignupPage />
		</div>
	);
}
