import React from 'react'

export default function Layout({children, className=''}) {
  return (
    <div className={`w-full h-full inline-block z-0 bg-pastel p-32 dark:bg-dark xl:p-24 xl:pt-10 lg:p-16 lg:pt-0 md:p-12 md:pt-0 sm:p-8 sm:mt-16 ${className}`}>
      {children}
    </div>
  )
}
