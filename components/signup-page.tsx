"use client";

import { BackgroundParticles } from "@/components/ui/background-particles";
// import { useTheme } from "next-themes";
import SignupForm from "@/components/auth/signup";
import { ModeToggle } from "@/components/mode-toggle";
import { Session } from "@prisma/client";

export default function SignupPage() {
	// const { theme, setTheme } = useTheme();

	return (
		<BackgroundParticles containerClassName="min-h-screen">
			<div className="container py-10">
				<div className="flex flex-col items-center justify-center space-y-8 py-10">
					<div className="flex items-center justify-center gap-10">
						<h1 className="text-4xl font-bold text-center">🎉Welcome</h1>
						<ModeToggle />
					</div>

					<div className="gap-2 mt-2 w-full max-w-4xl">
						<SignupForm />
					</div>
				</div>
			</div>
		</BackgroundParticles>
	);
}
