"use client";
import React, { useState } from "react";
import { Header } from "./layout/header";

export default function HeaderMobile() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	return (
		<div>
			<Header toggleMobileMenu={() => setIsMobileMenuOpen(true)} />
		</div>
	);
}
