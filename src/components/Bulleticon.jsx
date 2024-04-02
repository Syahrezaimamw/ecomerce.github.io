import React from 'react'

export const Bulleticon = ({children}) => {
  return (
    <div className='size-[40px] hover:bg-black hover:border-black cursor-pointer group rounded-full bg-white border-[1px] border-[rgba(0,0,0,0.2)] flex justify-center items-center '>{children}</div>
  )
}
