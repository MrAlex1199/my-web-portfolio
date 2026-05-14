"use client";
import { Github, ExternalLink, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Card } from "./card";
import Particles from "./particles";

interface ProjectDetailProps {
	title: string;
	description: string;
	images: string[];
	githubUrl?: string;
	liveUrl?: string;
	tech?: string[];
}

export function ProjectDetail({
	title,
	description,
	images,
	githubUrl,
	liveUrl,
	tech = [],
}: ProjectDetailProps) {
	const [currentImage, setCurrentImage] = useState(0);
	const [isGalleryOpen, setIsGalleryOpen] = useState(false);

	const nextImage = () => {
		setCurrentImage((prev) => (prev + 1) % images.length);
	};

	const prevImage = () => {
		setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
	};

	return (
		<div className="min-h-screen bg-zinc-950 relative">
			<Particles className="fixed inset-0 -z-10" quantity={50} />

			{/* Header */}
			<motion.header
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				className="fixed top-0 inset-x-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800/50"
			>
				<div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-6xl">
					<Link href="/">
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-700/50 transition-all"
						>
							<ArrowLeft className="w-4 h-4" />
							<span className="text-sm font-medium">Back</span>
						</motion.button>
					</Link>
					<div className="flex items-center gap-3">
						{githubUrl && (
							<Link href={githubUrl} target="_blank">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-700/50 transition-all"
								>
									<Github className="w-4 h-4" />
									<span className="text-sm font-medium hidden sm:inline">GitHub</span>
								</motion.button>
							</Link>
						)}
						{liveUrl && (
							<Link href={liveUrl} target="_blank">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white transition-all hover:shadow-lg hover:shadow-purple-500/25"
								>
									<ExternalLink className="w-4 h-4" />
									<span className="text-sm font-medium hidden sm:inline">Live Demo</span>
								</motion.button>
							</Link>
						)}
					</div>
				</div>
			</motion.header>

			{/* Content */}
			<div className="container mx-auto px-6 pt-28 pb-16 max-w-6xl">
				{/* Title Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="text-center mb-12"
				>
					<h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-display">
						{title}
					</h1>
					<p className="text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed">
						{description}
					</p>
					{tech.length > 0 && (
						<div className="flex flex-wrap justify-center gap-2 mt-6">
							{tech.map((t, i) => (
								<span
									key={i}
									className="px-3 py-1 text-sm bg-zinc-800/80 text-zinc-300 rounded-full border border-zinc-700/50"
								>
									{t}
								</span>
							))}
						</div>
					)}
				</motion.div>

				{/* Main Image Carousel */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="mb-12"
				>
					<Card>
						<div className="relative aspect-video overflow-hidden rounded-xl">
							<AnimatePresence mode="wait">
								<motion.div
									key={currentImage}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.3 }}
									className="relative w-full h-full cursor-pointer"
									onClick={() => setIsGalleryOpen(true)}
								>
									<Image
										src={images[currentImage]}
										alt={`${title} screenshot ${currentImage + 1}`}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
										className="object-cover"
									/>
								</motion.div>
							</AnimatePresence>

							{/* Navigation Arrows */}
							{images.length > 1 && (
								<>
									<button
										onClick={(e) => { e.stopPropagation(); prevImage(); }}
										className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-900/80 text-white hover:bg-zinc-800 transition-all"
									>
										<ChevronLeft className="w-6 h-6" />
									</button>
									<button
										onClick={(e) => { e.stopPropagation(); nextImage(); }}
										className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-900/80 text-white hover:bg-zinc-800 transition-all"
									>
										<ChevronRight className="w-6 h-6" />
									</button>
								</>
							)}

							{/* Image Counter */}
							<div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-zinc-900/80 text-zinc-300 text-sm">
								{currentImage + 1} / {images.length}
							</div>
						</div>
					</Card>
				</motion.div>

				{/* Thumbnail Grid */}
				{images.length > 1 && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
					>
						<h2 className="text-xl font-semibold text-zinc-200 mb-6 flex items-center gap-3">
							<span className="w-8 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500"></span>
							Screenshots
						</h2>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
							{images.map((img, index) => (
								<motion.button
									key={index}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onClick={() => setCurrentImage(index)}
									className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
										currentImage === index
											? "border-purple-500 shadow-lg shadow-purple-500/20"
											: "border-transparent hover:border-zinc-600"
									}`}
								>
									<Image
										src={img}
										alt={`Thumbnail ${index + 1}`}
										fill
										sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
										className="object-cover"
									/>
									{currentImage === index && (
										<div className="absolute inset-0 bg-purple-500/20" />
									)}
								</motion.button>
							))}
						</div>
					</motion.div>
				)}
			</div>

			{/* Fullscreen Gallery Modal */}
			<AnimatePresence>
				{isGalleryOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[100] bg-zinc-950/95 flex items-center justify-center"
						onClick={() => setIsGalleryOpen(false)}
					>
						<button
							onClick={() => setIsGalleryOpen(false)}
							className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition-all"
						>
							✕
						</button>
						<button
							onClick={(e) => { e.stopPropagation(); prevImage(); }}
							className="absolute left-4 p-3 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition-all"
						>
							<ChevronLeft className="w-8 h-8" />
						</button>
						<div className="relative w-[90vw] h-[80vh]">
							<Image
								src={images[currentImage]}
								alt={`${title} screenshot ${currentImage + 1}`}
								fill
								sizes="100vw"
								className="object-contain"
							/>
						</div>
						<button
							onClick={(e) => { e.stopPropagation(); nextImage(); }}
							className="absolute right-4 p-3 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition-all"
						>
							<ChevronRight className="w-8 h-8" />
						</button>
						<div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-zinc-800 text-white">
							{currentImage + 1} / {images.length}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
