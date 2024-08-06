"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const P_info = [
	{
		href: "https://projects-capstone-2-todo-list-web-app-v2.onrender.com",
		label: "This web-based application empowers users to manage their tasks efficiently. Built with HTML and CSS, it offers a responsive design that adapts seamlessly to any device, from smartphones to desktops. This user-friendly platform allows for clear organization and prioritization, boosting productivity and achieving goals. ",
		handle: "TODO-LIST",
		imgs: "/webexample/todolist.jpg",
	},
];

const link = [
	{ 
		name: "GitHub", href: "https://github.com/MrAlex1199/Projects-Capstone-2-ToDo-List-web-app---V2.git",
		icon: <Github size={20} />,
	},
  ];

export default function todolist() {
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
									<img className="mt-10 rounded duration-1000" src={s.imgs}></img>
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
