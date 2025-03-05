"use client";

import { BackgroundParticles } from "@/components/ui/background-particles";
import LoginForm from "@/components/auth/login-form";
// import { useTheme } from "next-themes";
import { ModeToggle } from "@/components/mode-toggle";

export default function ExamplePage() {
	// const { theme, setTheme } = useTheme();

	return (
		<BackgroundParticles containerClassName="min-h-screen">
			<div className="container py-10">
				<div className="flex flex-col items-center justify-center space-y-8 py-10">
					<div className="flex items-center justify-center gap-10">
						<h1 className="text-4xl font-bold text-center">Welcome🎉</h1>
						<ModeToggle />
					</div>

					<div className="gap-2 mt-2 w-full max-w-4xl">
						<LoginForm />
					</div>
				</div>
			</div>
		</BackgroundParticles>
	);
}
