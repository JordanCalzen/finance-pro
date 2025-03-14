"use client";

import { BackgroundParticles } from "@/components/ui/background-particles";
// import { useTheme } from "next-themes";
import SignupForm from "@/components/auth/signup";
import { ModeToggle } from "@/components/mode-toggle";
import { Session } from "@prisma/client";

export default function SignupPage() {
	// const { theme, setTheme } = useTheme();

	return (
		<div
			className="relative min-h-screen  bg-cover bg-center"
			style={{
				backgroundImage: "url('/finance-pro.avif')", // Replace with your image URL
			}}
		>
			{/* Linear Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />

			{/* Dark Overlay for better contrast */}
			<div className="absolute inset-0 bg-black/60" />

			{/* Content */}
			<div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-4">
				<div className="flex items-center -mt-2 justify-center gap-10">
					<h1 className="text-4xl font-bold text-center text-white">
						🎉Welcome
					</h1>
					<ModeToggle />
				</div>

				<div className="gap-2 w-full -mt-4 max-w-4xl">
					<SignupForm />
				</div>
			</div>
		</div>
	);
}
