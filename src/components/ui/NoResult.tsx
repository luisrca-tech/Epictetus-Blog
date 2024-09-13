import { useAtom } from 'jotai';
import { searchTerm } from '~/atom/searchTerm';

export function NoResult() {
	const [searchValue] = useAtom(searchTerm);

	return (
		<div className="flex flex-col items-center justify-center gap-[6.25rem]">
			<h1 className="text-[2.125rem] text-white leading-7">
				Search: "{searchValue}"
			</h1>
			<div className="flex flex-col items-center justify-center gap-[0.625rem] text-white">
				<strong className="text-[3.75rem]">No result :(</strong>
				<span className="max-w-[35rem] text-center text-xl">
					We couldn’t find any posts with the keyword "{searchValue}". Please
					try another keyword.
				</span>
			</div>
		</div>
	);
}
