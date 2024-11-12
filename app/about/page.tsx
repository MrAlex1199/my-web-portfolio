"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
    {
        handle: "About Me",
        label: "Leveraging 4 years of experience as a Computer Repair Technician, I'm currently expanding my skillset to become a full-stack web developer. This transition allows me to combine my technical knowledge with a passion for creating new and engaging web experiences.",
    },
];

const skills = {
    HTML:"100%",
    CSS: "100%",
    TailwindCSS: "100%",
    JavaScript: "100%",
    EJS: "100%",
    React: "90%",
    PostgreSQL: "90%",
    MongoDB: "90%",
    BootStrap: "80%",
    jQuery: "80%",
    Node: "80%",
    Express: "80%",
    Git: "80%",
    API: "80%",
    Firebase: "80%",
    Next: "70%",
    TypeScript: "60%",
};


const links = [
	{ 
		name: "GitHub", href: "https://github.com/MrAlex1199/MrAlexMY-Web-ECom.git",
		icon: <Github size={20} />,
	},
    { 
		name: "Mail", href: "mailto:t57havytanks@gmail.com",
		icon: <Mail size={20} />,
	},
    { 
		name: "Twitter", href: "https://github.com/MrAlex1199/MrAlexMY-Web-ECom.git",
		icon: <Twitter size={20} />,
	},
  ];

export default function About() {
    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto mt-20">
                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 lg:gap-16">
                    {socials.map((social) => (
                        <Card key={social.handle}>
                            <div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16">
                                <div className="z-10 flex flex-col items-center">
                                    <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                                        {social.handle}
                                    </span>
                                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                        {social.label}
                                    </span>
                                </div>
                            </div>
                        </Card>
                    ))}
                    <Card>
                        <div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 md:p-16">
                            <div className="z-10 flex flex-col w-full items-center">
                                <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                                    My Skill
                                </span>
                                <div className="mt-4 text-sm text-center w-full duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                    {Object.entries(skills).map(([skill, level]) => (
                                        <div key={skill} className="w-full mb-4">
                                            <div className="flex justify-between mb-1">
                                                <span className="text-base font-medium text-blue-700 dark:text-white">{skill}</span>
                                                <span className="text-sm font-medium text-blue-700 dark:text-white">{level}</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: level }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Card>
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