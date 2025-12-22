"use client";
import { ProjectDetail } from "../components/project-detail";

export default function BookReview() {
	return (
		<ProjectDetail
			title="BOOK-REVIEW"
			description="This user-centric web application empowers anyone to discover and review books seamlessly. The intuitive interface, built with HTML, CSS and Bootstrap 5, fosters user engagement. The robust backend leverages the Node.js Express framework and a PostgreSQL database, ensuring scalability and efficient data management."
			images={Array.from({ length: 5 }, (_, i) => `/webexample/Book/N${i + 1}.jpg`)}
			githubUrl="https://github.com/MrAlex1199/Projects-Capstone-3-Notebook-Public.git"
			liveUrl="https://projects-capstone-3-notebook-public.onrender.com"
			tech={["Node.js", "Express", "PostgreSQL", "Bootstrap 5"]}
		/>
	);
}
