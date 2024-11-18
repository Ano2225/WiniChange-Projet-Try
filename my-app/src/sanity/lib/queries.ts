import { client } from './client'

export async function getAllPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt asc) {
      _id,
      title,
      description,
      mainImage,
      "slug": slug.current,
      "category": category->{
        title
      },
      readTime,
      publishedAt
    }
  `);
}


export async function getPostComments(postId: string): Promise<Comment[]> {
  return client.fetch(`
    *[_type == "comment" && post._ref == $postId] | order(publishedAt desc) {
      _id,
      name,
      email,
      comment,
      publishedAt
    }
  `, { postId })
}