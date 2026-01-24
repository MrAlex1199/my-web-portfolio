"use client";
import { ProjectDetail } from "../components/project-detail";

export default function AITravelItinerary() {
    return (
        <ProjectDetail
            title="AI Travel Itinerary"
			description="An intelligent travel planning application powered by AI that creates personalized itineraries based on user preferences, budget, and travel dates. The app provides smart recommendations for destinations, accommodations, activities, and dining options, making travel planning effortless and enjoyable."
            images={Array.from({ length: 7 }, (_, i) => `/webexample/IPC/A${i + 1}.jpg`)}
            githubUrl="https://github.com/MrAlex1199/AI-Travel-Itinerary"
            liveUrl="https://aitravelitnerary.vercel.app/"
            tech={["Next.js 14+ with App Router", "TypeScript", "Tailwind CSS", "AI Google Gemini via Genkit"]}
        />
    );
}
