import { FormValues } from "@/components/account-profile-form";
import { authOptions } from "@/config/auth";
import { db } from "@/prisma/db";
import { QueriesResponse } from "@/types/type";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const session = await getServerSession(authOptions);
	const userIdFromSession = session?.user.id;
	const data: FormValues = await request.json();
	const {
		username,
		email,
		phone,
		profileImage,
		accountType,
		currency,
		accountStatus,
		initialDeposit,
		overdraftProtection,
		emailNotifications,
		smsNotifications,
		userId: userIdFromRequest,
	} = data;
	const userId = userIdFromRequest || userIdFromSession;
	try {
		// Ensure userId is provided
		if (!userId) {
			return NextResponse.json(
				{
					message: "User ID is required",
					data: null,
					error: "Missing userId",
				},
				{ status: 400 }
			);
		}

		// Create stack in database
		const account = await db.account.create({
			data: {
				username,
				email,
				phone,
				profileImage,
				accountType,
				currency,
				accountStatus,
				initialDeposit,
				overdraftProtection,
				emailNotifications,
				smsNotifications,
				userId, // Store userId in the database
			},
		});
		return NextResponse.json(
			{
				message: "created",
				data: account,
				error: null,
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{
				message: "Failed",
				data: null,
				error: "something went wrong",
			},
			{ status: 500 }
		);
	}
}

export async function GET(): Promise<NextResponse<QueriesResponse>> {
	try {
		const accounts = await db.account.findMany({
			include: {
				user: true,
			},
		});
		return NextResponse.json(
			{
				message: "created",
				data: accounts,
				error: null,
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{
				message: "Failed",
				data: null,
				error: "something went wrong",
			},
			{ status: 500 }
		);
	}
}
