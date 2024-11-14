import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, message, postId } = data;

    console.log('Received data:', data); 

    if (!name || !email || !message || !postId) {
      return NextResponse.json(
        {
          message: "Tous les champs sont requis",
        },
        { status: 400 }
      );
    }

    const newComment = await client.create({
      _type: "comment",
      name,
      email,
      message,
      post: {
        _type: "reference",
        _ref: postId,
      },
      publishedAt: new Date().toISOString(),
    });

    console.log('Created comment:', newComment); 

    return NextResponse.json(
      { 
        message: "Commentaire créé avec succès", 
        commet: newComment 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { 
        message: "Echec lors de la création du commentaire", 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const postId = url.searchParams.get("postId");

    if (!postId) {
      return NextResponse.json(
        { message: "Post ID est requis" },
        { status: 400 }
      );
    }

    const comments = await client.fetch(`
      *[_type == "comment" && post._ref == $postId] | order(publishedAt desc) {
        _id,
        name,
        email,
        message,
        publishedAt
      }
    `, { postId });

    return NextResponse.json(comments);
    
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { message: "Echec lors de la récupération des commentaires" },
      { status: 500 }
    );
  }
}