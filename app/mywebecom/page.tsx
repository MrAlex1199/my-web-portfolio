"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const P_info = [
	{
		href: "https://github.com/MrAlex1199/MrAlexMY-Web-ECom.git",
		label: "This online retail platform caters to civilians seeking high-quality military-grade clothing and equipment. Built with React and Tailwind CSS for a dynamic and user-friendly experience, the website offers a comprehensive selection of products.  The secure login system, powered by a MongoDB database, ensures a seamless and trustworthy shopping experience.",
		handle: "MY-Web-ECom",
		imgs1: "/webexample/Ecom/home.jpg",
		imgs2: "/webexample/Ecom/about.jpg",
		imgs3: "/webexample/Ecom/cart.jpg",
		imgs4: "/webexample/Ecom/shop.jpg",
	},
];

const nav = [
	{ 
		name: "GitHub", href: "https://github.com/MrAlex1199/MrAlexMY-Web-ECom.git",
		icon: <Github size={20} />,
	},
  ];

export default function mywebecom() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto mt-10">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-10 sm:grid-cols-1 lg:gap-16">
					{P_info.map((s , index) => (
						<Card key={index}>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-40  md:p-16"
							>
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
									<img className="mt-10 rounded duration-1000" src={s.imgs1}></img>
									<img className="mt-10 rounded duration-1000" src={s.imgs2}></img>
									<img className="mt-10 rounded duration-1000" src={s.imgs3}></img>
									<img className="mt-10 rounded duration-1000" src={s.imgs4}></img>
								</div>
							</Link>
						</Card>
					))}
					<nav className="my-16 animate-fade-in">
						<ul className="flex items-center justify-center gap-4">
							{nav.map((item , index) => (
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
