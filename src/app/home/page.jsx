import Footer from '@/components/footer/Footer'
import HeadSection from '@/components/headSection/HeadSection'
import HomePath from '@/components/homePath/HomePath'
import Navbar from '@/components/navbar/Navbar'
import ProductDetails from '@/components/productDetails/ProductDetails'
import RatingReviews from '@/components/ratingReviews/RatingReviews'
import SimilarItems from '@/components/similarItems/SimilarItems'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='font-Poppins'>
     <Navbar/>
     <HeadSection/>
     <div className='flex justify-center mt-4'>
      <HomePath/>
     </div>
     <div className='mx-32 flex flex-col gap-5'>
      <ProductDetails/>
      <div className=' mr-40'> 
      <RatingReviews/>
      </div>
     </div>
     <div className='ml-32 flex flex-col gap-5'>
         <SimilarItems />
     </div>
     <Footer/>
     
   
   



    </div>
  )
}

export default Home