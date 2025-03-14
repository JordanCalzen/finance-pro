// app/hooks/useContacts.ts
"use client";

import { fetchAccounts } from "@/actions/fetch";
import { Account, Deposit, Withdraw } from "@prisma/client";
// import { fetchProduct, fetchSingleProduct } from "@/actions/fetch-category";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const url = process.env.NEXT_PUBLIC_BASE_URL;

export async function fetchSingleAccount(id: string) {
	try {
		const response = await fetch(`${url}/api/v1/accounts/${id}`, {
			cache: "no-store",
		});
		const results = await response.json();
		return results.data as Account;
	} catch (error) {
		console.log(error);
	}
}

export async function fetchDeposits() {
	try {
		const response = await fetch(`${url}/api/v1/deposits`, {
			cache: "no-store",
		});
		const results = await response.json();
		return results.data as Deposit[];
	} catch (error) {
		console.log(error);
	}
}

export async function fetchWithdraws() {
	try {
		const response = await fetch(`${url}/api/v1/withdraws`, {
			cache: "no-store",
		});
		const results = await response.json();
		return results.data as Withdraw[];
	} catch (error) {
		console.log(error);
	}
}

export function useAccounts() {
	const queryClient = useQueryClient();

	// Query for fetching all products
	const AccountQuery = useQuery({
		queryKey: ["accounts"],
		queryFn: async () => {
			const data = await fetchAccounts();
			return data;
		},
	});

	// Create contact mutation
	//   const createContactMutation = useMutation({
	//     mutationFn: createContact,
	//     onSuccess: () => {
	//       queryClient.invalidateQueries({ queryKey: ["contacts"] });
	//     },
	//   });

	// Update contact mutation
	//   const updateContactMutation = useMutation({
	//     mutationFn: ({ id, data }: { id: string; data: Partial<Contact> }) =>
	//       updateContact(id, data),
	//     onSuccess: () => {
	//       queryClient.invalidateQueries({ queryKey: ["contacts"] });
	//     },
	//   });

	// Delete contact mutation
	//   const deleteContactMutation = useMutation({
	//     mutationFn: deleteContact,
	//     onSuccess: () => {
	//       queryClient.invalidateQueries({ queryKey: ["contacts"] });
	//     },
	//   });

	return {
		// Queries
		Accounts: AccountQuery.data ?? [],
		isLoading: AccountQuery.isLoading,
		error: AccountQuery.error,

		// Mutations
		// createContact: createContactMutation.mutate,
		// updateContact: updateContactMutation.mutate,
		// deleteContact: deleteContactMutation.mutate,

		// Mutation states
		// isCreating: createContactMutation.isPending,
		// isUpdating: updateContactMutation.isPending,
		// isDeleting: deleteContactMutation.isPending,
	};
}

export function useDeposits() {
	const queryClient = useQueryClient();

	// Query for fetching all products
	const DepositQuery = useQuery({
		queryKey: ["deposit"],
		queryFn: async () => {
			const data = await fetchDeposits();
			return data;
		},
	});

	// Create contact mutation
	//   const createContactMutation = useMutation({
	//     mutationFn: createContact,
	//     onSuccess: () => {
	//       queryClient.invalidateQueries({ queryKey: ["contacts"] });
	//     },
	//   });

	// Update contact mutation
	//   const updateContactMutation = useMutation({
	//     mutationFn: ({ id, data }: { id: string; data: Partial<Contact> }) =>
	//       updateContact(id, data),
	//     onSuccess: () => {
	//       queryClient.invalidateQueries({ queryKey: ["contacts"] });
	//     },
	//   });

	// Delete contact mutation
	//   const deleteContactMutation = useMutation({
	//     mutationFn: deleteContact,
	//     onSuccess: () => {
	//       queryClient.invalidateQueries({ queryKey: ["contacts"] });
	//     },
	//   });

	return {
		// Queries
		deposits: DepositQuery.data ?? [],
		isLoading: DepositQuery.isLoading,
		error: DepositQuery.error,

		// Mutations
		// createContact: createContactMutation.mutate,
		// updateContact: updateContactMutation.mutate,
		// deleteContact: deleteContactMutation.mutate,

		// Mutation states
		// isCreating: createContactMutation.isPending,
		// isUpdating: updateContactMutation.isPending,
		// isDeleting: deleteContactMutation.isPending,
	};
}

export function useWithdraws() {
	const queryClient = useQueryClient();

	// Query for fetching all products
	const WithdrawQuery = useQuery({
		queryKey: ["withdraw"],
		queryFn: async () => {
			const data = await fetchWithdraws();
			return data;
		},
	});

	// Create contact mutation
	//   const createContactMutation = useMutation({
	//     mutationFn: createContact,
	//     onSuccess: () => {
	//       queryClient.invalidateQueries({ queryKey: ["contacts"] });
	//     },
	//   });

	// Update contact mutation
	//   const updateContactMutation = useMutation({
	//     mutationFn: ({ id, data }: { id: string; data: Partial<Contact> }) =>
	//       updateContact(id, data),
	//     onSuccess: () => {
	//       queryClient.invalidateQueries({ queryKey: ["contacts"] });
	//     },
	//   });

	// Delete contact mutation
	//   const deleteContactMutation = useMutation({
	//     mutationFn: deleteContact,
	//     onSuccess: () => {
	//       queryClient.invalidateQueries({ queryKey: ["contacts"] });
	//     },
	//   });

	return {
		// Queries
		withdraws: WithdrawQuery.data ?? [],
		isLoading: WithdrawQuery.isLoading,
		error: WithdrawQuery.error,

		// Mutations
		// createContact: createContactMutation.mutate,
		// updateContact: updateContactMutation.mutate,
		// deleteContact: deleteContactMutation.mutate,

		// Mutation states
		// isCreating: createContactMutation.isPending,
		// isUpdating: updateContactMutation.isPending,
		// isDeleting: deleteContactMutation.isPending,
	};
}

// Hook for fetching a single contact
export function useAccount(id: string) {
	const queryClient = useQueryClient();
	const accountQuery = useQuery({
		queryKey: ["account", id],
		queryFn: () => fetchSingleAccount(id),
		// select: (response) => ({
		// 	account: response,
		// 	error: "",
		// }),
	});
	return {
		account: accountQuery.data,
		error: accountQuery.error,
		isLoading: accountQuery.isLoading,
	};
}
