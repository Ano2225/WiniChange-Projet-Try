import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Articles',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'reference',
      to: [{ type: 'category' }]
    }),
    defineField({
      name: 'readTime',
      title: 'Temps de lecture',
      type: 'string',
      initialValue: '5 min'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    })
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category.title',
      media: 'mainImage'
    },
    prepare({ title, category, media }) {
      return {
        title,
        subtitle: category ? `📁 ${category}` : '⚠️ Pas de catégorie',
        media
      }
    }
  }
})


