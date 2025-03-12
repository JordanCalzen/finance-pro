"use client";

import type React from "react";

import { useState } from "react";
import {
	BanknoteIcon,
	BellIcon,
	CreditCardIcon,
	DollarSignIcon,
	ShieldCheckIcon,
	UserIcon,
	Mail,
	Phone,
	Loader2,
} from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ImageInput from "./uploader";
import { Session } from "next-auth";

// Define the form data type
export type FormValues = {
	username: string;
	email: string;
	phone: string;
	profileImage?: string;
	accountType: string;
	currency: string;
	accountStatus: string;
	initialDeposit: number;
	overdraftProtection: boolean;
	emailNotifications: boolean;
	smsNotifications: boolean;
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function AccountProfileForm() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const router = useRouter();
	const initialImage = "/profile-placeholder.avif";
	const [imageUrl, setImageUrl] = useState(initialImage);
	// console.log(user);

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm<FormValues>({
		defaultValues: {
			// username: user?.user.name as string,
			// email: user.user.email as string,
			phone: "",
			accountType: "Savings",
			currency: "UGX",
			accountStatus: "Active",
			initialDeposit: 0,
			overdraftProtection: false,
			emailNotifications: true,
			smsNotifications: false,
		},
	});

	// Watch values for controlled components
	const accountType = watch("accountType");
	const currency = watch("currency");
	const accountStatus = watch("accountStatus");
	const overdraftProtection = watch("overdraftProtection");
	const emailNotifications = watch("emailNotifications");
	const smsNotifications = watch("smsNotifications");

	// Clear error when user types in any field
	const clearError = () => {
		if (error) {
			setError("");
		}
	};

	async function onSubmit(data: FormValues) {
		data.profileImage = imageUrl;
		setLoading(true);
		try {
			const res = await fetch(`${baseUrl}/api/v1/accounts`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			if (res.ok) {
				setLoading(false);
				toast.success("Account created");
				router.push("/");
				router.refresh();
			}
			console.log(res);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}

	const handleSelectChange = (name: keyof FormValues, value: string) => {
		setValue(name, value);
	};

	const handleCheckboxChange = (name: keyof FormValues, checked: boolean) => {
		setValue(name, checked);
	};

	return (
		<div className="container mx-auto py-6 px-4 md:px-6">
			<Card className="w-full max-w-3xl mx-auto">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl font-bold text-center">
						Account Profile Setup
					</CardTitle>
					<CardDescription className="text-center">
						Complete your profile to get started with our financial management
						system
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
						{/* Personal Information Section */}
						<div className="space-y-4">
							<div className="flex items-center gap-2">
								<UserIcon className="h-5 w-5 text-primary" />
								<h3 className="text-lg font-medium">Personal Information</h3>
							</div>
							<Separator />

							<div className="flex flex-col md:flex-row gap-4 items-start">
								<div className="w-full md:w-3/4 space-y-4">
									<div className="space-y-2">
										<Label htmlFor="username">Username</Label>
										<div className="relative">
											<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
												<UserIcon className="h-4 w-4" />
											</div>
											<Input
												id="username"
												placeholder="johndoe"
												className="pl-10"
												{...register("username", {
													required: "Username is required",
													minLength: {
														value: 2,
														message: "Username must be at least 2 characters",
													},
												})}
												onInput={clearError}
											/>
										</div>
										{errors.username && (
											<p className="text-destructive text-sm mt-1">
												{errors.username.message}
											</p>
										)}
									</div>

									<div className="space-y-2">
										<Label htmlFor="email">Email</Label>
										<div className="relative">
											<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
												<Mail className="h-4 w-4" />
											</div>
											<Input
												id="email"
												type="email"
												placeholder="john.doe@example.com"
												className="pl-10"
												{...register("email", {
													required: "Email is required",
													pattern: {
														value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
														message: "Please enter a valid email address",
													},
												})}
												onInput={clearError}
											/>
										</div>
										{errors.email && (
											<p className="text-destructive text-sm mt-1">
												{errors.email.message}
											</p>
										)}
									</div>

									<div className="space-y-2">
										<Label htmlFor="phone">Phone Number</Label>
										<div className="relative">
											<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
												<Phone className="h-4 w-4" />
											</div>
											<Input
												id="phone"
												placeholder="+1 (555) 123-4567"
												className="pl-10"
												{...register("phone", {
													required: "Phone number is required",
													minLength: {
														value: 10,
														message: "Please enter a valid phone number",
													},
												})}
												onInput={clearError}
											/>
										</div>
										{errors.phone && (
											<p className="text-destructive text-sm mt-1">
												{errors.phone.message}
											</p>
										)}
									</div>
								</div>

								<div className="w-full md:w-1/4 flex flex-col items-center space-y-2">
									<ImageInput
										title="Profile Image"
										imageUrl={imageUrl}
										setImageUrl={setImageUrl}
										endpoint="categoryImage"
									/>
								</div>
							</div>
						</div>

						{/* Account Settings Section */}
						<div className="space-y-4">
							<div className="flex items-center gap-2">
								<CreditCardIcon className="h-5 w-5 text-primary" />
								<h3 className="text-lg font-medium">Account Settings</h3>
							</div>
							<Separator />

							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								<div className="space-y-2">
									<Label htmlFor="accountType">Account Type</Label>
									<Select
										value={accountType}
										onValueChange={(value) =>
											handleSelectChange("accountType", value)
										}
									>
										<SelectTrigger id="accountType">
											<SelectValue placeholder="Select account type" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="Savings">Savings</SelectItem>
											<SelectItem value="Checking">Checking</SelectItem>
											<SelectItem value="Loan">Loan</SelectItem>
										</SelectContent>
									</Select>
									<input
										type="hidden"
										{...register("accountType", {
											required: "Account type is required",
										})}
									/>
									{errors.accountType && (
										<p className="text-destructive text-sm mt-1">
											{errors.accountType.message}
										</p>
									)}
								</div>

								<div className="space-y-2">
									<Label htmlFor="currency">Currency</Label>
									<Select
										value={currency}
										onValueChange={(value) =>
											handleSelectChange("currency", value)
										}
									>
										<SelectTrigger id="currency">
											<SelectValue placeholder="Select currency" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="UGX">
												UGX - Ugandan Shilling
											</SelectItem>
											<SelectItem value="USD">USD - US Dollar</SelectItem>
											<SelectItem value="EUR">EUR - Euro</SelectItem>
											<SelectItem value="GBP">GBP - British Pound</SelectItem>
										</SelectContent>
									</Select>
									<input
										type="hidden"
										{...register("currency", {
											required: "Currency is required",
										})}
									/>
									{errors.currency && (
										<p className="text-destructive text-sm mt-1">
											{errors.currency.message}
										</p>
									)}
								</div>

								<div className="space-y-2">
									<Label htmlFor="accountStatus">Account Status</Label>
									<Select
										value={accountStatus}
										onValueChange={(value) =>
											handleSelectChange("accountStatus", value)
										}
									>
										<SelectTrigger id="accountStatus">
											<SelectValue placeholder="Select status" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="Active">Active</SelectItem>
											<SelectItem value="Closed">Closed</SelectItem>
											<SelectItem value="Suspended">Suspended</SelectItem>
										</SelectContent>
									</Select>
									<input type="hidden" {...register("accountStatus")} />
								</div>
							</div>
						</div>

						{/* Financial Preferences Section */}
						<div className="space-y-4">
							<div className="flex items-center gap-2">
								<BanknoteIcon className="h-5 w-5 text-primary" />
								<h3 className="text-lg font-medium">Financial Preferences</h3>
							</div>
							<Separator />

							<div className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="initialDeposit">Initial Deposit Amount</Label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
											<DollarSignIcon className="h-4 w-4" />
										</div>
										<Input
											id="initialDeposit"
											type="number"
											placeholder="0.00"
											className="pl-10"
											{...register("initialDeposit", {
												required: "Initial deposit is required",
												min: {
													value: 0,
													message: "Initial deposit must be a positive number",
												},
												valueAsNumber: true,
											})}
											onInput={clearError}
										/>
									</div>
									{errors.initialDeposit && (
										<p className="text-destructive text-sm mt-1">
											{errors.initialDeposit.message}
										</p>
									)}
									<p className="text-muted-foreground text-sm">
										Enter the amount you wish to deposit initially.
									</p>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
										<Checkbox
											id="overdraftProtection"
											checked={overdraftProtection}
											onCheckedChange={(checked) =>
												handleCheckboxChange(
													"overdraftProtection",
													checked as boolean
												)
											}
										/>
										<input type="hidden" {...register("overdraftProtection")} />
										<div className="space-y-1 leading-none">
											<Label
												htmlFor="overdraftProtection"
												className="flex items-center gap-1"
											>
												<ShieldCheckIcon className="h-4 w-4 text-primary" />
												Overdraft Protection
											</Label>
											<p className="text-muted-foreground text-sm">
												Prevent transactions that would cause your account to go
												below zero.
											</p>
										</div>
									</div>

									<div className="space-y-4">
										<Label className="flex items-center gap-1">
											<BellIcon className="h-4 w-4 text-primary" />
											Notification Preferences
										</Label>
										<div className="space-y-2">
											<div className="flex flex-row items-center space-x-3 space-y-0">
												<Checkbox
													id="emailNotifications"
													checked={emailNotifications}
													onCheckedChange={(checked) =>
														handleCheckboxChange(
															"emailNotifications",
															checked as boolean
														)
													}
												/>
												<input
													type="hidden"
													{...register("emailNotifications")}
												/>
												<Label
													htmlFor="emailNotifications"
													className="font-normal"
												>
													Email Notifications
												</Label>
											</div>
											<div className="flex flex-row items-center space-x-3 space-y-0">
												<Checkbox
													id="smsNotifications"
													checked={smsNotifications}
													onCheckedChange={(checked) =>
														handleCheckboxChange(
															"smsNotifications",
															checked as boolean
														)
													}
												/>
												<input
													type="hidden"
													{...register("smsNotifications")}
												/>
												<Label
													htmlFor="smsNotifications"
													className="font-normal"
												>
													SMS Notifications
												</Label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{error && <p className="text-destructive text-sm mt-1">{error}</p>}

						{loading ? (
							<Button
								disabled
								className="w-full flex items-center justify-center gap-2"
							>
								<Loader2 className="h-4 w-4 animate-spin" />
								Saving...
							</Button>
						) : (
							<Button type="submit" className="w-full">
								Save Profile
							</Button>
						)}
					</form>
				</CardContent>
				<CardFooter className="flex justify-center text-sm text-muted-foreground">
					All your information is securely stored and protected
				</CardFooter>
			</Card>
		</div>
	);
}
