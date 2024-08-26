import { defineField, defineType } from 'sanity';
import { client } from '../lib/client';

export const postType = defineType({
	name: 'post',
	title: 'Post',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96
			},
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'author',
			type: 'reference',
			to: { type: 'author' },
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'mainImage',
			type: 'image',
			options: {
				hotspot: true
			},
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative text'
				}
			],
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'categories',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'category' } }],
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'publishedAt',
			type: 'datetime'
		}),
		defineField({
			name: 'body',
			type: 'blockContent'
		}),
		defineField({
			name: 'description',
			type: 'text',
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'featured',
			type: 'boolean',
			validation: (Rule) =>
				Rule.custom(async (value, context) => {
					if (value) {
						const { document } = context;
						const existingFeaturedPosts = await client.fetch(
							`*[_type == "post" && featured == true && _id != $id]`,
							{ id: document?._id, title: document?.title }
						);
						if (existingFeaturedPosts.length > 0) {
							return `${existingFeaturedPosts[0].title} is already featured`;
						}
					}
					return true;
				})
		})
	],
	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'mainImage'
		},
		prepare(selection) {
			const { author } = selection;
			return { ...selection, subtitle: author && `by ${author}` };
		}
	}
});
