import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPostIds, getPostData } from '@/lib/posts'
import { Layout } from '@/components/layout'
import { Suspense } from 'react'

export async function generateStaticParams() {
  const paths = getAllPostIds()
  return paths
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id)
  
  return (
    <Layout>
      <article className="container mx-auto px-4 py-12 prose dark:prose-invert lg:prose-xl">
        <h1>{postData.title}</h1>
        <div className="text-gray-500 mb-4">
          {new Date(postData.date).toLocaleDateString()}
        </div>
        {postData.tags && (
          <div className="flex gap-2 mb-8">
            {postData.tags.map((tag) => (
              <span key={tag} className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
        <Suspense fallback={<div>Loading...</div>}>
          <MDXRemote source={postData.content} />
        </Suspense>
      </article>
    </Layout>
  )
} 