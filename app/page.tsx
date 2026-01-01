'use client';
import { useScroll, motion, useTransform } from 'framer-motion';
import { LenisProvider } from './lenis-provider';
import { useRef } from 'react';
export default function Page() {
	return (
		<LenisProvider>
			<div className=''>
				<div className='h-[100vh] bg-black text-white text-center flex items-center justify-center'>Holis</div>
				<ScrollContainer />
			</div>
		</LenisProvider>
	);
}

const ScrollContainer = () => {
	return <HorizontalScroll />;
};

const HorizontalScroll = () => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	// Calculate total width: furthest element x + its width + some padding
	const CONTENT_WIDTH = 3000 + 639 + 500; // Last element position + its width + padding
	const x = useTransform(scrollYProgress, [0, 1], [0, -CONTENT_WIDTH]);

	return (
		<div ref={ref} className='relative h-[400vh]'>
			<div className='sticky top-0 flex h-screen min-h-screen overflow-x-hidden bg-[#E9EAF6]'>
				<motion.div className='relative flex gap-16 h-full' style={{ x }}>
					<div className='flex w-fit flex-col justify-center pt-[50px] pl-4'>
						<p className='text-[128px] pr-[200px] leading-[0.8]'>
							Blue Period <br />{' '}
						</p>
						<span className='h-fit pt-4 font-mono text-[20px] leading-none tracking-[-0.05em]'>
							(1901-1904)
						</span>
					</div>
					<ImageElement width='639px' x={1000} y={50} />
					<ImageElement
						src='picasso-2.png'
						width='273px'
						x={1800}
						y={250}
						aspectRatio='273/367'
						position='center'
					/>
					<ImageElement x={3000} y={400} position='start' />
				</motion.div>
			</div>
		</div>
	);
};

const ImageElement = ({
	src = 'picasso-1.png',
	x = 1000,
	y = 0,
	aspectRatio = '1/1',
	width = '20vw',
	label = 'Credits: Museo Picasso, Madrid',
	position = "start"
}: {
	src?: string;
	x?: number;
	y?: number;
	aspectRatio?: string;
	width?: string;
	label?: string;
	position?: 'start' | 'center' | 'end';
}) => {
	return (
		<div
			className='flex flex-col'
			style={{ aspectRatio, width, justifyContent: position }}
		>
			<img src={src} className=' w-full object-cover' />
			<p className='pt-1 font-mono text-[12px]'>{label}</p>
		</div>
	);
};
