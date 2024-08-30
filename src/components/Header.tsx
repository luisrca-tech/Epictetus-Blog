import Image from 'next/image';
import Link from 'next/link';

import Menu from '/public/images/menu.png';
import Search from '/public/images/search.png';

import type { CATEGORIES_QUERYResult } from 'sanity.types';
import { client } from '~/sanity/lib/client';
import { CATEGORIES_FEATURED_QUERY } from '~/sanity/lib/queries';
import { Container } from './ui/Container';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetOverlay,
	SheetTitle,
	SheetTrigger
} from './ui/sheet';

export async function Header() {
	const categories = await client.fetch<CATEGORIES_QUERYResult>(
		CATEGORIES_FEATURED_QUERY
	);

	return (
		<header>
			<Container className="flex items-center justify-between pt-9 pb-8 lg:pt-20 lg:pb-[3.8125rem]">
				<div className="lg:hidden">
					<Sheet>
						<SheetOverlay />
						<SheetTrigger>
							<Image src={Menu} alt="Open menu button" />
						</SheetTrigger>
						<SheetContent
							className="bg-gradient-to-t from-gradient-200 to-gradient-100"
							side="left"
						>
							<SheetHeader>
								<SheetTitle>
									<div className="flex items-center gap-3">
										<div className="flex h-[2.1875rem] w-[2.1875rem] items-center justify-center rounded-[0.1875rem] bg-base-300">
											<span className="font-semibold text-lg text-white">
												E
											</span>
										</div>
										<h1 className="text-lg text-white">Epictetus</h1>
									</div>
								</SheetTitle>
							</SheetHeader>
							<nav>
								<ul className="flex flex-col gap-3 pt-10">
									{categories.map((category) => (
										<li
											className="text-base text-white hover:text-white/60"
											key={category.title}
										>
											<Link href={`/category/${category.slug}`}>
												{category.title}
											</Link>
										</li>
									))}
								</ul>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
				<Link href="/" className="flex items-center gap-3">
					<div className="flex h-[2.1875rem] w-[2.1875rem] items-center justify-center rounded-[0.1875rem] bg-base-300">
						<span className="font-semibold text-lg text-white">E</span>
					</div>
					<h1 className="text-lg text-white hover:text-white/60">Epictetus</h1>
				</Link>
				<div className="lg:hidden">
					<Image src={Search} alt="Search input" />
				</div>
				<div className="hidden lg:block">
					<nav>
						<ul className="flex gap-[2.8125rem]">
							{categories.map((category) => (
								<li
									className="text-base text-white hover:text-white/60"
									key={category.title}
								>
									<Link href={`/category/${category.slug}`}>
										{category.title}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
				<div className="hidden lg:block">
					<div className="relative flex items-center">
						<Image
							src={Search}
							width={14}
							height={14}
							alt="Search input"
							className="absolute left-3"
						/>
						<input
							type="text"
							placeholder="Search"
							className="rounded-[6.25rem] bg-base-200 p-[0.5625rem] pl-9 text-base text-white"
						/>
					</div>
				</div>
			</Container>
		</header>
	);
}
