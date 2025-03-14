import { Account } from "@prisma/client";

const url = process.env.NEXT_PUBLIC_BASE_URL;
export async function fetchAccounts() {
	try {
		const response = await fetch(`${url}/api/v1/accounts`, {
			cache: "no-store",
		});
		const results = await response.json();
		return results.data as Account[];
	} catch (error) {
		console.log(error);
	}
}
