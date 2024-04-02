import React from 'react'

export const Listfooter = ({judul,children}) => {
  return (
    <div>
        <h1 className='text-lg font-medium'>{judul}</h1>
        <ul className='flex flex-col gap-3 mt-4'>
            {
                children.map((a)=>(
                    <li key={a} className='text-[rgba(0,0,0,0.6)] text-[15px]'>{a}</li>
                ))
            }
        </ul>
    </div>
  )
}
