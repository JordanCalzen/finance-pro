"use server";

export type WithdrawalFormData = {
	amount: number;
	method: string;
	accountDetails: string;
	reason: string;
};

export async function submitWithdrawalRequest(formData: WithdrawalFormData) {
	try {
		// Validate the data manually if needed
		if (!formData.amount || formData.amount <= 0) {
			return {
				success: false,
				message: "Amount must be greater than zero",
			};
		}

		// Simulate API call with a delay
		await new Promise((resolve) => setTimeout(resolve, 1500));

		// In a real application, you would make an API call here
		// const response = await fetch('your-api-endpoint', {
		//   method: 'POST',
		//   headers: { 'Content-Type': 'application/json' },
		//   body: JSON.stringify(formData),
		// })

		// For demo purposes, we'll just return success
		return {
			success: true,
			message: "Withdrawal request submitted successfully",
			data: formData,
		};
	} catch (error) {
		return {
			success: false,
			message: "Failed to submit withdrawal request. Please try again.",
		};
	}
}
