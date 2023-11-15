import {defineType, defineField} from 'sanity'

export const Product = defineType({
  title: 'Product',
  name: 'product',
  type: 'document',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Price',
      name: 'price',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{type: 'Category'}],
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'Tag'}]}],
      validation: Rule => Rule.required(),
    }),
  ],
})
