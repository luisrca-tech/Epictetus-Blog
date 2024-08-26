import { BlogList } from '~/components/block/BlogList';
import { Container } from '~/components/ui/Container';

export default function HomePage() {
	return (
		<Container>
			<main>
				<div className="pt-7 pb-8">
					<BlogList />
				</div>
			</main>
		</Container>
	);
}
