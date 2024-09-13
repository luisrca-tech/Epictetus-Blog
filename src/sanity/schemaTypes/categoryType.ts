import { defineField, defineType } from 'sanity';

export const categoryType = defineType({
	name: 'category',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'description',
			type: 'text'
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title'
			},
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'featuredCategory',
			type: 'boolean',
			title: 'Featured Category'
		})
	]
});
