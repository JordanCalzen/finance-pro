import { FormValues } from "@/components/account-profile-form";
import { DepositValues } from "@/components/deposit-form";
// import { authOptions } from "@/config/auth";
import { db } from "@/prisma/db";
import { QueriesDepositsResponse } from "@/types/type";
// import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const data: DepositValues = await request.json();
	const {
		amount,
		depositMethod,
		bankName,
		accountNumber,
		provider,
		phoneNumber,
		email,
		referenceNumber,
		notes,
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
		const deposit = await db.deposit.create({
			data: {
				amount,
				depositMethod,
				bankName,
				accountNumber,
				provider,
				phoneNumber,
				email,
				referenceNumber,
				notes,
				userId,
			},
		});
		return NextResponse.json(
			{
				message: "created",
				data: deposit,
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

export async function GET(): Promise<NextResponse<QueriesDepositsResponse>> {
	try {
		const deposits = await db.deposit.findMany({
			include: {
				user: true,
			},
		});
		return NextResponse.json(
			{
				message: "created",
				data: deposits,
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
