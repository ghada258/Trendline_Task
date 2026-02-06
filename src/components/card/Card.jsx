import Image from 'next/image'
import React from 'react'

const Card = ({ bgClass, img }) => {
  return (
   <div
         className={`rounded-3xl flex items-center justify-center ${bgClass}`}
       >
         <Image src={img} alt="icon" width={142} height={142} />
       </div>
  )
}

export default Card