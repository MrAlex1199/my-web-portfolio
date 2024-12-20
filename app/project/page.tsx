"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const Projects = [
	{
		href: "/roversearch",
		label: "Online",
		handle: "ROVER-SEARCH",
	},
	{
		href: "/ifixpc",
		label: "online",
		handle: "IFIX-PC",
	},
	{
		href: "/mywebecom",
		label: "OnGithub",
		handle: "MY-Web-ECom",

	},
	{
		href: "/nextjsresume",
		label: "online",
		handle: "NEXT-JS-RESUME",
	},
	{
		href: "/bookreview",
		label: "OnGithub",
		handle: "BOOK-REVIEW",
	},
	{
		href: "/todolist",
		label: "online",
		handle: "TODO-LIST",
	},
	{
		href: "/homedaddy",
		label: "OnGithub",
		handle: "Homedaddy",
	},
	{
		href: "/plant",
		label: "OnGithub",
		handle: "PlanetPlant",
	},
];

export default function Project() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto mt-10">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{Projects.map((s , index) => (
						<Card key={index}>
							<Link
								href={s.href}
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
