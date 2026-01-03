'use client';
import {
	useScroll,
	motion,
	useTransform,
	useInView,
	animate,
} from 'motion/react';
import { useEffect, useRef } from 'react';

interface HorizontalScrollSectionProps {
	children: (isInView: boolean) => React.ReactNode;
	bgColor?: string;
}

export function HorizontalScrollSection({
	children,
	bgColor = '#E9EAF6',
}: HorizontalScrollSectionProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['15% start', 'end start'], // 15% prevents the title from scrolling immediately
	});

	// Use useInView with a small threshold since the section is 400vh tall
	// Only ~25% of it can ever be visible, so we use a lower amount
	// The margin creates a "center zone" where only one section is active
	const isInView = useInView(ref, {
		amount: 0.15, // ~60% of the visible portion (0.25 * 0.6)
		margin: '-100px 0px -100px 0px', // Create buffer zones at top/bottom
	});

	useEffect(() => {
		if (isInView) {
			const element = document.querySelector('.bg-color') as HTMLElement;
			if (element) {
				animate(element, { background: bgColor } as any, {
					duration: 0.5,
					ease: [0.45, 0, 0.55, 1],
				});
			}
		}
	}, [isInView, bgColor]);

	const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

	return (
		<div ref={ref} className='relative h-[400vh]'>
			<div className='sticky top-0 flex h-screen min-h-screen overflow-x-hidden'>
				<motion.div className='relative flex h-full gap-16' style={{ x }}>
					{children(isInView)}
				</motion.div>
			</div>
		</div>
	);
}
