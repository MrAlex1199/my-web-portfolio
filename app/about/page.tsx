"use client";
import React, { useState } from "react";
import { Github, Mail, Linkedin, Code2, Database, Wrench, Globe, Download, QrCode, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { motion } from "framer-motion";

const skillCategories = [
	{
		title: "Frontend",
		icon: <Globe className="w-5 h-5" />,
		color: "from-blue-500 to-cyan-500",
		skills: [
			{ name: "HTML/CSS", level: 100 },
			{ name: "TailwindCSS", level: 100 },
			{ name: "JavaScript", level: 100 },
			{ name: "React", level: 90 },
			{ name: "Next.js", level: 70 },
			{ name: "TypeScript", level: 60 },
		],
	},
	{
		title: "Backend",
		icon: <Code2 className="w-5 h-5" />,
		color: "from-purple-500 to-pink-500",
		skills: [
			{ name: "Node.js", level: 80 },
			{ name: "Express", level: 80 },
			{ name: "EJS", level: 100 },
			{ name: "API", level: 80 },
		],
	},
	{
		title: "Database",
		icon: <Database className="w-5 h-5" />,
		color: "from-green-500 to-emerald-500",
		skills: [
			{ name: "PostgreSQL", level: 90 },
			{ name: "MongoDB", level: 90 },
			{ name: "Firebase", level: 80 },
		],
	},
	{
		title: "Tools & Others",
		icon: <Wrench className="w-5 h-5" />,
		color: "from-orange-500 to-yellow-500",
		skills: [
			{ name: "Git", level: 80 },
			{ name: "Bootstrap", level: 80 },
			{ name: "jQuery", level: 80 },
		],
	},
];

const links = [
	{
		name: "GitHub",
		href: "https://github.com/MrAlex1199",
		icon: <Github size={24} />,
		color: "hover:bg-zinc-700",
	},
	{
		name: "Email",
		href: "mailto:t57havytanks@gmail.com",
		icon: <Mail size={24} />,
		color: "hover:bg-red-500/20 hover:text-red-400",
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/krittapas-thipsangwong-6707a3319/",
		icon: <Linkedin size={24} />,
		color: "hover:bg-blue-500/20 hover:text-blue-400",
	},
];

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.1 },
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

export default function About() {
	const [showQr, setShowQr] = useState(false);

	return (
		<div className="min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container px-6 mx-auto pt-24 pb-16 max-w-6xl">
				{/* Hero Section */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					{/* Avatar */}
					<div className="relative inline-block mb-6">
						<div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 p-1">
							<div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center">
								<span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
									KT
								</span>
							</div>
						</div>
						<span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-zinc-900"></span>
					</div>

					<h1 className="text-4xl font-bold text-white mb-2 font-display sm:text-5xl">
						About Me
					</h1>
					<p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
						Leveraging 4 years of experience as a Computer Repair Technician,
						I'm currently expanding my skillset to become a{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
							Full-Stack Web Developer
						</span>
						. This transition allows me to combine my technical knowledge with a
						passion for creating new and engaging web experiences.
					</p>

					{/* Social Links */}
					<div className="flex justify-center gap-4 mt-8">
						{links.map((link, index) => (
							<Link
								key={index}
								href={link.href}
								target="_blank"
								className={`flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 text-zinc-300 transition-all duration-300 ${link.color}`}
							>
								{link.icon}
								<span className="text-sm font-medium">{link.name}</span>
							</Link>
						))}
					</div>

					{/* Actions: Download Resume & Portfolio QR Code */}
					<div className="flex flex-wrap items-center justify-center gap-4 mt-6">
						<motion.a
							href="/resume/Krittapas_Resume.pdf"
							download="Krittapas_Resume.pdf"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
							className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group"
						>
							<Download className="w-4 h-4 group-hover:animate-bounce" />
							Download Resume
						</motion.a>

						<motion.button
							type="button"
							onClick={() => setShowQr(!showQr)}
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
							className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border font-medium transition-all duration-300 ${
								showQr
									? "border-purple-500/80 bg-purple-500/20 text-white shadow-lg shadow-purple-500/20"
									: "border-zinc-700 bg-zinc-800/60 text-zinc-300 hover:bg-zinc-700/60 hover:text-white hover:border-zinc-500"
							}`}
						>
							<QrCode className="w-4 h-4 text-purple-400" />
							<span>{showQr ? "ซ่อน QR Code" : "Portfolio QR Code"}</span>
						</motion.button>
					</div>

					{/* QR Code Card */}
					{showQr && (
						<motion.div
							initial={{ opacity: 0, scale: 0.9, y: 10 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							transition={{ duration: 0.3 }}
							className="mt-8 flex justify-center"
						>
							<div className="relative p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-xl shadow-2xl max-w-xs w-full flex flex-col items-center">
								<div className="absolute -top-3 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-[11px] font-medium text-white shadow-sm flex items-center gap-1">
									<Sparkles className="w-3 h-3" />
									<span>Scan on Mobile</span>
								</div>

								<div className="p-3 bg-white rounded-xl shadow-inner mt-2 mb-4">
									<img
										src="/portfolio-qr.svg"
										alt="Portfolio QR Code"
										className="w-44 h-44 object-contain rounded-lg"
									/>
								</div>

								<p className="text-zinc-200 text-sm font-medium text-center">
									สแกนเพื่อเข้าชมเว็บบนมือถือ
								</p>

								<a
									href="https://my-web-portfolio-beta.vercel.app/"
									target="_blank"
									rel="noopener noreferrer"
									className="mt-2 text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors break-all text-center"
								>
									<span>my-web-portfolio-beta.vercel.app</span>
									<ExternalLink className="w-3 h-3 shrink-0" />
								</a>
							</div>
						</motion.div>
					)}
				</motion.div>

				{/* Skills Section */}
				<motion.div
					variants={container}
					initial="hidden"
					animate="show"
					className="mb-16"
				>
					<h2 className="text-2xl font-semibold text-zinc-200 mb-8 text-center">
						Skills & Technologies
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{skillCategories.map((category, catIndex) => (
							<motion.div key={catIndex} variants={item}>
								<Card>
									<div className="p-6">
										<div className="flex items-center gap-3 mb-6">
											<div
												className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}
											>
												{category.icon}
											</div>
											<h3 className="text-lg font-semibold text-white">
												{category.title}
											</h3>
										</div>
										<div className="space-y-4">
											{category.skills.map((skill, skillIndex) => (
												<div key={skillIndex}>
													<div className="flex justify-between mb-1">
														<span className="text-sm font-medium text-zinc-300">
															{skill.name}
														</span>
														<span className="text-sm text-zinc-500">
															{skill.level}%
														</span>
													</div>
													<div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
														<motion.div
															initial={{ width: 0 }}
															animate={{ width: `${skill.level}%` }}
															transition={{
																duration: 1,
																delay: catIndex * 0.2 + skillIndex * 0.1,
																ease: "easeOut",
															}}
															className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
														/>
													</div>
												</div>
											))}
										</div>
									</div>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Experience Timeline */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
					className="mb-16"
				>
					<h2 className="text-2xl font-semibold text-zinc-200 mb-8 text-center">
						Journey
					</h2>
					<div className="max-w-2xl mx-auto">
						<Card>
							<div className="p-6">
								<div className="relative border-l-2 border-zinc-700 pl-6 space-y-8">
									<div className="relative">
										<div className="absolute -left-[29px] w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
										<span className="text-sm text-purple-400 font-medium">
											ปัจจุบัน
										</span>
										<h4 className="text-lg font-semibold text-white mt-1">
											Full-Stack Web Developer
										</h4>
										<p className="text-zinc-400 text-sm mt-1">
											กำลังพัฒนาทักษะและสร้างโปรเจกต์ใหม่ๆ
										</p>
									</div>
									<div className="relative">
										<div className="absolute -left-[29px] w-4 h-4 rounded-full bg-zinc-600"></div>
										<span className="text-sm text-zinc-500 font-medium">
											4 ปี
										</span>
										<h4 className="text-lg font-semibold text-white mt-1">
											Computer Repair Technician
										</h4>
										<p className="text-zinc-400 text-sm mt-1">
											ซ่อมและดูแลระบบคอมพิวเตอร์
										</p>
									</div>
								</div>
							</div>
						</Card>
					</div>
				</motion.div>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8 }}
					className="text-center"
				>
					<p className="text-zinc-500 mb-4">ดูผลงานของผม</p>
					<Link
						href="/project"
						className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
					>
						Projects
						<svg
							className="w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</Link>
				</motion.div>
			</div>
		</div>
	);
}
