"use client";
// import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { CardAbout } from "../components/cardabout";

const socials = [
	{
		label: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because",
		handle: "About Me",
	},
];

const Myskill = [
	{
		label: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because",
		handle: "My Skill",
		HTML: "100%",
		CSS: "90%",
		JavaScript: "80%",
		TypeScript: "60%",
		BootStrap: "80%",
		Reactjs:"90%",
		Nextjs:"70%",
		jQuery: "80%",
		Nodejs: "80%",
		Expressjs: "80%",
		EJS: "80%",
		Git: "80%",
		API: "80%",
		PostgreSQL: "90%",
		MongoDB: "90%",
		Firebase: "80%",
	},
];


  export default function Example() {
	return (
	  <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
		<Navigation />
		<div className="container flex items-center justify-center min-h-screen px-4 mx-auto mt-20">
		  <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 lg:gap-16">
			{socials.map((s) => (
			  <CardAbout>
				<div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16">
				  <div className="z-10 flex flex-col items-center">
					<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
					  {s.handle}
					</span>
					<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
					  {s.label}
					</span>
							<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 lg:gap-16">
							{Myskill.map((s) => (
							<CardAbout>
								<div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 md:p-16">
									<div className="z-10 flex flex-col w-full items-center">
										<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
										</span>
										<span className="mt-4 text-sm text-center w-full duration-1000 text-zinc-400 group-hover:text-zinc-200">
											<div className="flex justify-between mb-1">
												<span className="text-base font-medium text-blue-700 dark:text-white">HTML</span>
												<span className="text-sm font-medium text-blue-700 dark:text-white">{s.HTML}</span>
											</div>
											<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
												<div className="bg-blue-600 h-2.5 rounded-full" style={{ width: s.HTML }}></div>
											</div>
											<div className="flex justify-between mb-1">
												<span className="text-base font-medium text-blue-700 dark:text-white">CSS</span>
												<span className="text-sm font-medium text-blue-700 dark:text-white">{s.CSS}</span>
											</div>
											<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
												<div className="bg-blue-600 h-2.5 rounded-full" style={{ width: s.CSS }}></div>
											</div>
											<div className="flex justify-between mb-1">
												<span className="text-base font-medium text-blue-700 dark:text-white">JavaScript</span>
												<span className="text-sm font-medium text-blue-700 dark:text-white">{s.JavaScript}</span>
											</div>
											<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
												<div className="bg-blue-600 h-2.5 rounded-full" style={{ width: s.JavaScript }}></div>
											</div>
											<div className="flex justify-between mb-1">
												<span className="text-base font-medium text-blue-700 dark:text-white">TypeScript</span>
												<span className="text-sm font-medium text-blue-700 dark:text-white">{s.TypeScript}</span>
											</div>
											<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
												<div className="bg-blue-600 h-2.5 rounded-full" style={{ width: s.TypeScript }}></div>
											</div>
											<div className="flex justify-between mb-1">
												<span className="text-base font-medium text-blue-700 dark:text-white">BootStrap</span>
												<span className="text-sm font-medium text-blue-700 dark:text-white">{s.BootStrap}</span>
											</div>
											<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
												<div className="bg-blue-600 h-2.5 rounded-full" style={{ width: s.BootStrap }}></div>
											</div>
											<div className="flex justify-between mb-1">
												<span className="text-base font-medium text-blue-700 dark:text-white">Nodejs</span>
												<span className="text-sm font-medium text-blue-700 dark:text-white">{s.Nodejs}</span>
											</div>
											<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
												<div className="bg-blue-600 h-2.5 rounded-full" style={{ width: s.Nodejs }}></div>
											</div>
											<div className="flex justify-between mb-1">
												<span className="text-base font-medium text-blue-700 dark:text-white">Nextjs</span>
												<span className="text-sm font-medium text-blue-700 dark:text-white">{s.Nextjs}</span>
											</div>
											<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
												<div className="bg-blue-600 h-2.5 rounded-full" style={{ width: s.Nextjs }}></div>
											</div>
											<div className="flex justify-between mb-1">
												<span className="text-base font-medium text-blue-700 dark:text-white">jQuery</span>
												<span className="text-sm font-medium text-blue-700 dark:text-white">{s.jQuery}</span>
											</div>
											<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
												<div className="bg-blue-600 h-2.5 rounded-full" style={{ width: s.jQuery }}></div>
											</div>
											<div className="flex justify-between mb-1">
												<span className="text-base font-medium text-blue-700 dark:text-white">Expressjs</span>
												<span className="text-sm font-medium text-blue-700 dark:text-white">{s.Expressjs}</span>
											</div>
											<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
												<div className="bg-blue-600 h-2.5 rounded-full" style={{ width: s.Expressjs }}></div>
											</div>
											<div className="flex justify-between mb-1">
												<span className="text-base font-medium text-blue-700 dark:text-white">EJS</span>
												<span className="text-sm font-medium text-blue-700 dark:text-white">{s.EJS}</span>
											</div>
											<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
												<div className="bg-blue-600 h-2.5 rounded-full" style={{ width: s.EJS }}></div>
											</div>
											<div className="flex justify-between mb-1">
												<span className="text-base font-medium text-blue-700 dark:text-white">Git</span>
												<span className="text-sm font-medium text-blue-700 dark:text-white">{s.Git}</span>
											</div>
											<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
												<div className="bg-blue-600 h-2.5 rounded-full" style={{ width: s.Git }}></div>
											</div>
											<div className="flex justify-between mb-1">
												<span className="text-base font-medium text-blue-700 dark:text-white">API</span>
												<span className="text-sm font-medium text-blue-700 dark:text-white">{s.API}</span>
											</div>
											<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
												<div className="bg-blue-600 h-2.5 rounded-full" style={{ width: s.API }}></div>
											</div>
											<div className="flex justify-between mb-1">
												<span className="text-base font-medium text-blue-700 dark:text-white">PostgreSQL</span>
												<span className="text-sm font-medium text-blue-700 dark:text-white">{s.PostgreSQL}</span>
											</div>
											<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
												<div className="bg-blue-600 h-2.5 rounded-full" style={{ width: s.PostgreSQL }}></div>
											</div>
											<div className="flex justify-between mb-1">
												<span className="text-base font-medium text-blue-700 dark:text-white">MongoDB</span>
												<span className="text-sm font-medium text-blue-700 dark:text-white">{s.MongoDB}</span>
											</div>
											<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
												<div className="bg-blue-600 h-2.5 rounded-full" style={{ width: s.MongoDB }}></div>
											</div>
											<div className="flex justify-between mb-1">
												<span className="text-base font-medium text-blue-700 dark:text-white">Firebase</span>
												<span className="text-sm font-medium text-blue-700 dark:text-white">{s.Firebase}</span>
											</div>
											<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
												<div className="bg-blue-600 h-2.5 rounded-full" style={{ width: s.Firebase }}></div>
											</div>
										</span>
									</div>
								</div>
							</CardAbout>
							))}
						</div>
				  </div>
				</div>
			  </CardAbout>
			))}
		  </div>
		</div>
	  </div>
	);
  }
