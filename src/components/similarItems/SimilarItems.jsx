"use client"
import React, { useRef } from 'react'
import ProductCard from '../productCard/ProductCard'
import NextButton from '../nextButton/NextButton';

const productItems = [
  { img: "/home_icons/product_7.svg" },
  { img: "/home_icons/product_6.svg", offer: "25% OFF" }, 
  { img: "/home_icons/product_5.svg", offer: "10% OFF" },
  { img: "/home_icons/product_4.svg" , offer: "25% OFF"}, 
  { img: "/home_icons/product_4.svg", offer: "15% OFF" },
  { img: "/home_icons/product_4.svg" , offer: "25% OFF"}, 
];

const SimilarItems = () => {
  const scrollContainerRef = useRef(null);

 const scrollNext = () => {
  const cardWidth = scrollContainerRef.current?.firstChild.offsetWidth + 16;
  scrollContainerRef.current?.scrollBy({
    left: cardWidth,
    behavior: 'smooth',
  });
}

const scrollPrev = () => {
  const cardWidth = scrollContainerRef.current?.firstChild.offsetWidth + 16;
  scrollContainerRef.current?.scrollBy({
    left: -cardWidth,
    behavior: 'smooth',
  });
}

  return (
    <>
      <div className='mt-20 flex flex-col gap-4'>
        <div className="text-[#020202] flex flex-col font-semibold text-2xl">
          <span>Similar Items</span>
          <span className="w-12 h-1 bg-[#BE968E] mt-2"></span>
        </div>

        <div 
          ref={scrollContainerRef} 
          className='flex gap-4 overflow-x-hidden pb-4'
        >
             {productItems.map((item, idx) => (
                <div key={idx} className='flex-shrink-0'>
                <ProductCard img={item.img} offer={item.offer} />
                </div>
          ))}
        </div>
      </div>

      <div className='flex justify-center px-4 gap-4 items-center mt-4'>
        <NextButton
          bgClass="bg-[#C4C4C4]"
          img="/home_icons/black_previous.svg"
          onClick={scrollPrev} 
        />
        <NextButton
          bgClass="bg-[#BE968E]"
          img="/home_icons/next.svg"
          onClick={scrollNext} 
        /> 
      </div>  
    </>
  )
}

export default SimilarItems
