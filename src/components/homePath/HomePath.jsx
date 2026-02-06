import Image from 'next/image'
import React from 'react'

const HomePath = () => {
  return (
      <section className='bg-[#ECECEC66] rounded-2xl w-7xl text-base'>
         <div className='flex items-center gap-2 py-2 px-4'>
            <span>Home</span>
             <Image
                  src="/home_icons/Back.svg"
                  alt="overlay"
                  width={7}
                  height={7}
             />
             <span>Our Category</span>
              <Image
                  src="/home_icons/Back.svg"
                  alt="overlay"
                  width={7}
                  height={7}
             />
             <span className='text-[#8A8A8A]'>Product Details</span>
         </div>
     </section>
  )
}

export default HomePath