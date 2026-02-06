import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    const homeItems =[
        {
            image:"./home_icons/home.svg",
            name:"Home"
        },
        {
            image:"./home_icons/category.svg",
            name:"Our Category"
        },
        {
            image:"./home_icons/about_us.svg",
            name:"About Us"
        },
        {
            image:"./home_icons/contact_us.svg",
            name:"Contact Us"
        },
        {
            image:"./home_icons/faq_us.svg",
            name:"FAQs"
        }
    ]

     const icons =[
        {
            image:"./home_icons/shopping_bag.svg",
        },
        {
            image:"./home_icons/notification.svg",
        },
        {
            image:"./home_icons/love.svg",
        }
    ]

  return (
    <>
     <div className='flex gap-6 px-12 py-2 items-center justify-between shadow-sm'>
       
    <div className='flex gap-6'>
      <Image src="./home_icons/logo.svg" alt='logo' width={66} height={51}/>
       {homeItems.map((item,key)=>(
          <div key={key} className='flex gap-1 items-center'>
            <Image className='text-[#8A8A8A]' src={item.image} alt='icons' width={20} height={20}/>
            <span className='text-sm text-[#8A8A8A]'>{item.name}</span>
          </div>
       ))}
       </div>

       <div className='flex items-center gap-4'>
          {icons.map((item,key)=>(
          <div key={key} className='flex gap-1 items-center'>
            <Image className='text-[#020202]' src={item.image} alt='icons' width={24} height={24}/>
          </div>
        ))}

        <div className='flex gap-1 items-center'>
            <span className='text-sm text-[#020202]'>EN</span>
            <Image className='text-[#020202]' src="./home_icons/down_arrow.svg" alt='icons' width={24} height={24}/>
          </div>

          <div className='flex gap-1 items-center'>
          <Image className='text-[#020202]' src="./home_icons/user.svg" alt='icons' width={24} height={24}/>
            <Image className='text-[#020202]' src="./home_icons/down_arrow.svg" alt='icons' width={24} height={24}/>
          </div>


       </div>
     </div>
    </>
  )
}

export default Navbar