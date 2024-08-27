'use client';

import dayjs from 'dayjs';
import Link from 'next/link';
import { cn } from '~/lib/utils';
import type { POSTS_QUERYResult } from '~/types/PostsQueryResult.type';
import { SanityImage } from '../SanityImage';

export async function ArticleCard({ post }: { post: POSTS_QUERYResult[0] }) {
	return (
		<article
			className={`${post.featured && 'lg:flex-row lg:gap-8'} flex flex-col`}
		>
			<SanityImage
				image={post.mainImage}
				className={cn(`${post.featured && 'lg:w-2/3'} w-full object-cover`)}
			/>
			<div className="flex flex-col gap-[0.6875rem] pt-5">
				<div className="flex items-center gap-3">
					<span className="font-normal text-sm text-white/60">
						{post.categories?.map((category) => category.title)}
					</span>
					<div className="h-1 w-1 rounded-full bg-white/60" />
					<span className="font-normal text-sm text-white/60">
						{dayjs(post.publishedAt).format('MMMM D, YYYY')}
					</span>
				</div>
				<Link
					href={`/post/${post.slug}`}
					className="font-normal text-2xl text-white leading-[2.375rem]"
				>
					{post.title}
				</Link>
				<p
					className={`font-normal text-base text-white/60 leading-7 md:min-h-[8.75rem] lg:min-h-[8.75rem] 2xl:text-lg ${post.featured && 'md:min-h-full'}`}
				>
					{post.description}
				</p>
				<div className="flex gap-4 pt-2">
					{post.author?.image && (
						<SanityImage
							image={post.author?.image}
							className="h-[3.125rem] w-[3.125rem]"
						/>
					)}
					<div className="flex flex-col gap-2">
						<span className="font-normal text-sm text-white">
							{post.author?.name}
						</span>
						<span className="font-normal text-sm text-white/60">
							{post.author?.role}
						</span>
					</div>
				</div>
			</div>
		</article>
	);
}
