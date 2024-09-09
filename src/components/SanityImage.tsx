'use client';

import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import type { ImageAsset } from 'sanity';
import { cn } from '~/lib/utils';
import { client } from '~/sanity/lib/client';

type Props = {
	image: {
		asset: ImageAsset;
		alt: string;
	};
	className?: string;
};

export const SanityImage = ({ image, className }: Props) => {
	const imageProps = useNextSanityImage(client, image);
	const blurDataURL = image.asset?.metadata.lqip;

	return (
		<Image
			className={cn(className)}
			{...imageProps}
			placeholder={blurDataURL ? 'blur' : undefined}
			blurDataURL={blurDataURL}
			alt={image.alt}
		/>
	);
};
