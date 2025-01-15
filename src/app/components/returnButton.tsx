import React, { JSX } from 'react'
import Link from 'next/link'

const returnButton =({link} : {link : string}) : JSX.Element => {
  const arrow = "<"
  return (
    <div className='hover:animate-pulse fixed m-2 z-10 hover:scale-125 duration-500 text-ColorPalete_4 shadow-xl bg-ColorPalete_2 w-fit px-4 cursor-pointer font-bold py-2.5 rounded-full'>
      <Link href={link}>
        {arrow}
      </Link>
    </div>
  )
}

export default returnButton
