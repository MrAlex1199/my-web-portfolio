"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const P_info = [
	{
		href: "https://my-capstone-project-4-nasa-rover-photo.onrender.com",
		label: "This web application facilitates the exploration of imagery captured by NASA's four Mars rovers: Spirit, Opportunity, Curiosity, and Perseverance. The user interface is implemented with HTML and CSS, while the backend leverages the Node.js Express framework. The application retrieves image data through NASA's public API, providing a user-friendly interface for browsing the extensive Martian photographic record.",
		handle: "ROVER-SEARCH",
		images: Array.from({ length: 6 }, (_, i) => `/webexample/Rover/R${i + 1}.jpg`),
	},
];

const link = [
	{ 
		name: "GitHub", href: "https://github.com/MrAlex1199/My-Capstone-Project-4--NASA-ROVER-Photo-by-NASA-API.git",
		icon: <Github size={20} />,
	},
  ];

export default function roversearch() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto mt-10">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-10 sm:grid-cols-1 lg:gap-16">
					{P_info.map((s , index) => (
						<Card key={index}>
						<Link href={s.href} target="_blank" className="p-4 flex flex-col items-center gap-4 group">
						  <div className="z-10 flex flex-col items-center">
							<span className="lg:text-xl font-medium text-zinc-200 group-hover:text-white">
							  {s.handle}
							</span>
							<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
							  {s.label}
							</span>
							{s.images.map((src, idx) => (
							  <img key={idx} className="mt-10 rounded" src={src} />
							))}
						  </div>
						</Link>
					  </Card>
					))}
					<nav className="my-16 animate-fade-in">
						<ul className="flex items-center justify-center gap-4">
							{link.map((item , index) => (
								<Link
									key={index}
									href={item.href}
									className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
									>
									<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{item.icon}
									</span>{"Github"}
								</Link>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
}
