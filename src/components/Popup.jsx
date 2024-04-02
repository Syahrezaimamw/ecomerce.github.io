import React, { useContext } from 'react'
import { Popupp } from '../layout/Home'
export const Popup = () => {
    const {showpop} =useContext(Popupp)

  return (
    <div className={`absolute text-4xl w-full bottom-[30%] text-red-900 flex justify-center `}>
        <div>
            Ditambahkan ke Cart anda
        </div>
    </div>
  )
}

// ${showpop ? 'flex':'hidden'}