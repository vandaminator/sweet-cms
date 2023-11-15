import {defineField, defineType} from 'sanity'

export const Category = defineType({
  name: 'Category',
  type: 'document',
  description: "e.g Snack, ice-cream, bakery",
  fields: [
    defineField({
      name: 'name',
      title: "Name",
      type: 'string',
      validation: Rule => Rule.required(),
    }),
  ],
})
