import { useEffect, useState } from "react";

interface MousePosition {
	x: number;
	y: number;
}

export function useMousePosition(): MousePosition {
	const [mousePosition, setMousePosition] = useState<MousePosition>({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		// Throttle mouse move events for better performance
		let rafId: number | null = null;
		
		const handleMouseMove = (event: MouseEvent) => {
			if (rafId) return;
			
			rafId = requestAnimationFrame(() => {
				setMousePosition({ x: event.clientX, y: event.clientY });
				rafId = null;
			});
		};

		window.addEventListener("mousemove", handleMouseMove, { passive: true });

		return () => {
			if (rafId) cancelAnimationFrame(rafId);
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return mousePosition;
}