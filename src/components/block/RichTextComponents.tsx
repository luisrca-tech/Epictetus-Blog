import { SanityImage } from '../SanityImage';

type HeadingProps = {
	children: React.ReactNode;
};

const RichTextComponents = {
	types: {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		image: ({ value }: any) => {
			return (
				<div className="flex w-full items-center justify-center pb-10">
					<SanityImage
						className="rounded-md object-cover md:max-w-[44.25rem]"
						image={value.asset}
					/>
				</div>
			);
		}
	},
	list: {
		bullet: ({ children }: HeadingProps) => (
			<ul className="ml-10 list-disc space-y-5 px-3 py-5 md:px-6">
				{children}
			</ul>
		),
		number: ({ children }: HeadingProps) => (
			<ol className="mt-lg list-decimal px-3 md:px-4">{children}</ol>
		)
	},
	block: {
		normal: ({ children }: HeadingProps) => (
			<p className="flex max-w-[44.25rem] items-center justify-center pb-10 text-white text-xl leading-8">
				{children}
			</p>
		),
		h1: ({ children }: HeadingProps) => (
			<h1 className="flex max-w-[44.25rem] items-center justify-center py-10 text-center text-3xl text-white/60 leading-8">
				{children}
			</h1>
		),
		h2: ({ children }: HeadingProps) => (
			<h2 className="flex max-w-[44.25rem] items-center justify-center pb-10 text-white text-xl leading-8">
				{children}
			</h2>
		),
		h3: ({ children }: HeadingProps) => (
			<h3 className="flex max-w-[44.25rem] items-center justify-center pb-10 text-white text-xl leading-8">
				{children}
			</h3>
		),
		h4: ({ children }: HeadingProps) => (
			<h4 className="flex max-w-[44.25rem] items-center justify-center pb-10 text-white text-xl leading-8">
				{children}
			</h4>
		),
		blockquote: ({ children }: HeadingProps) => (
			<blockquote className="mb-10 max-w-[44.25rem] border-l-4 border-l-[#F7AB0A] py-5 pl-5 text-white">
				{children}
			</blockquote>
		)
	}
};

export default RichTextComponents;
