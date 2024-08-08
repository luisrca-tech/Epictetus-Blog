import { BlogPost } from '~/components/block/BlogPost';
import { Container } from '~/components/ui/Container';

export default function HomePage() {
	return (
		<div>
			<main>
				<Container className="pt-7 pb-8">
					<BlogPost />
				</Container>
			</main>
		</div>
	);
}
