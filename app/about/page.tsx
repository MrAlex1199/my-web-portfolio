"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { CardAbout } from "../components/cardabout";

const socials = [
    {
        label: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because",
        handle: "About Me",
    },
];

const skills = {
    HTML: "100%",
    CSS: "90%",
    JavaScript: "80%",
    TypeScript: "60%",
    BootStrap: "80%",
    Reactjs: "90%",
    Nextjs: "70%",
    jQuery: "80%",
    Nodejs: "80%",
    Expressjs: "80%",
    EJS: "80%",
    Git: "80%",
    API: "80%",
    PostgreSQL: "90%",
    MongoDB: "90%",
    Firebase: "80%",
};

export default function About() {
    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto mt-20">
                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 lg:gap-16">
                    {socials.map((social) => (
                        <CardAbout key={social.handle}>
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
                        </CardAbout>
                    ))}
                    <CardAbout>
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
                    </CardAbout>
                </div>
            </div>
        </div>
    );
}