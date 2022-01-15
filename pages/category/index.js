import { getGlobalNotionData } from '@/lib/notion/getNotionData'
import React from 'react'
import { LayoutCategoryIndex } from '@/themes'

export default function Category (props) {
  return <LayoutCategoryIndex {...props}/>
}

export async function getStaticProps () {
  const from = 'category-index-props'
  const { allPosts, categories, tags, postCount, latestPosts } = await getGlobalNotionData({ from })

  return {
    props: {
      tags,
      allPosts,
      categories,
      postCount,
      latestPosts
    },
    revalidate: 1
  }
}
