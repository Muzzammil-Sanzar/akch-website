import React from 'react'

export default function CommonPadding({ children }) {
  return (
    <div className="px-5 sm:px-7 md:px-10 xl:px-20 xl1:px-[136px]">
      {children}
    </div>
  )
}
