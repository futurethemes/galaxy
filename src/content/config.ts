import { defineCollection } from 'astro:content'
import {
    PagesSchema
} from '@futurethemes/galaxy/schema'

export const collections = {
	pages: defineCollection({
		type: 'content',
		schema: PagesSchema,
	}),
}
