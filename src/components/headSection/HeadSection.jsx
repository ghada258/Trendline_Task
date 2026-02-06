import Image from 'next/image'
import React from 'react'

const HeadSection = () => {
  return (
 <div className="relative w-full">
  <Image
    src="/home_icons/product_details_background.svg"
    alt="background"
    width={1440}
    height={100}
    className="w-full h-50 object-cover"
    priority
  />

  <div className="absolute inset-0 flex items-center justify-center">
    
    <Image
      src="/home_icons/Product_Details.svg"
      alt="overlay"
      width={628}
      height={200}
      className="z-20"
    />

    <p className="absolute z-30 font-semibold text-[32px] text-black">
      Product Details
    </p>
  </div>
</div>

  )
}

export default HeadSection