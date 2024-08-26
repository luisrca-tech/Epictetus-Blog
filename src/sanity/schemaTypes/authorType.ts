import { defineField, defineType } from 'sanity';

export const authorType = defineType({
	name: 'author',
	title: 'Author',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			type: 'string',
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 96
			},
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'image',
			type: 'image',
			options: {
				hotspot: true
			},
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative Text'
				}
			],
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'bio',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [{ title: 'Normal', value: 'normal' }],
					lists: []
				}
			]
		}),
		defineField({
			name: 'role',
			type: 'string',
			validation: (Rule) => Rule.required()
		})
	],
	preview: {
		select: {
			title: 'name',
			media: 'image'
		}
	}
});
