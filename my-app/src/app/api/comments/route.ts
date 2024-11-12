import { client } from '@/sanity/lib/client'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, comment, postId } = await req.json()

    const doc = {
      _type: 'comment',
      name,
      email,
      comment,
      post: {
        _type: 'reference',
        _ref: postId
      },
      publishedAt: new Date().toISOString()
    }

    const result = await client.create(doc)

    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json({ error: 'Error creating comment' }, { status: 500 })
  }
}