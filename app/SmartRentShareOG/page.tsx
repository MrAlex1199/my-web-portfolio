"use client";
import { ProjectDetail } from "../components/project-detail";

export default function SmartRentShareOG() {
    return (
        <ProjectDetail
            title="SMART-RENT-SHARE-OG"
            description="แพลตฟอร์มให้เช่า-ยืมของระหว่างนักศึกษา (Peer-to-Peer) ที่รองรับทั้ง LINE LIFF และ External Web Browser"
            images={Array.from({ length: 6 }, (_, i) => `/webexample/SmartRentShareOG/0${i + 1}.jpg`)}
            githubUrl="https://github.com/MrAlex1199/My-Capstone-Project-4--NASA-ROVER-Photo-by-NASA-API.git"
            liveUrl="https://smart-rent-share-og-web.vercel.app"
            tech={["Next.js", "NestJS", "MongoDB"]}
        />
    );
}