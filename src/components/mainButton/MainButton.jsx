import Image from 'next/image'
import React from 'react'

const MainButton = ({img ,BtnName}) => {
  return (
     <button
          className={`rounded-xl px-8 py-4 text-white gap-2 flex items-center justify-center bg-[#BE968E]`}
        >
           <span>{BtnName}</span> 
          <Image src={img} alt="img" width={24} height={24} />
        </button>
  )
}

export default MainButton