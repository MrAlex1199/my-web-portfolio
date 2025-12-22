"use client";
import { ProjectDetail } from "../components/project-detail";

export default function HomeDaddy() {
	return (
		<ProjectDetail
			title="HomeDaddy"
			description="A user-friendly web app for SMEs using Medusa, streamlining business processes with a scalable backend. This comprehensive solution helps small and medium-sized enterprises manage their operations efficiently."
			images={Array.from({ length: 17 }, (_, i) => `/webexample/Home/H${i + 1}.jpg`)}
			githubUrl="https://github.com/MrAlex1199/HomeDaddy-Power-by-Medusa.git"
			tech={["Medusa", "React", "Node.js", "PostgreSQL"]}
		/>
	);
}
