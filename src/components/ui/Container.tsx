import type { ReactNode } from 'react';
import { cn } from '~/lib/utils';

interface ContainerProps {
	children: ReactNode;
	className?: string;
}

export function Container({ children, className }: ContainerProps) {
	return (
		<div
			className={cn(
				'm-auto max-w-screen-2xl 3xl:px-0 px-[1.875rem] lg:px-20 2xl:px-[11.25rem]',
				className
			)}
		>
			{children}
		</div>
	);
}
