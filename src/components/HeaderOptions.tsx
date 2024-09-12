'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '~/lib/utils';
import type { CATEGORIES_FEATURED_QUERYResult } from '~/types/CategoriesFeaturedResult.type';
import Menu from '/public/images/menu.png';
import Search from '/public/images/search.png';
import { SearchArticle } from './SearchArticle';
import { Container } from './ui/Container';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetOverlay,
	SheetTitle,
	SheetTrigger
} from './ui/sheet';

type Props = {
	categories: CATEGORIES_FEATURED_QUERYResult;
};

export function HeaderOptions({ categories }: Props) {
	const [isInputVisible, setIsInputVisible] = useState(false);

	const toggleInputVisibility = () => {
		setIsInputVisible((prev) => !prev);
	};

	return (
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
										<span className="font-semibold text-lg text-white">E</span>
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
			<Link
				href="/"
				className={cn('flex items-center gap-3 lg:flex', {
					hidden: isInputVisible
				})}
			>
				<div className="flex h-[2.1875rem] w-[2.1875rem] items-center justify-center rounded-[0.1875rem] bg-base-300">
					<span className="font-semibold text-lg text-white">E</span>
				</div>
				<h1 className="text-lg text-white hover:text-white/60">Epictetus</h1>
			</Link>
			<div className="lg:hidden">
				<Image
					src={Search}
					alt="Search input"
					className={cn({ hidden: isInputVisible })}
					onClick={toggleInputVisibility}
				/>
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
			<div
				className={cn('lg:block', {
					block: isInputVisible,
					hidden: !isInputVisible
				})}
			>
				<div className="relative flex items-center">
					<Image
						src={Search}
						width={14}
						height={14}
						alt="Search input"
						className="absolute left-3"
					/>
					<SearchArticle />
				</div>
			</div>
		</Container>
	);
}
