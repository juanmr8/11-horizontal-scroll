'use client';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(SplitText);

interface AnimatedTitleProps {
	children: React.ReactNode;
	isInView: boolean;
	className?: string;
}

function AnimatedTitle({ children, isInView, className }: AnimatedTitleProps) {
	const ref = useRef<HTMLParagraphElement>(null);
	const splitRef = useRef<SplitText | null>(null);

	// Create split once on mount
	useGSAP(() => {
		document.fonts.ready.then(() => {
			if (!ref.current) return;

			splitRef.current = new SplitText(ref.current, {
				type: 'chars',
				linesClass: 'split-line',
			});

			// Set initial state (hidden)
			gsap.set(splitRef.current.chars, {
				opacity: 0,
				y: '100%',
			});
		});

		// Cleanup on unmount
		return () => {
			if (splitRef.current) {
				splitRef.current.revert();
			}
		};
	}, []);

	// Animate based on isInView changes
	useEffect(() => {
		if (!splitRef.current) return;

		if (isInView) {
			// Animate IN
			gsap.to(splitRef.current.chars, {
				opacity: 1,
				y: '0%',
				duration: 0.8,
				stagger: 0.03,
				ease: 'power2.out',
			});
		} else {
			// Animate OUT
			gsap.to(splitRef.current.chars, {
				opacity: 0,
				y: '100%',
				duration: 0.6,
				stagger: 0.02,
				ease: 'power2.in',
			});
		}
	}, [isInView]);

	return (
		<p className={cn('overflow-hidden', className)}>
			<span ref={ref} className='block'>
				{children}
			</span>
		</p>
	);
}

export default AnimatedTitle;
