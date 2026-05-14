"use client";
import { ProjectDetail } from "../components/project-detail";

export default function FixMate() {
	return (
		<ProjectDetail
			title="FixMate"
			description="แอปพลิเคชั่นให้คำแนะนำการซ่อมรถยนต์และมอเตอร์ไซค์ด้วย AI แบบครบวงจร"
			images={Array.from({ length: 8 }, (_, i) => `/webexample/FixMate/0${i + 1}.jpg`)}
			githubUrl="https://github.com/MrAlex1199/Fixmate_AI_APP.git"
			tech={["Flutter", "AI Google Gemini API", "PostgreSQL", "Dart"]}
		/>
	);
}