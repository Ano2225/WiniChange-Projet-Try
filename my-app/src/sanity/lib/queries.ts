import { client } from './client'

export async function getLatestPosts(limit = 3) {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      description,
      mainImage {
        asset-> {
          _ref,
          url
        }
      },
      slug,
      "category": category->{
        _id,
        title
      },
      readTime,
      publishedAt
    }
  `, { limit: limit - 1 })
}

export async function getAllPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      description,
      mainImage {
        asset-> {
          _ref,
          url
        }
      },
      slug,
      "category": category->{
        _id,
        title
      },
      readTime,
      publishedAt
    }
  `)
}

export async function getAllCategories() {
  return client.fetch(`
    *[_type == "category"] {
      _id,
      title
    }
  `)
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