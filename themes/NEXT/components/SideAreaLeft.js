import InfoCard from '@/themes/NEXT/components/InfoCard'
import MenuButtonGroup from '@/themes/NEXT/components/MenuButtonGroup'
import SearchInput from '@/themes/NEXT/components/SearchInput'
import Toc from '@/themes/NEXT/components/Toc'
import { useGlobal } from '@/lib/global'
import React from 'react'
import Tabs from '@/themes/NEXT/components/Tabs'
import BLOG from '@/blog.config'
import Logo from './Logo'
import Card from './Card'

/**
 * 侧边平铺
 * @param tags
 * @param currentTag
 * @param post
 * @param posts
 * @param categories
 * @param currentCategory
 * @param currentSearch
 * @returns {JSX.Element}
 * @constructor
 */
const SideAreaLeft = ({ title, tags, currentTag, post, postCount, categories, currentCategory, currentSearch, targetRef }) => {
  const { locale } = useGlobal()
  const showToc = post && post.toc && post.toc.length > 1
  return <aside id='left' className='hidden lg:block flex-col w-60 mr-4'>

    <section className='w-60'>
      {/* 菜单 */}
      <section className='shadow hidden lg:block mb-5 pb-4 bg-white dark:bg-gray-800 hover:shadow-xl duration-200'>
        <Logo/>
        <div className='pt-2 px-2 font-sans'>
        <MenuButtonGroup allowCollapse={true} postCount={postCount} />
        </div>
        {BLOG.menu.showSearch && <div className='px-2 pt-2 font-sans'>
           <SearchInput currentTag={currentTag} currentSearch={currentSearch} />
        </div>}
      </section>
    </section>

    <Card className='sticky top-4'>
      <Tabs>
          {showToc && (
            <div key={locale.COMMON.TABLE_OF_CONTENTS} className='dark:text-gray-400 text-gray-600 bg-white dark:bg-gray-800 duration-200'>
              <Toc toc={post.toc}/>
            </div>
          )}

          <div key={locale.NAV.ABOUT} className='mb-5 bg-white dark:bg-gray-800 duration-200 py-6'>
            <InfoCard />
            <>
              {/* <div className='px-5 text-sm font-light pb-1 text-gray-600 dark:text-gray-200'><FontAwesomeIcon icon={faChartBar} className='mr-2' />{locale.COMMON.ANALYTICS}</div> */}
              <div className='mt-2 text-center dark:text-gray-300 font-light text-xs'>
                <span className='px-1 '>
                  <strong className='font-medium'>{postCount}</strong>{locale.COMMON.POSTS}</span>
                        <span className='px-1 busuanzi_container_site_uv hidden'>
                | <strong className='pl-1 busuanzi_value_site_uv font-medium'></strong>{locale.COMMON.VISITORS}</span>
                        {/* <span className='px-1 busuanzi_container_site_pv hidden'>
                | <strong className='pl-1 busuanzi_value_site_pv font-medium'></strong>{locale.COMMON.VIEWS}</span> */}
              </div>
            </>
          </div>
      </Tabs>
    </Card>

 </aside>
}
export default SideAreaLeft
