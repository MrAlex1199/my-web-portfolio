"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { motion } from "framer-motion";

const Projects = [
	{
		href: "/roversearch",
		label: "Offline",
		handle: "ROVER-SEARCH",
		img: "/webexample/Rover/R1.jpg",
		description: "ระบบค้นหาข้อมูลอัจฉริยะ พร้อม UI ที่ทันสมัย",
		tech: ["React", "API", "Search"],
		featured: true,
	},
	{
		href: "/ifixpc",
		label: "Online",
		handle: "IFIX-PC",
		img: "/webexample/IPC/IF1.jpg",
		description: "เว็บไซต์บริการซ่อมคอมพิวเตอร์ครบวงจร",
		tech: ["Next.js", "Tailwind"],
		featured: true,
	},
	{
		href: "/mywebecom",
		label: "Online",
		handle: "MY-Web-ECom",
		img: "/webexample/Ecom/E1.jpg",
		description: "ร้านค้าออนไลน์ E-Commerce เต็มรูปแบบ",
		tech: ["React", "Node.js", "MongoDB"],
		featured: false,
	},
	{
		href: "/nextjsresume",
		label: "Online",
		handle: "NEXT-JS-RESUME",
		img: "/webexample/NEXTPortfolio/NT1.jpg",
		description: "Portfolio สร้างด้วย Next.js แบบ Modern",
		tech: ["Next.js", "TypeScript"],
		featured: false,
	},
	{
		href: "/bookreview",
		label: "GitHub",
		handle: "BOOK-REVIEW",
		img: "/webexample/Book/N1.jpg",
		description: "แพลตฟอร์มรีวิวหนังสือสำหรับนักอ่าน",
		tech: ["React", "Firebase"],
		featured: false,
	},
	{
		href: "/todolist",
		label: "Online",
		handle: "TODO-LIST",
		img: "/webexample/ToDo/todolist.jpg",
		description: "แอพจัดการงานที่ใช้งานง่าย",
		tech: ["React", "LocalStorage"],
		featured: false,
	},
	{
		href: "/homedaddy",
		label: "GitHub",
		handle: "Homedaddy",
		img: "/webexample/Home/H1.jpg",
		description: "เว็บไซต์บริการดูแลบ้านครบวงจร",
		tech: ["HTML", "CSS", "JavaScript"],
		featured: false,
	},
	{
		href: "/plant",
		label: "GitHub",
		handle: "PlanetPlant",
		img: "/webexample/Plant/1.jpg",
		description: "เว็บไซต์ขายต้นไม้และอุปกรณ์จัดสวน",
		tech: ["React", "Styled Components"],
		featured: false,
	},
];

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

export default function Project() {
	const featuredProjects = Projects.filter((p) => p.featured);
	const otherProjects = Projects.filter((p) => !p.featured);

	return (
		<div className="min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container px-6 mx-auto pt-24 pb-16 max-w-7xl">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<h1 className="text-4xl font-bold text-white mb-4 font-display sm:text-5xl">
						My Projects
					</h1>
					<p className="text-zinc-400 max-w-2xl mx-auto text-lg">
						ผลงานที่ผมได้สร้างสรรค์ขึ้นมา ทั้งโปรเจกต์ส่วนตัวและงานจริง
					</p>
				</motion.div>

				{/* Featured Projects */}
				<motion.div
					variants={container}
					initial="hidden"
					animate="show"
					className="mb-16"
				>
					<h2 className="text-2xl font-semibold text-zinc-200 mb-8 flex items-center gap-3">
						<span className="w-8 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500"></span>
						Featured Projects
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{featuredProjects.map((project, index) => (
							<motion.div key={index} variants={item}>
								<Card>
									<Link href={project.href} className="block group">
										<div className="relative overflow-hidden">
											<Image
												src={project.img}
												alt={project.handle}
												width={800}
												height={450}
												className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
											<span
												className={`absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full ${
													project.label === "Online"
														? "bg-green-500/20 text-green-400 border border-green-500/30"
														: "bg-purple-500/20 text-purple-400 border border-purple-500/30"
												}`}
											>
												{project.label}
											</span>
										</div>
										<div className="p-6">
											<h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
												{project.handle}
											</h3>
											<p className="text-zinc-400 text-sm mb-4 line-clamp-2">
												{project.description}
											</p>
											<div className="flex flex-wrap gap-2">
												{project.tech.map((t, i) => (
													<span
														key={i}
														className="px-2 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-md"
													>
														{t}
													</span>
												))}
											</div>
										</div>
									</Link>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Other Projects */}
				<motion.div
					variants={container}
					initial="hidden"
					animate="show"
				>
					<h2 className="text-2xl font-semibold text-zinc-200 mb-8 flex items-center gap-3">
						<span className="w-8 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500"></span>
						All Projects
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{otherProjects.map((project, index) => (
							<motion.div key={index} variants={item}>
								<Card>
									<Link href={project.href} className="block group">
										<div className="relative overflow-hidden rounded-t-xl">
											<Image
												src={project.img}
												alt={project.handle}
												width={400}
												height={250}
												className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-70" />
											<span
												className={`absolute top-3 right-3 px-2 py-0.5 text-xs font-medium rounded-full ${
													project.label === "Online"
														? "bg-green-500/20 text-green-400 border border-green-500/30"
														: "bg-purple-500/20 text-purple-400 border border-purple-500/30"
												}`}
											>
												{project.label}
											</span>
										</div>
										<div className="p-5">
											<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
												{project.handle}
											</h3>
											<p className="text-zinc-400 text-sm mb-3 line-clamp-2">
												{project.description}
											</p>
											<div className="flex flex-wrap gap-1.5">
												{project.tech.map((t, i) => (
													<span
														key={i}
														className="px-2 py-0.5 text-xs bg-zinc-800/80 text-zinc-400 rounded"
													>
														{t}
													</span>
												))}
											</div>
										</div>
									</Link>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Footer CTA */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8 }}
					className="text-center mt-20"
				>
					<p className="text-zinc-500 mb-4">สนใจร่วมงานกันไหม?</p>
					<Link
						href="/about"
						className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
					>
						เกี่ยวกับผม
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
