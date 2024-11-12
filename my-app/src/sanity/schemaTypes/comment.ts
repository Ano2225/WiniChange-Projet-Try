import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Commentaires',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email()
    }),
    defineField({
      name: 'content',
      title: 'Commentaire',
      type: 'text',
      validation: Rule => Rule.required().min(10)
    }),
    defineField({
      name: 'post',
      title: 'Article',
      type: 'reference',
      to: [{ type: 'post' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'createdAt',
      title: 'Date de création',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }),
    defineField({
      name: 'isApproved',
      title: 'Approuvé',
      type: 'boolean',
      initialValue: false
    })
  ],
  preview: {
    select: {
      title: 'name',
      post: 'post.title',
      approved: 'isApproved',
      email: 'email'
    },
    prepare({ title, post, approved, email }) {
      return {
        title: `${title} (${email})`,
        subtitle: `${approved ? '✅' : '⏳'} ${post || 'Article non spécifié'}`
      }
    }
  }
})