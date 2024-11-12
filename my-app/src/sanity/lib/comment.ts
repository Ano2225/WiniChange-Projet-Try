import { client } from './client'

interface CommentData {
  name: string
  email: string
  content: string
  postId: string
}

export async function createComment(data: CommentData) {
  try {
    const comment = await client.create({
      _type: 'comment',
      name: data.name,
      email: data.email,
      content: data.content,
      post: {
        _type: 'reference',
        _ref: data.postId
      },
      createdAt: new Date().toISOString(),
      isApproved: false
    })
    return { success: true, comment }
  } catch (error) {
    console.error('Error creating comment:', error)
    return { success: false, error }
  }
}

export async function getComments(postId: string) {
  return client.fetch(`
    *[_type == "comment" && post._ref == $postId && isApproved == true] | order(createdAt desc) {
      _id,
      name,
      content,
      createdAt
    }
  `, { postId })
}