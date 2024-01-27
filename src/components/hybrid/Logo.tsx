import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex flex-col items-center'>
        <Image
            alt='Logo'
            src='/vercel.svg'
            style={{ objectFit: 'contain' }}
            width={500}
            height={100}
        />
    </div>
  )
}

export default Logo