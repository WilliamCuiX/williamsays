import { getSortedPostsData } from '@/lib/posts'
import { NextResponse } from 'next/server'

export async function GET() {
  const posts = await getSortedPostsData()
  return NextResponse.json(posts)
} 