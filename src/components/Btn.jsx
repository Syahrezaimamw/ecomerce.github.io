import React from 'react'

export const Btn = ({children,onClick}) => {
  return (
    <div onClick={onClick} className='px-10 py-2 text-[14px] cursor-pointer font-medium border-2 border-gray-200 rounded-full text'>{children}</div>
  )
}
 