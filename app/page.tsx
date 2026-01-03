'use client';
import { useInView, animate } from 'motion/react';
import { LenisProvider } from './lenis-provider';
import { useEffect, useRef } from 'react';
import AnimatedTitle from '@/components/animated-title';
import { HorizontalScrollSection } from '@/components/horizontal-scroll';
import { ImageElement } from '@/components/image-element';

export default function Page() {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, {
		amount: 0.15, // ~60% of the visible portion (0.25 * 0.6)
		margin: '-100px 0px -100px 0px', // Create buffer zones at top/bottom
	});

	useEffect(() => {
		if (isInView) {
			const element = document.querySelector('.bg-color') as HTMLElement;
			if (element) {
				animate(element, { background: '#0a0a0a' } as any, {
					duration: 0.5,
					ease: [0.45, 0, 0.55, 1],
				});
			}
		}
	}, [isInView]);
	return (
		<LenisProvider>
			<div className='bg-color'>
				<div
					ref={ref}
					className='flex h-screen flex-col items-center justify-center gap-4 text-center text-white'
				>
					<h1 className='text-[120px] leading-[0.85] font-bold'>
						Pablo Picasso
					</h1>
					<p className='font-mono text-xl tracking-wide opacity-70'>
						An Artistic Journey Through Time
					</p>
				</div>
				<EarlyWorks />
				<BluePeriod />
				<RosePeriod />
				<AfricanPeriod />
				<Cubism />
				<Classicism />
				<Surrealism />
			</div>
		</LenisProvider>
	);
}

const EarlyWorks = () => {
	return (
		<HorizontalScrollSection bgColor='#F5F1E8'>
			{isInView => (
				<div className='relative flex h-full gap-16'>
					<div className='absolute inset-0 grid w-screen place-items-center pt-[50px] pl-20'>
						<AnimatedTitle
							isInView={isInView}
							className='text-[128px] leading-[0.8] whitespace-nowrap'
						>
							Early Works
						</AnimatedTitle>
						<span className='h-fit pt-4 font-mono text-[20px] leading-none tracking-[-0.05em]'>
							(1894-1901)
						</span>
					</div>
					<div className='flex gap-12 pl-[100vw]'>
						<ImageElement src='early-1.jpg' width='639px' isInView={isInView} />
						<ImageElement
							src='early-2.jpg'
							width='273px'
							aspectRatio='273/367'
							position='center'
							isInView={isInView}
						/>
						<div className='flex w-[800px] flex-col justify-center gap-4 self-center px-12'>
							<div className='mx-auto w-[400px]'>
								<p className='font-mono text-[16px] leading-relaxed tracking-tight text-gray-700'>
									"As a young artist in Spain, I experimented with various
									styles, learning from the masters while finding my own voice.
									These early years laid the foundation for everything that
									would follow."
								</p>
								<span className='font-mono text-[14px] text-gray-500'>
									— Pablo Picasso
								</span>
							</div>
						</div>
						<ImageElement
							src='early-3.jpg'
							position='start'
							isInView={isInView}
						/>
						<div className='h-full w-screen' />
					</div>
				</div>
			)}
		</HorizontalScrollSection>
	);
};

const BluePeriod = () => {
	return (
		<HorizontalScrollSection bgColor='#E9EAF6'>
			{isInView => (
				<div className='relative flex h-full gap-16'>
					<div className='absolute inset-0 grid w-screen place-items-center pt-[50px] pl-20'>
						<AnimatedTitle
							isInView={isInView}
							className='text-[128px] leading-[0.8] whitespace-nowrap'
						>
							Blue Period
						</AnimatedTitle>
						<span className='h-fit pt-4 font-mono text-[20px] leading-none tracking-[-0.05em]'>
							(1901-1904)
						</span>
					</div>
					<div className='flex gap-12 pl-[100vw]'>
						<ImageElement width='639px' isInView={isInView} />
						<ImageElement
							src='picasso-2.png'
							width='273px'
							aspectRatio='273/367'
							position='center'
							isInView={isInView}
						/>
						<div className='flex w-[800px] flex-col justify-center gap-4 self-center px-12'>
							<div className='mx-auto w-[400px]'>
								<p className='font-mono text-[16px] leading-relaxed tracking-tight text-gray-700'>
									"I started painting in blue when I learned of Casagemas's
									death. The somber tones of this period reflected the sadness
									and desolation I felt, depicting beggars, street urchins, and
									the lonely."
								</p>
								<span className='font-mono text-[14px] text-gray-500'>
									— Pablo Picasso
								</span>
							</div>
						</div>
						<ImageElement position='start' isInView={isInView} />
						<div className='h-full w-screen' />
					</div>
				</div>
			)}
		</HorizontalScrollSection>
	);
};

const RosePeriod = () => {
	return (
		<HorizontalScrollSection bgColor='#FFE5E5'>
			{isInView => (
				<div className='relative flex h-full gap-16'>
					<div className='absolute inset-0 grid w-screen place-items-center pt-[50px] pl-20'>
						<AnimatedTitle
							isInView={isInView}
							className='text-[128px] leading-[0.8] whitespace-nowrap'
						>
							Rose Period
						</AnimatedTitle>
						<span className='h-fit pt-4 font-mono text-[20px] leading-none tracking-[-0.05em]'>
							(1904-1906)
						</span>
					</div>
					<div className='flex gap-12 pl-[100vw]'>
						<ImageElement src='rose-1.jpg' width='639px' isInView={isInView} />
						<ImageElement
							src='rose-2.jpg'
							width='273px'
							aspectRatio='273/367'
							position='center'
							isInView={isInView}
						/>
						<div className='flex w-[800px] flex-col justify-center gap-4 self-center px-12'>
							<div className='mx-auto w-[400px]'>
								<p className='font-mono text-[16px] leading-relaxed tracking-tight text-gray-700'>
									"After moving to Montmartre, my palette warmed. Life felt
									brighter, filled with circus performers, acrobats, and
									harlequins. The rose tones captured this newfound optimism and
									romance."
								</p>
								<span className='font-mono text-[14px] text-gray-500'>
									— Pablo Picasso
								</span>
							</div>
						</div>
						<ImageElement
							src='rose-3.jpg'
							position='start'
							isInView={isInView}
						/>
						<div className='h-full w-screen' />
					</div>
				</div>
			)}
		</HorizontalScrollSection>
	);
};

const AfricanPeriod = () => {
	return (
		<HorizontalScrollSection bgColor='#E8DDD1'>
			{isInView => (
				<div className='relative flex h-full gap-16'>
					<div className='absolute inset-0 grid w-screen place-items-center pt-[50px] pl-20'>
						<AnimatedTitle
							isInView={isInView}
							className='text-[128px] leading-[0.8] whitespace-nowrap'
						>
							African Period
						</AnimatedTitle>
						<span className='h-fit pt-4 font-mono text-[20px] leading-none tracking-[-0.05em]'>
							(1907-1909)
						</span>
					</div>
					<div className='flex gap-12 pl-[100vw]'>
						<ImageElement
							src='african-1.jpg'
							width='639px'
							isInView={isInView}
						/>
						<ImageElement
							src='african-2.jpg'
							width='273px'
							aspectRatio='273/367'
							position='center'
							isInView={isInView}
						/>
						<div className='flex w-[800px] flex-col justify-center gap-4 self-center px-12'>
							<div className='mx-auto w-[400px]'>
								<p className='font-mono text-[16px] leading-relaxed tracking-tight text-gray-700'>
									"The power and simplicity of African art opened my eyes to new
									possibilities. I began to see forms differently, breaking away
									from tradition to create something entirely revolutionary."
								</p>
								<span className='font-mono text-[14px] text-gray-500'>
									— Pablo Picasso
								</span>
							</div>
						</div>
						<ImageElement
							src='african-3.jpg'
							position='start'
							isInView={isInView}
						/>
						<div className='h-full w-screen' />
					</div>
				</div>
			)}
		</HorizontalScrollSection>
	);
};

const Cubism = () => {
	return (
		<HorizontalScrollSection bgColor='#D4D9E3'>
			{isInView => (
				<div className='relative flex h-full gap-16'>
					<div className='absolute inset-0 grid w-screen place-items-center pt-[50px] pl-20'>
						<AnimatedTitle
							isInView={isInView}
							className='text-[128px] leading-[0.8] whitespace-nowrap'
						>
							Cubism
						</AnimatedTitle>
						<span className='h-fit pt-4 font-mono text-[20px] leading-none tracking-[-0.05em]'>
							(1909-1919)
						</span>
					</div>
					<div className='flex gap-12 pl-[100vw]'>
						<ImageElement
							src='cubism-1.jpg'
							width='639px'
							isInView={isInView}
						/>
						<ImageElement
							src='cubism-2.jpg'
							width='273px'
							aspectRatio='273/367'
							position='center'
							isInView={isInView}
						/>
						<div className='flex w-[800px] flex-col justify-center gap-4 self-center px-12'>
							<div className='mx-auto w-[400px]'>
								<p className='font-mono text-[16px] leading-relaxed tracking-tight text-gray-700'>
									"I paint objects as I think them, not as I see them. With
									Braque, we shattered perspective and reassembled reality from
									multiple viewpoints simultaneously."
								</p>
								<span className='font-mono text-[14px] text-gray-500'>
									— Pablo Picasso
								</span>
							</div>
						</div>
						<ImageElement
							src='cubism-3.jpg'
							position='start'
							isInView={isInView}
						/>
						<div className='h-full w-screen' />
					</div>
				</div>
			)}
		</HorizontalScrollSection>
	);
};

const Classicism = () => {
	return (
		<HorizontalScrollSection bgColor='#F0E9DB'>
			{isInView => (
				<div className='relative flex h-full gap-16'>
					<div className='absolute inset-0 grid w-screen place-items-center pt-[50px] pl-20'>
						<AnimatedTitle
							isInView={isInView}
							className='text-[128px] leading-[0.8] whitespace-nowrap'
						>
							Classicism
						</AnimatedTitle>
						<span className='h-fit pt-4 font-mono text-[20px] leading-none tracking-[-0.05em]'>
							(1918-1925)
						</span>
					</div>
					<div className='flex gap-12 pl-[100vw]'>
						<ImageElement
							src='classicism-1.jpg'
							width='639px'
							isInView={isInView}
						/>
						<ImageElement
							src='classicism-2.jpg'
							width='273px'
							aspectRatio='273/367'
							position='center'
							isInView={isInView}
						/>
						<div className='flex w-[800px] flex-col justify-center gap-4 self-center px-12'>
							<div className='mx-auto w-[400px]'>
								<p className='font-mono text-[16px] leading-relaxed tracking-tight text-gray-700'>
									"After the chaos of war, I returned to order and beauty. The
									human form, rendered with clarity and monumentality, became my
									focus once again."
								</p>
								<span className='font-mono text-[14px] text-gray-500'>
									— Pablo Picasso
								</span>
							</div>
						</div>
						<ImageElement
							src='classicism-3.jpg'
							position='start'
							isInView={isInView}
						/>
						<div className='h-full w-screen' />
					</div>
				</div>
			)}
		</HorizontalScrollSection>
	);
};

const Surrealism = () => {
	return (
		<HorizontalScrollSection bgColor='#E8E3F0'>
			{isInView => (
				<div className='relative flex h-full gap-16'>
					<div className='absolute inset-0 grid w-screen place-items-center pt-[50px] pl-20'>
						<AnimatedTitle
							isInView={isInView}
							className='text-[128px] leading-[0.8] whitespace-nowrap'
						>
							Surrealism
						</AnimatedTitle>
						<span className='h-fit pt-4 font-mono text-[20px] leading-none tracking-[-0.05em]'>
							(1925-1936)
						</span>
					</div>
					<div className='flex gap-12 pl-[100vw]'>
						<ImageElement
							src='surrealism-1.jpg'
							width='639px'
							isInView={isInView}
						/>
						<ImageElement
							src='surrealism-2.jpg'
							width='273px'
							aspectRatio='273/367'
							position='center'
							isInView={isInView}
						/>
						<div className='flex w-[800px] flex-col justify-center gap-4 self-center px-12'>
							<div className='mx-auto w-[400px]'>
								<p className='font-mono text-[16px] leading-relaxed tracking-tight text-gray-700'>
									"I explored the unconscious mind, dreams, and metamorphosis.
									Reality and fantasy merged, creating distorted figures that
									expressed deep psychological truths."
								</p>
								<span className='font-mono text-[14px] text-gray-500'>
									— Pablo Picasso
								</span>
							</div>
						</div>
						<ImageElement
							src='surrealism-3.jpg'
							position='start'
							isInView={isInView}
						/>
						<div className='h-full w-screen' />
					</div>
				</div>
			)}
		</HorizontalScrollSection>
	);
};
