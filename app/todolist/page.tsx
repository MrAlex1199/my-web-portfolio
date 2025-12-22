"use client";
import { ProjectDetail } from "../components/project-detail";

export default function TodoList() {
	return (
		<ProjectDetail
			title="TODO-LIST"
			description="This web-based application empowers users to manage their tasks efficiently. Built with HTML and CSS, it offers a responsive design that adapts seamlessly to any device, from smartphones to desktops. This user-friendly platform allows for clear organization and prioritization, boosting productivity and achieving goals."
			images={["/webexample/ToDo/todolist.jpg"]}
			githubUrl="https://github.com/MrAlex1199/Projects-Capstone-2-ToDo-List-web-app---V2.git"
			liveUrl="https://projects-capstone-2-todo-list-web-app-v2.onrender.com"
			tech={["HTML", "CSS", "JavaScript", "Node.js"]}
		/>
	);
}
