'use client';
import { motion } from 'motion/react';

interface ImageElementProps {
	src?: string;
	aspectRatio?: string;
	width?: string;
	label?: string;
	position?: 'start' | 'center' | 'end';
	isInView?: boolean;
}

export function ImageElement({
	src = 'picasso-1.png',
	aspectRatio = '1/1',
	width = '20vw',
	label = 'Credits: Museo Picasso, Madrid',
	position = 'start',
	isInView = true,
}: ImageElementProps) {
	return (
		<motion.div
			className='flex flex-col'
			style={{ aspectRatio, width, justifyContent: position }}
			animate={{ opacity: isInView ? 1 : 0 }}
			transition={{ duration: 0.6, ease: [0.45, 0, 0.55, 1] }}
		>
			<img src={src} className='w-full object-cover' />
			<p className='pt-1 font-mono text-[12px]'>{label}</p>
		</motion.div>
	);
}
