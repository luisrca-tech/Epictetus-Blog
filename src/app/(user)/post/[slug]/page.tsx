import { PortableText } from '@portabletext/react';
import dayjs from 'dayjs';
import { notFound } from 'next/navigation';
import { SanityImage } from '~/components/SanityImage';
import RichTextComponents from '~/components/block/RichTextComponents';
import { Container } from '~/components/ui/Container';
import { client } from '~/sanity/lib/client';
import { POST_QUERY, SLUGS_QUERY } from '~/sanity/lib/queries';
import type { POST_QUERYResult } from '~/types/PostQueryResult.type';

export async function generateStaticParams() {
	const slugs = await client.fetch(SLUGS_QUERY);
	return slugs.map((slug: string) => ({ slug }));
}

type Props = {
	params: {
		slug: string;
	};
};

const ArticlePage = async ({ params }: Props) => {
	const post = await client.fetch<POST_QUERYResult>(
		POST_QUERY,
		{
			slug: params.slug
		},
		{ next: { tags: ['post'] } }
	);

	if (!post) return notFound();

	return (
		<Container>
			<article>
				<div className="mt-[1.875rem] flex flex-col items-center justify-center">
					<div className="flex items-center gap-3">
						<span className="font-normal text-sm text-white/60">
							{post.categories?.map((category) => category.title)}
						</span>
						<div className="h-1 w-1 rounded-full bg-white/60" />
						<span className="font-normal text-sm text-white/60">
							{dayjs(post.publishedAt).format('MMMM D, YYYY')}
						</span>
					</div>
					<h1 className="mt-3 text-center font-normal text-2xl text-white leading-[2.375rem] lg:max-w-[32.8125rem]">
						{post.title}
					</h1>
					<div className="mt-[1.875rem] flex gap-4 pt-2">
						{post?.author?.image && (
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
					<SanityImage
						image={post.mainImage}
						className="mt-7 w-full object-cover md:max-w-[56rem]"
					/>
					<PortableText value={post.body} components={RichTextComponents} />
				</div>
			</article>
		</Container>
	);
};

export default ArticlePage;
