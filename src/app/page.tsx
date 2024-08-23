import { PostsBlog } from '~/components/block/PostsBlog';
import { Container } from '~/components/ui/Container';

export default function HomePage() {
	return (
		<Container>
			<main>
				<div className="pt-7 pb-8">
					<PostsBlog />
				</div>
			</main>
		</Container>
	);
}
