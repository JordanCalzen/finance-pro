"use client";
import React, { useState } from "react";
import { MobileMenu } from "@/components/layout/mobile-menu";

export default function Mobile() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<div>
			<MobileMenu
				isOpen={isMobileMenuOpen}
				onClose={() => setIsMobileMenuOpen(false)}
			/>
		</div>
	);
}
