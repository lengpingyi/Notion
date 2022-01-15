import { getGlobalNotionData } from '@/lib/notion/getNotionData'
import React from 'react'
import { LayoutCategory } from '@/themes'

export default function Category (props) {
  return <LayoutCategory {...props} />
}

export async function getStaticProps ({ params }) {
  const from = 'category-props'
  const category = params.category
  const {
    allPosts,
    categories,
    tags,
    postCount,
    latestPosts
  } = await getGlobalNotionData({ from })
  const filteredPosts = allPosts.filter(
    post => post && post.category && post.category.includes(category)
  )
  return {
    props: {
      tags,
      posts: filteredPosts,
      category,
      categories,
      postCount,
      latestPosts
    },
    revalidate: 1
  }
}

export async function getStaticPaths () {
  const from = 'category-paths'
  const { categories } = await getGlobalNotionData({ from })
  return {
    paths: Object.keys(categories).map(category => ({ params: { category } })),
    fallback: true
  }
}
