import { FormValues } from "@/components/account-profile-form";
import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const data: FormValues = await request.json();
	} catch (error) {
		console.log(error);
	}
}
