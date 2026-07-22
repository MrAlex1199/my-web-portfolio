"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Particles from "./components/particles";
import { Card } from "./components/card";
import { motion, useInView } from "framer-motion";
import {
	ArrowRight,
	Github,
	Linkedin,
	Mail,
	Code2,
	Database,
	Globe,
	ChevronDown,
	Sparkles,
	Cloud,
	Cpu,
	Palette,
} from "lucide-react";

// Data
const Projects = [
	{
		href: "/cosmosapod",
		label: "Online",
		handle: "COSMOS-APOD",
		img: "/webexample/cosmosapod/R1.jpg",
		description: "เว็บไซต์ค้นหารูปภาพจากนาซ่า",
		tech: ["EJS", "Node.js", "Express", "NASA API", "TypeScript"],
		featured: true,
	},
	{
		href: "/ifixpc",
		label: "Online",
		handle: "IFIX-PC",
		img: "/webexample/IPC/IF1.jpg",
		description: "เว็บไซต์บริการซ่อมคอมพิวเตอร์ครบวงจร",
		tech: ["Next.js", "Tailwind"],
		featured: false,
	},
	{
		href: "/aitravelitnerary",
		label: "Online",
		handle: "AI Travel Itinerary",
		img: "/webexample/AITravel/A1.jpg",
		description: "แอพวางแผนการเดินทางอัจฉริยะ ใช้ AI สร้างกำหนดการท่องเที่ยวส่วนบุคคล",
		tech: ["Next.js", "Google Gemini API", "TypeScript"],
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
	{
		href: "/SmartRentShareOG",
		label: "Online",
		handle: "SmartRentShareOG",
		img: "/webexample/SmartRentShareOG/01.jpg",
		description: "แพลตฟอร์มให้เช่า-ยืมของระหว่างนักศึกษา ที่รองรับทั้ง LINE LIFF และ Web Browser",
		tech: ["Next.js", "NestJS", "MongoDB"],
		featured: true,
	},
	{
		href: "/FixMate",
		label: "In Development",
		handle: "FixMate_AI",
		img: "/webexample/FixMate/01.jpg",
		description: "แอปพลิเคชั่นให้คำแนะนำการซ่อมรถยนต์และมอเตอร์ไซค์ด้วย AI แบบครบวงจร",
		tech: ["Flutter", "AI Google Gemini API", "PostgreSQL", "Dart"],
		featured: true,
	}
];

const skillCategories = [
    {
        title: "Frontend",
        icon: <Globe className="w-5 h-5" />,
        color: "from-blue-500 to-cyan-500",
        skills: [
            { name: "React / Next.js", level: 100 },
            { name: "TypeScript", level: 100 },
            { name: "TailwindCSS", level: 100 },
            { name: "HTML5 / CSS3", level: 100 },
			{ name: "Flutter", level: 70 },
        ],
    },
    {
        title: "Backend",
        icon: <Code2 className="w-5 h-5" />,
        color: "from-purple-500 to-pink-500",
        skills: [
            { name: "Node.js / Express", level: 100 },
            { name: "RESTful APIs Design", level: 100 },
			{ name: "JavaScript", level: 100 },
            { name: "EJS Templating", level: 100 },
            { name: "Python (AI Scripting)", level: 80 },
        ],
    },
    {
        title: "Database",
        icon: <Database className="w-5 h-5" />,
        color: "from-green-500 to-emerald-500",
        skills: [
            { name: "PostgreSQL", level: 100 },
            { name: "MongoDB", level: 100 },
            { name: "Vector Databases", level: 85 },
			{ name: "Redis (Caching)", level: 70 }
        ],
    },
    {
        title: "AI & Intelligent Systems",
        icon: <Sparkles className="w-5 h-5" />,
        color: "from-cyan-400 to-emerald-500",
        skills: [
            { name: "Prompt Engineering", level: 95 },
            { name: "RAG Architecture", level: 85 },
            { name: "Ollama / Local LLMs", level: 90 },
            { name: "LangChain / CrewAI", level: 80 },
        ],
    },
    {
        title: "Cloud & Infrastructure",
        icon: <Cloud className="w-5 h-5" />,
        color: "from-yellow-500 to-yellow-600",
        skills: [
            { name: "Vercel / Railway / Render", level: 100 },
            { name: "Supabase / Firebase", level: 95 },
            { name: "Docker & Containers", level: 85 },
            { name: "CI/CD & Git", level: 90 },
        ],
    },
    {
        title: "AI Productivity Tools",
        icon: <Cpu className="w-5 h-5" />,
        color: "from-indigo-500 to-purple-600",
        skills: [
            { name: "Cursor / Copilot / Antigravity / Windsurf", level: 100 },
			{ name: "Claude / GPT Canvas / Google AI Studio / Grok AI / Claude Code", level: 95 },
            { name: "v0.dev / Lovable / Leonardo.ai", level: 90 },
			{ name: "Google Gemini API", level: 90},
        ],
    },
    {
        title: "Design & Creative",
        icon: <Palette className="w-5 h-5" />,
        color: "from-rose-500 to-orange-500",
        skills: [
            { name: "Figma", level: 90 },
            { name: "Google Stitch", level: 90 },
            { name: "Canva / Procreate", level: 90 },
        ],
    },
];

const socials = [
	{ icon: <Github className="w-5 h-5" />, href: "https://github.com/MrAlex1199", label: "GitHub" },
	{ icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/krittapas-thipsangwong-6707a3319/", label: "LinkedIn" },
	{ icon: <Mail className="w-5 h-5" />, href: "mailto:krittapasthipsang@gmail.com", label: "Email" },
];

const navItems = [
	{ href: "#home", label: "Home" },
	{ href: "#projects", label: "Projects" },
	{ href: "#about", label: "About" },
];

// Section wrapper with animation
function Section({ children, id, className = "" }: { children: React.ReactNode; id: string; className?: string }) {
	const ref = React.useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id={id} ref={ref} className={className}>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				{children}
			</motion.div>
		</section>
	);
}

export default function Home() {
	const [activeSection, setActiveSection] = useState("home");
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);

			const sections = navItems.map((item) => item.href.slice(1));
			for (const section of sections.reverse()) {
				const el = document.getElementById(section);
				if (el && window.scrollY >= el.offsetTop - 200) {
					setActiveSection(section);
					break;
				}
			}
		};

		// Throttle scroll events for better performance
		let rafId: number | null = null;
		const throttledScroll = () => {
			if (rafId) return;
			rafId = requestAnimationFrame(() => {
				handleScroll();
				rafId = null;
			});
		};

		window.addEventListener("scroll", throttledScroll, { passive: true });
		return () => {
			if (rafId) cancelAnimationFrame(rafId);
			window.removeEventListener("scroll", throttledScroll);
		};
	}, []);

	const scrollToSection = (href: string) => {
		const el = document.getElementById(href.slice(1));
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		}
	};

	const featuredProjects = Projects.filter((p) => p.featured);
	const otherProjects = Projects.filter((p) => !p.featured);

	return (
		<div className="relative bg-zinc-950">
			{/* Navigation */}
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
					scrolled ? "bg-zinc-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
				}`}
			>
				<div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-6xl">
					<motion.span
						whileHover={{ scale: 1.05 }}
						className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 cursor-pointer"
						onClick={() => scrollToSection("#home")}
					>
						KT
					</motion.span>
					<div className="flex items-center gap-1 p-1 rounded-full bg-zinc-800/50">
						{navItems.map((navItem) => (
							<button
								key={navItem.href}
								onClick={() => scrollToSection(navItem.href)}
								className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
									activeSection === navItem.href.slice(1)
										? "text-white"
										: "text-zinc-400 hover:text-zinc-200"
								}`}
							>
								{activeSection === navItem.href.slice(1) && (
									<motion.div
										layoutId="nav-active"
										className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/80 to-pink-600/80"
										transition={{ type: "spring", stiffness: 380, damping: 30 }}
									/>
								)}
								<span className="relative z-10">{navItem.label}</span>
							</button>
						))}
					</div>
				</div>
			</motion.nav>

			{/* Particles Background */}
			<Particles className="fixed inset-0 z-0 pointer-events-none" quantity={50} />

			{/* Hero Section */}
			<section
				id="home"
				className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950"
			>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center px-6"
				>
					<p className="text-zinc-500 text-lg mb-4">สวัสดี, ผมคือ</p>

					<div className="relative">
						<div className="absolute -top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
						<h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-white to-zinc-200 font-display">
							Krittapas
						</h1>
						<div className="absolute -bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
					</div>

					<p className="mt-8 text-lg sm:text-xl text-zinc-400 max-w-md mx-auto">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
							Full-Stack Developer
						</span>{" "}
						ที่หลงใหลในการสร้างประสบการณ์เว็บที่สวยงาม
					</p>

					<div className="flex flex-wrap items-center justify-center gap-4 mt-10">
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => scrollToSection("#projects")}
							className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all"
						>
							ดูผลงาน
							<ArrowRight className="w-4 h-4" />
						</motion.button>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => scrollToSection("#about")}
							className="px-6 py-3 border border-zinc-700 text-zinc-300 font-medium rounded-full hover:bg-zinc-800/50 transition-all"
						>
							เกี่ยวกับผม
						</motion.button>
					</div>

					<div className="flex justify-center gap-4 mt-12">
						{socials.map((social, index) => (
							<motion.a
								key={index}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.1, y: -2 }}
								className="p-3 rounded-full bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-700/50 transition-all"
								aria-label={social.label}
							>
								{social.icon}
							</motion.a>
						))}
					</div>
				</motion.div>

				{/* Scroll indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1 }}
					className="absolute bottom-8"
				>
					<motion.button
						onClick={() => scrollToSection("#projects")}
						animate={{ y: [0, 8, 0] }}
						transition={{ duration: 1.5, repeat: Infinity }}
						className="text-zinc-500 hover:text-zinc-300 transition-colors"
					>
						<ChevronDown className="w-8 h-8" />
					</motion.button>
				</motion.div>
			</section>

			{/* Projects Section */}
			<Section id="projects" className="py-24 bg-zinc-950">
				<div className="container mx-auto px-6 max-w-7xl">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-white mb-4 font-display sm:text-5xl">
							My Projects
						</h2>
						<p className="text-zinc-400 max-w-2xl mx-auto text-lg">
							ผลงานที่ผมได้สร้างสรรค์ขึ้นมา ทั้งโปรเจกต์ส่วนตัวและงานจริง
						</p>
					</div>

					{/* Featured Projects */}
					<div className="mb-16">
						<h3 className="text-2xl font-semibold text-zinc-200 mb-8 flex items-center gap-3">
							<span className="w-8 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500"></span>
							Featured Projects
						</h3>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							{featuredProjects.map((project, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
								>
									<Card>
										<Link href={project.href} className="block group">
											<div className="relative overflow-hidden">
												<Image
													src={project.img}
													alt={project.handle}
													width={800}
													height={450}
													sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
													priority={index < 2}
													className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
												/>
												<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
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
												<h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
													{project.handle}
												</h4>
												<p className="text-zinc-400 text-sm mb-4">{project.description}</p>
												<div className="flex flex-wrap gap-2">
													{project.tech.map((t, i) => (
														<span key={i} className="px-2 py-1 text-xs bg-zinc-800 text-zinc-300 rounded-md">
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
					</div>

					{/* Other Projects */}
					<div>
						<h3 className="text-2xl font-semibold text-zinc-200 mb-8 flex items-center gap-3">
							<span className="w-8 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500"></span>
							All Projects
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{otherProjects.map((project, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
								>
									<Card>
										<Link href={project.href} className="block group">
											<div className="relative overflow-hidden rounded-t-xl">
												<Image
													src={project.img}
													alt={project.handle}
													width={400}
													height={250}
													sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
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
												<h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
													{project.handle}
												</h4>
												<p className="text-zinc-400 text-sm mb-3">{project.description}</p>
												<div className="flex flex-wrap gap-1.5">
													{project.tech.map((t, i) => (
														<span key={i} className="px-2 py-0.5 text-xs bg-zinc-800/80 text-zinc-400 rounded">
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
					</div>
				</div>
			</Section>

			{/* About Section */}
			<Section id="about" className="py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
				<div className="container mx-auto px-6 max-w-6xl">
					<div className="text-center mb-16">
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

						<h2 className="text-4xl font-bold text-white mb-4 font-display sm:text-5xl">About Me</h2>
						<p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
							Leveraging 4 years of experience as a Computer Repair Technician, I'm currently expanding my
							skillset to become a{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
								Full-Stack Web Developer
							</span>
							. This transition allows me to combine my technical knowledge with a passion for creating new
							and engaging web experiences.
						</p>

						{/* Social Links */}
						<div className="flex justify-center gap-4 mt-8">
							{socials.map((social, index) => (
								<motion.a
									key={index}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ scale: 1.05 }}
									className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 transition-all"
								>
									{social.icon}
									<span className="text-sm font-medium">{social.label}</span>
								</motion.a>
							))}
						</div>
					</div>

					{/* Skills */}
					<div className="mb-16">
						<h3 className="text-2xl font-semibold text-zinc-200 mb-8 text-center">Skills & Technologies</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{skillCategories.map((category, catIndex) => (
								<motion.div
									key={catIndex}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: catIndex * 0.1 }}
								>
									<Card>
										<div className="p-6">
											<div className="flex items-center gap-3 mb-6">
												<div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
													{category.icon}
												</div>
												<h4 className="text-lg font-semibold text-white">{category.title}</h4>
											</div>
											<div className="space-y-4">
												{category.skills.map((skill, skillIndex) => (
													<div key={skillIndex}>
														<div className="flex justify-between mb-1">
															<span className="text-sm font-medium text-zinc-300">{skill.name}</span>
															<span className="text-sm text-zinc-500">{skill.level}%</span>
														</div>
														<div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
															<motion.div
																initial={{ width: 0 }}
																whileInView={{ width: `${skill.level}%` }}
																viewport={{ once: true }}
																transition={{ duration: 1, delay: skillIndex * 0.1 }}
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
					</div>

					{/* Journey */}
					<div>
						<h3 className="text-2xl font-semibold text-zinc-200 mb-8 text-center">Journey</h3>
						<div className="max-w-2xl mx-auto">
							<Card>
								<div className="p-6">
									<div className="relative border-l-2 border-zinc-700 pl-6 space-y-8">
										<div className="relative">
											<div className="absolute -left-[29px] w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
											<span className="text-sm text-purple-400 font-medium">ปัจจุบัน</span>
											<h4 className="text-lg font-semibold text-white mt-1">กำลังศึกษาที่มหาวิทยาลัยธุรกิจบัณฑิต</h4>
											<p className="text-zinc-400 text-sm mt-1 mb-3">หลักสูตรเทคโนโลยีสารสนเทศ Information Systems for Digital Business</p>
											<h4 className="text-lg font-semibold text-white mt-1">Full-Stack Web Developer</h4>
											<p className="text-zinc-400 text-sm mt-1">กำลังพัฒนาทักษะและสร้างโปรเจกต์ใหม่ๆ</p>
										</div>
										<div className="relative">
											<div className="absolute -left-[29px] w-4 h-4 rounded-full bg-zinc-600"></div>
											<span className="text-sm text-zinc-500 font-medium">4 ปี</span>
											<h4 className="text-lg font-semibold text-white mt-1">Computer Repair Technician</h4>
											<p className="text-zinc-400 text-sm mt-1">ซ่อมและดูแลระบบคอมพิวเตอร์</p>
										</div>
									</div>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</Section>

			{/* Footer */}
			<footer className="py-8 bg-zinc-950 border-t border-zinc-800">
				<div className="container mx-auto px-6 text-center">
					<p className="text-zinc-500 text-sm">
						© 2026 Krittapas. Built with{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
							Next.js
						</span>{" "}
						&{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
							Tailwind CSS
						</span>
					</p>
				</div>
			</footer>
		</div>
	);
}
