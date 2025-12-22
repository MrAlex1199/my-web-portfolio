"use client";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
	{ href: "/project", label: "Projects" },
	{ href: "/about", label: "About" },
];

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting)
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	const handleBack = () => {
		if (window.history.length > 1) {
			router.back();
		} else {
			router.push("/");
		}
	};

	return (
		<header ref={ref}>
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
					isIntersecting
						? "bg-transparent border-transparent"
						: "bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800/50 shadow-lg shadow-zinc-900/20"
				}`}
			>
				<div className="container flex items-center justify-between p-4 mx-auto max-w-6xl">
					{/* Left - Back Button */}
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={handleBack}
						className="flex items-center gap-2 px-3 py-2 rounded-full bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-700/50 transition-all duration-200"
					>
						<ArrowLeft className="w-4 h-4" />
						<span className="text-sm font-medium hidden sm:inline">Back</span>
					</motion.button>

					{/* Center - Logo/Home */}
					<Link href="/" className="absolute left-1/2 -translate-x-1/2">
						<motion.div
							whileHover={{ scale: 1.1, rotate: 5 }}
							whileTap={{ scale: 0.95 }}
							className="p-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-200"
						>
							<Home className="w-5 h-5 text-zinc-200" />
						</motion.div>
					</Link>

					{/* Right - Nav Links */}
					<nav className="flex items-center gap-1 p-1 rounded-full bg-zinc-800/50">
						{navItems.map((item) => {
							const isActive = pathname === item.href;
							return (
								<Link key={item.href} href={item.href}>
									<motion.div
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
											isActive
												? "text-white"
												: "text-zinc-400 hover:text-zinc-200"
										}`}
									>
										{isActive && (
											<motion.div
												layoutId="navbar-active"
												className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/80 to-pink-600/80"
												transition={{
													type: "spring",
													stiffness: 380,
													damping: 30,
												}}
											/>
										)}
										<span className="relative z-10">{item.label}</span>
									</motion.div>
								</Link>
							);
						})}
					</nav>
				</div>
			</motion.div>
		</header>
	);
};
