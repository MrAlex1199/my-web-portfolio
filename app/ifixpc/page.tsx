"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const P_info = [
	{
		href: "https://ifixpc.onrender.com",
		label: "This web application empowers small and medium-sized enterprises (SMEs) with a user-friendly interface built using Bootstrap 5. The backend leverages the Node.js Express framework, ensuring scalability and efficiency. This comprehensive solution streamlines business management processes, allowing SMEs to focus on core competencies and growth.",
		handle: "IFIX-PC",
		images: Array.from({ length: 7 }, (_, i) => `/webexample/IPC/IF${i + 1}.jpg`),
	},
];

const links = [
	{ 
		name: "GitHub", href: "https://github.com/MrAlex1199/IFIXPC.git",
		icon: <Github size={20} />,
	},
  ];

  export default function Ifixpc() {
	return (
	  <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
		<Navigation />
		<div className="container flex items-center justify-center min-h-screen px-4 mx-auto mt-10">
		  <div className="grid w-full gap-8 mx-auto mt-32 sm:mt-10 lg:gap-16">
			{P_info.map((s, index) => (
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
			<nav className="my-16">
			  <ul className="flex items-center justify-center gap-4">
				{links.map((item, index) => (
				  <Link key={index} href={item.href} className="text-sm text-zinc-500 hover:text-zinc-300">
					<span className="flex items-center justify-center w-12 h-12 rounded-full text-zinc-200 bg-zinc-900 group-hover:bg-zinc-900">
					  {item.icon}
					</span>
					{"Github"}
				  </Link>
				))}
			  </ul>
			</nav>
		  </div>
		</div>
	  </div>
	);
  }
