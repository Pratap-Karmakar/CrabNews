// as everything inside the app folder is a server side component ans serverside components are not use hook and we have to use hooks in this page so for that we need to convert this page into client side component so for that
'use client'

import React from 'react'
import { categories } from '@/constants'
import { NavLink } from './NavLink'
import { usePathname } from 'next/navigation'


const NavigationLinks = () => {

  const pathname = usePathname();

  const isActive = (path : string) =>{

    // here we are doing, let mysite/news/technology is the path,
    // for path:string this path will asumesd as string [mysite/news/technology]
    // then for split('/') will remove the '/' and divided the whole string into three different string which are [mysite,news,technology]
    // then for pop() will take only the last string which is 'technology'
    // then matches the last string with the selected string then go on
    return pathname?.split('/').pop() === path;
  }

  return (
    <nav className='grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b'>
      {/* then pass the isAticve() as the prop of isActive category */}
       {/* now isActive {isActive(category)} became isActive{isActive(technology)} */}
        {categories.map((category)=>(
            <NavLink key={category} category={category} isActive={isActive(category)}/>
        ))}
    </nav>
  )
}

export default NavigationLinks