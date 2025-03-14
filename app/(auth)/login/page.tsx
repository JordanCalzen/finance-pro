"use client";

import LoginForm from "@/components/auth/login-form";
import { ModeToggle } from "@/components/mode-toggle";

export default function ExamplePage() {
	return (
		<div
			className="relative min-h-screen bg-cover bg-center"
			style={{
				backgroundImage: "url('/finance-pro.avif')", // Replace with your image URL
			}}
		>
			{/* Linear Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />

			{/* Dark Overlay for better contrast */}
			<div className="absolute inset-0 bg-black/40" />

			{/* Content */}
			<div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-10">
				<div className="flex items-center justify-center gap-10">
					<h1 className="text-4xl font-bold text-center text-white">
						🎉Welcome
					</h1>
					<ModeToggle />
				</div>

				<div className="gap-2 mt-2 w-full max-w-4xl">
					<LoginForm />
				</div>
			</div>
		</div>
	);
}
