import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Catégories',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nom',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    })
  ]
})
