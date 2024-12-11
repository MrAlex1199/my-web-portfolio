"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const router = useRouter(); // ใช้ useRouter

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	const handleBack = () => {
		if (window.history.length > 1) {
			// ถ้ามีประวัติการนำทาง (history) ให้ย้อนกลับ
			router.back();
		} else {
			// ถ้าไม่มีประวัติ ให้ไปที่หน้าอื่นๆ (e.g. /project)
			router.push("/project");
		}
	};

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						<Link
							href="/project"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Projects
						</Link>
						<Link
							href="/contact"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Contact
						</Link>
						<Link
							href="/about"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							About Me
						</Link>
					</div>

					{/* เปลี่ยนลิงก์ ArrowLeft */}
					<button
						onClick={handleBack}
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6" />
					</button>
				</div>
			</div>
		</header>
	);
};
