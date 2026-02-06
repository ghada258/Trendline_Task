import Image from 'next/image'
import React from 'react'

const productItems = [
  { img: "/home_icons/facebook.svg" },
  { img: "/home_icons/twitter.svg"}, 
  { img: "/home_icons/insta.svg"},
  { img: "/home_icons/linkenin.svg"}, 
  { img: "/home_icons/whatsapp.svg" },
  { img: "/home_icons/telegram.svg" }, 
];

const Footer = () => {
  return (
    <div className="relative w-full h-[323px] mt-6">
    
      <Image
        src="/home_icons/footerImg.svg"
        alt="background"
        width={1440}
        height={323}
        className="w-full h-[323px] object-cover"
        priority
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-[#020202] opacity-50"></div>  
      <div className="absolute inset-0 flex  py-10 justify-around items-center">
        
        <div className="z-30 text-white flex flex-col gap-4 max-w-[324px]">
          <Image
            src="/home_icons/footerLogo.svg"
            alt="logo"
            width={66}
            height={51}
          />

          <p className='text-sm text-[#FFFFFFB2] font-medium leading-5'>
            Ipsam in eos qui consequatur ab cum maxime. Soluta dolor quae. Ipsam in eos qui consequatur ab. Soluta dolor quae. Ipsam in eos qui consequatur ab cum maxime. Soluta dolor quae.
          </p>
        </div>

        {/* Let Us Help */}
        <div className='flex flex-col gap-3'>
          <span className='font-semibold text-2xl text-white'>Let Us Help</span>
          <ul className='font-medium text-[#FFFFFFB2] flex flex-col gap-1'>
            <li>My Account</li>
            <li>FAQs</li>
            <li>Categories</li>
            <li>All Products</li>
          </ul>
        </div>

        {/* Policies */}
        <div className='flex flex-col gap-3'>
          <span className='font-semibold text-2xl text-white'>Policies</span>
          <ul className='font-medium text-[#FFFFFFB2] flex flex-col gap-1'>
            <li>Refund Policy</li>
            <li>About Us</li>
            <li>Cancellation Policy</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Send Email & Follow Us */}
        <div className='flex flex-col gap-3 w-[369px]'>
          <span className='font-semibold text-2xl text-white'>Send Email</span>
          <div className="flex gap-2 bg-white p-2 rounded-xl">
            <input 
                type="text" 
                placeholder="Email address" 
                className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none w-full"
            />
            <button
                className="rounded-xl px-8 py-2 text-white flex items-center justify-center bg-[#BE968E]"
            >
                Send
            </button>
          </div>

          <div>
            <span className='text-white font-semibold text-base'>Follow Us</span>
            <div className='flex gap-3 mt-2'>
              {productItems.map((item, idx) => (
                  <Image
                    key={idx}
                    src={item.img}
                    alt="social icon"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
