import { BlogList } from '~/components/block/BlogList';
import { Container } from '~/components/ui/Container';
import { client } from '~/sanity/lib/client';
import { POSTS_QUERY } from '~/sanity/lib/queries';
import type { POSTS_QUERYResult } from '~/types/PostsQueryResult.type';

export default async function HomePage() {
	const posts = await client.fetch<POSTS_QUERYResult>(POSTS_QUERY);

	return (
		<Container>
			<main>
				<div className="pt-7 pb-8">
					<BlogList posts={posts} />
				</div>
			</main>
		</Container>
	);
}
