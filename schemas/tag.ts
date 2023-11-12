import {defineField, defineType} from 'sanity'

export const Tag = defineType({
  name: 'Tag',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      type: 'string',
    }),
  ],
})
