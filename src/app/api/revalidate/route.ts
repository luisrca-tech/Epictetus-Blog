import { revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
	const { tag } = (await request.json()) as { tag: string };

	if (!tag) {
		return NextResponse.json({
			revalidate: false,
			message: 'tag not provided'
		});
	}
	revalidateTag(tag);
	return NextResponse.json({ revalidate: true });
}
