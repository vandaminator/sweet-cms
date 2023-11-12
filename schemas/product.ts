import {defineType, defineField, defineArrayMember} from 'sanity'

export const Icecream = defineType({
  title: "Ice-cream",
  name: "Ice-cream",
  type: "document",
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
    }),
    defineField({
      title: "Price",
      name: "price",
      type: "number",
    }),
    defineField({
      title: "Images",
      name: "images",
      type: "array",
      of: [{type: "image"}]
    }),
    defineField({
      title: "Tags",
      name: "tags",
      type: "array",
      of: [{type: "reference", to: [{type: "Tag"}]}]
    }),
  ]
})

