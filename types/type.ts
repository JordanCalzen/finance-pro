import { Account } from "@prisma/client";

// Server action return types
export type QueriesResponse = {
	data: Account[] | null;
	error?: string | null;
};

// For single contact queries
export type SingleQueryResponse = {
	data: Account | null;
	error?: string | null;
};

// For mutation operations
// type MutationResponse = {
// 	success: boolean;
// 	data?: Contact;
// 	error?: string;
// };
