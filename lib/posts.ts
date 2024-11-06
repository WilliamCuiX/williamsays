'use server'

import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface PostData {
  id: string
  title: string
  date: string
  description: string
  content: string
  coverImage?: string
  tags?: string[]
}

export async function getAllPostIds() {
  const fileNames = await fs.readdir(postsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = await fs.readFile(fullPath, 'utf8')

  // 使用 gray-matter 解析 markdown 文件的元数据
  const matterResult = matter(fileContents)

  const date = new Date(matterResult.data.date).toISOString()

  return {
    id,
    content: matterResult.content,
    date,
    ...(matterResult.data as { title: string; description: string; coverImage?: string; tags?: string[] })
  }
}

export async function getSortedPostsData(): Promise<PostData[]> {
  const fileNames = await fs.readdir(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, '')
      return getPostData(id)
    })
  )

  // 按日期排序
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
} 