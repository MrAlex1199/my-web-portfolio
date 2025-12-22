"use client";
import { ProjectDetail } from "../components/project-detail";

export default function IfixPC() {
	return (
		<ProjectDetail
			title="IFIX-PC"
			description="This web application empowers small and medium-sized enterprises (SMEs) with a user-friendly interface built using Bootstrap 5. The backend leverages the Node.js Express framework, ensuring scalability and efficiency. This comprehensive solution streamlines business management processes."
			images={Array.from({ length: 7 }, (_, i) => `/webexample/IPC/IF${i + 1}.jpg`)}
			githubUrl="https://github.com/MrAlex1199/IFIXPC.git"
			liveUrl="https://ifixpc.onrender.com"
			tech={["Node.js", "Express", "Bootstrap 5", "EJS"]}
		/>
	);
}
