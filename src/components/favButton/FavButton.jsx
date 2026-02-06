import Image from 'next/image'
import React from 'react'

const FavButton = ({ img ,onClick }) => {
  return (
     <button
         onClick={onClick} className={`rounded-lg cursor-pointer border border-[#4040401A] p-2 flex items-center justify-center `}
        >
          <Image src={img} alt="img" width={20} height={20} />
        </button>
  )
}

export default FavButton