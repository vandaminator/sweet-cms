import {defineField, defineType} from 'sanity'

export const Tag = defineType({
  name: 'Tag',
  type: 'document',
  description: "e.g strawberry, sweets, chocolate",
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: "Name of the tag",
      validation: Rule => Rule.required(),
    }),
  ],
})
