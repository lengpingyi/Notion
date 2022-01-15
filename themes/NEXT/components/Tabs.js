import React, { useState } from 'react'

/**
 * Tabs切换标签
 * @param {*} param0
 * @returns
 */
const Tabs = ({ children }) => {
  if (!children) {
    return <></>
  }

  let count = children.length
  children.forEach(e => {
    if (!e) {
      count--
    }
  })

  if (count === 1) {
    return <section className='duration-200'>
      {children}
    </section>
  }

  const [currentTab, setCurrentTab] = useState(0)
  function tabClickHandle (i) {
    setCurrentTab(i)
  }

  return (
    < >
      {<div className='hidden lg:block mb-5 bg-white dark:bg-gray-800 duration-200'>
        <ul className='flex justify-center space-x-5 pb-4 dark:text-gray-400 text-gray-600'>
          {children.map((item, index) => {
            return <li key={index} className={(currentTab === index ? 'font-black border-b-2 border-red-400 text-red-400 animate__animated animate__jello ' : 'font-extralight cursor-pointer') + ' text-sm font-sans '} onClick={() => { tabClickHandle(index) }}>
              {item?.key}
            </li>
          })}
        </ul>
        {children.map((item, index) => {
          return <section key={index} className={`${currentTab === index ? 'block animate__animated animate__fadeIn animate__faster' : 'hidden'}`}>
              {item}
            </section>
        })}
      </div>}

    </>)
}

export default Tabs
