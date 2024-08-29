type ErrorComponentProps = {
	error: unknown;
};

export function ErrorComponent({ error }: ErrorComponentProps) {
	if (error instanceof Error) {
		return (
			<div>
				<h1>Error</h1>
				<p>{error.message}</p>
			</div>
		);
	}

	return (
		<div>
			<h1>Unknown Error</h1>
			<p>An unknown error occurred.</p>
		</div>
	);
}
