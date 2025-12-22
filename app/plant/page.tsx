"use client";
import { ProjectDetail } from "../components/project-detail";

export default function Plant() {
	return (
		<ProjectDetail
			title="PlanetPlant"
			description="This responsive web experience showcases a plant shop with a carefully curated collection of products. Built with modern web technologies, the website delivers a seamless user experience across all devices, from desktop browsers to smartphones."
			images={Array.from({ length: 5 }, (_, i) => `/webexample/Plant/${i + 1}.jpg`)}
			githubUrl="https://github.com/MrAlex1199/my-project-Agency.git"
			tech={["React", "Styled Components", "Responsive Design"]}
		/>
	);
}
