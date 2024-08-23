import { BlogList } from '~/components/block/BlogList';
import { Container } from '~/components/ui/Container';

export default function HomePage() {
	return (
		<Container>
			<main>
				<Container className="pt-7 pb-8">
					<BlogList />
				</Container>
			</main>
		</Container>
	);
}
