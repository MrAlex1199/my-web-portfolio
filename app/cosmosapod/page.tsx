"use client";
import { ProjectDetail } from "../components/project-detail";

export default function CosmosAPOD() {
	return (
		<ProjectDetail
			title="COSMOS-APOD"
			description="This web application facilitates the exploration of imagery captured by NASA's. The user interface is implemented with HTML and CSS, while the backend leverages the Node.js Express framework. The application retrieves image data through NASA's public API."
			images={Array.from({ length: 5 }, (_, i) => `/webexample/cosmosapod/R${i + 1}.jpg`)}
			githubUrl="https://github.com/MrAlex1199/My-Capstone-Project-4--NASA-ROVER-Photo-by-NASA-API.git"
			liveUrl="https://my-capstone-project-4-nasa-rover-photo.onrender.com"
			tech={["Node.js", "Express", "NASA API", "EJS"]}
		/>
	);
}
