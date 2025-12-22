"use client";
import { ProjectDetail } from "../components/project-detail";

export default function NextJSResume() {
	return (
		<ProjectDetail
			title="NEXT-JS-RESUME"
			description="This responsive web experience showcases my skills and accomplishments through a carefully curated collection of projects. Built with Next.js and Tailwind CSS, the website delivers a seamless user experience across all devices, from desktop browsers to smartphones."
			images={Array.from({ length: 4 }, (_, i) => `/webexample/NEXTPortfolio/NT${i + 1}.jpg`)}
			githubUrl="https://github.com/MrAlex1199/my-web-portfolio.git"
			tech={["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"]}
		/>
	);
}
