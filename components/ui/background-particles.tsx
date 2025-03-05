"use client";

import type React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";

interface BackgroundParticlesProps {
	className?: string;
	children?: React.ReactNode;
	containerClassName?: string;
	particleCount?: number;
}

export function BackgroundParticles({
	className,
	children,
	containerClassName,
	particleCount = 40,
}: BackgroundParticlesProps) {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted || !canvasRef.current) return;

		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let animationFrameId: number;
		let particles: Particle[] = [];

		const resizeCanvas = () => {
			const { width, height } = canvas.getBoundingClientRect();
			const { devicePixelRatio: ratio = 1 } = window;
			canvas.width = width * ratio;
			canvas.height = height * ratio;
			ctx.scale(ratio, ratio);
		};

		class Particle {
			x: number;
			y: number;
			size: number;
			speedX: number;
			speedY: number;
			color: string;

			constructor() {
				this.x = Math.random() * canvas.width;
				this.y = Math.random() * canvas.height;
				this.size = Math.random() * 3 + 1;
				this.speedX = Math.random() * 0.5 - 0.25;
				this.speedY = Math.random() * 0.5 - 0.25;
				this.color =
					theme === "dark"
						? "rgba(168, 85, 247, 0.4)"
						: "rgba(168, 85, 247, 0.2)";
			}

			update() {
				this.x += this.speedX;
				this.y += this.speedY;

				if (this.x > canvas.width) this.x = 0;
				else if (this.x < 0) this.x = canvas.width;

				if (this.y > canvas.height) this.y = 0;
				else if (this.y < 0) this.y = canvas.height;
			}

			draw() {
				if (!ctx) return;
				ctx.fillStyle = this.color;
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		const init = () => {
			particles = [];
			for (let i = 0; i < particleCount; i++) {
				particles.push(new Particle());
			}
		};

		const animate = () => {
			if (!ctx) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			particles.forEach((particle, i) => {
				particle.update();
				particle.draw();

				for (let j = i + 1; j < particles.length; j++) {
					const dx = particle.x - particles[j].x;
					const dy = particle.y - particles[j].y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < 100) {
						ctx.beginPath();
						ctx.strokeStyle =
							theme === "dark"
								? `rgba(168, 85, 247, ${0.2 * (1 - distance / 100)})`
								: `rgba(168, 85, 247, ${0.1 * (1 - distance / 100)})`;
						ctx.lineWidth = 0.5;
						ctx.moveTo(particle.x, particle.y);
						ctx.lineTo(particles[j].x, particles[j].y);
						ctx.stroke();
					}
				}
			});

			animationFrameId = requestAnimationFrame(animate);
		};

		resizeCanvas();
		init();
		animate();

		const handleResize = () => {
			resizeCanvas();
			init();
		};
		window.addEventListener("resize", handleResize);

		return () => {
			cancelAnimationFrame(animationFrameId);
			window.removeEventListener("resize", handleResize);
		};
	}, [mounted, theme, particleCount]);

	if (!mounted) {
		return (
			<div
				className={cn("relative w-full overflow-hidden", containerClassName)}
			>
				<div className={cn("absolute inset-0", className)} />
				<div className="relative z-10">{children}</div>
			</div>
		);
	}

	return (
		<div className={cn("relative w-full overflow-hidden", containerClassName)}>
			<canvas
				ref={canvasRef}
				className={cn(
					"absolute inset-0 w-full h-full transition-opacity duration-300",
					theme === "dark" ? "opacity-30" : "opacity-20",
					className
				)}
			/>
			<div className="relative z-10">{children}</div>
		</div>
	);
}
