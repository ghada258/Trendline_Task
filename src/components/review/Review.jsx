import Image from 'next/image'
import React from 'react'

const Review = () => {
  return (
    <div className='flex flex-col gap-6'>
        <div className='flex items-center gap-3'>
            <span className='text-[#000000] text-xl font-semibold'>Alex Daewn</span>
            
        <div className="flex gap-1">
            {[...Array(4)].map((_, idx) => (
                <div key={idx} >
                <Image
                    src="/home_icons/star.svg"
                    alt="star"
                    width={20}
                    height={20}
                />
                </div>
            ))}
            <div>
                <Image
                src="/home_icons/unratedStar.svg"
                alt="half-star"
                width={20}
                height={20}
                />
            </div>
           
            </div>
             <span className='text-sm text-[#545454] ml-auto'>4 months ago</span>
        </div>
        <div className='text-base'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed </div>
    </div>
  )
}

export default Review