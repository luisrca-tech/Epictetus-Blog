import { SanityImage } from '../SanityImage';

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
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		bullet: ({ children }: any) => (
			<ul className="ml-10 list-disc space-y-5 px-3 py-5 md:px-6">
				{children}
			</ul>
		),
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		number: ({ children }: any) => (
			<ol className="mt-lg list-decimal px-3 md:px-4">{children}</ol>
		)
	},
	block: {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		normal: ({ children }: any) => (
			<p className="flex max-w-[44.25rem] items-center justify-center pb-10 text-white text-xl leading-8">
				{children}
			</p>
		),
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		h1: ({ children }: any) => (
			<h1 className="flex max-w-[44.25rem] items-center justify-center py-10 text-center text-3xl text-white/60 leading-8">
				{children}
			</h1>
		),
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		h2: ({ children }: any) => (
			<h2 className="flex max-w-[44.25rem] items-center justify-center pb-10 text-white text-xl leading-8">
				{children}
			</h2>
		),
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		h3: ({ children }: any) => (
			<h3 className="flex max-w-[44.25rem] items-center justify-center pb-10 text-white text-xl leading-8">
				{children}
			</h3>
		),
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		h4: ({ children }: any) => (
			<h4 className="flex max-w-[44.25rem] items-center justify-center pb-10 text-white text-xl leading-8">
				{children}
			</h4>
		),
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		blockquote: ({ children }: any) => (
			<blockquote className="mb-10 max-w-[44.25rem] border-l-4 border-l-[#F7AB0A] py-5 pl-5 text-white">
				{children}
			</blockquote>
		)
	}
};

export default RichTextComponents;
