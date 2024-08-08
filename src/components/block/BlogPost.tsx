import { PostContentItems } from '~/mock/PostContentItems';
import { ArticleCard } from '../ui/ArticleCard';

export function BlogPost() {
	return (
		<div className="flex flex-col md:grid md:grid-cols-3 md:gap-[1.875rem] lg:grid lg:grid-cols-3 lg:gap-[1.875rem]">
			{PostContentItems.map((post) => (
				<div
					key={post.id}
					className={`${post.featured && 'md:col-span-3 lg:col-span-3'} mb-[3.75rem]`}
				>
					<ArticleCard post={post} />
				</div>
			))}
		</div>
	);
}
