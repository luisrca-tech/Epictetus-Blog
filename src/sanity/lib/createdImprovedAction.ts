// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function createImprovedAction(originalAction: any) {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const BetterAction = (props: any) => {
		const originalResult = originalAction(props);
		return {
			...originalResult,
			onHandle: async () => {
				// Add our custom functionality
				// then delegate to original handler
				originalResult.onHandle();

				setTimeout(async () => {
					await fetch('/api/revalidate', {
						body: JSON.stringify({ tag: ['blog', 'post'] }),
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						}
					});
				}, 5000);
			}
		};
	};
	return BetterAction;
}
