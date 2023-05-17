import React from 'react'
import Link from 'next/link'

// these are our own prop types
type Props = {
    category : string;
    isActive: boolean;
}

// {category,isActive}:Props, we did object destructuring which are comming as props
export const NavLink = ({category, isActive} : Props) => {
  return (
    // /news/${category} means whenever we clicked on a specific category will oopen that specific category
    // /news/${category} this category is will come from props
    // navLink is a custom class from global.css
    <Link href={`/news/${category}`} className={`navLink ${isActive && 'underline decoration-orange-400 underline-offset-4 font-bold text-lg'}`}>{category}</Link>
  )
}
