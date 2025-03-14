import { authOptions } from "@/config/auth";
import { db } from "@/prisma/db";
import { SingleQueryResponse } from "@/types/type";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
): Promise<NextResponse<SingleQueryResponse>> {
	const { id } = await params;
	const session = await getServerSession(authOptions);
	const userIdFromSession = session?.user.id ?? "";

	// Ensure user is authenticated
	if (!userIdFromSession) {
		return NextResponse.json(
			{
				message: "Unauthorized",
				data: null,
				error: "User not authenticated",
			},
			{ status: 401 }
		);
	}

	try {
		// Fetch the account where userId matches session userId
		const account = await db.account.findUnique({
			where: { id, userId: userIdFromSession },
			include: {
				user: true,
			},
		});

		if (!account) {
			return NextResponse.json(
				{
					message: "Account not found",
					data: null,
					error: "No account found for the given user",
				},
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{
				message: "Account retrieved successfully",
				data: account,
				error: null,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{
				message: "Failed to retrieve account",
				data: null,
				error: "Something went wrong",
			},
			{ status: 500 }
		);
	}
}
