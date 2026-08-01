"use client";
import { ProjectDetail } from "../components/project-detail";

export default function MyWebEcom() {
	return (
		<ProjectDetail
			title="MY-Web-ECom"
			description="This online retail platform caters to civilians seeking high-quality military-grade clothing and equipment. Built with React and Tailwind CSS for a dynamic and user-friendly experience, the website offers a comprehensive selection of products. The secure login system, powered by a MongoDB database, ensures a seamless and trustworthy shopping experience."
			images={Array.from({ length: 19 }, (_, i) => `/webexample/Ecom/E${i + 1}.jpg`)}
			githubUrl="https://github.com/MrAlex1199/MrAlexMY-Web-ECom.git"
			liveUrl="https://mralexmy-web-ecom-final-production-d08a.up.railway.app/"
			tech={["React", "Tailwind CSS", "Node.js", "MongoDB"]}
		/>
	);
}
