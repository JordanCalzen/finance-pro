import { WithdrawalFormData } from "@/components/withdraw-form";
import { db } from "@/prisma/db";
import { QueriesWithdrawsResponse } from "@/types/type";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const data: WithdrawalFormData = await request.json();
	const {
		amount,
		withdrawMethod,
		accountDetails,
		reason,
		bankName,
		accountNumber,
		accountHolderName,
		swiftCode,
		provider,
		phoneNumber,
		email,
		walletAddress,
		network,
		userId,
	} = data;
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
		const withdraw = await db.withdraw.create({
			data: {
				amount,
				withdrawMethod,
				accountDetails,
				reason,
				bankName,
				accountNumber,
				accountHolderName,
				swiftCode,
				provider,
				phoneNumber,
				email,
				walletAddress,
				network,
				userId,
			},
		});
		return NextResponse.json(
			{
				message: "created",
				data: withdraw,
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

export async function GET(): Promise<NextResponse<QueriesWithdrawsResponse>> {
	try {
		const withdraws = await db.withdraw.findMany({
			include: {
				user: true,
			},
		});
		return NextResponse.json(
			{
				message: "created",
				data: withdraws,
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
