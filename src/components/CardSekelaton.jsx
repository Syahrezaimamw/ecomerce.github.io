import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export const CardSekelaton = () => {
    return (
        <div className='relative w-[240px]'>
            <div className='w-full overflow-hidden rounded-lg'>
                <Skeleton variant="rounded" width={400} height={220} />
            </div>
            <div className='w-full overflow-hidden'>

            <Skeleton variant="" width={300} height={20}  className='mt-4' />          
            </div>
            <div className='w-full overflow-hidden'>

            <Skeleton variant="" width={300} height={20}  className='mt-2' />          
            </div>
            <div className='w-full overflow-hidden'>

            <Skeleton variant="" width={300} height={30}  className='mt-7' />          
            </div>
            {/* <Skeleton variant="" width={40} height={40} />       */}
            {/* <Skeleton variant="" width={40} height={40} /> */}
                    </div>
    )
}
