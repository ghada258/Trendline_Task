"use client"
import React, { useState } from 'react'
import FavButton from '../favButton/FavButton';
import Image from 'next/image';

const colors = ["#BE968E", "#333333", "#E8E8E8"];

const ProductCard = ({img ,offer}) => {

  const [isBagFav, setIsBagFav] = useState(false);
  const [isLoveFav, setIsLoveFav] = useState(false);
  return (
    <div className='max-w-[288px] '>
      <section className='border flex flex-col gap-3 border-[#F4F7F9] rounded-[20px] p-3'>

        <div className='flex justify-between items-center'>
            
               {offer && (
              <div className='rounded-lg text-[#BE968E] font-semibold text-[10px] border border-[#4040401A] p-2 flex items-center justify-center'>
                {offer}
              </div>
            )}
         <div className='flex items-center gap-2 ml-auto'>
                      <FavButton
                        img={isBagFav ? "/home_icons/bag-add.svg" : "/home_icons/black_bag.svg"}
                        onClick={() => setIsBagFav(!isBagFav)}
                    />
                    <FavButton
                        img={isLoveFav ? "/home_icons/love_add.svg" : "/home_icons/black_love.svg"}
                        onClick={() => setIsLoveFav(!isLoveFav)}
                    />
                </div>

          </div>      
        <Image src={img} alt="star" width={198} height={198} />
      </section>
      <section className='mt-3 flex flex-col gap-3'>
        <div className='flex justify-between items-center'>
            <span className='text-[#545454] text-xs font-medium'>Dresses</span>
            <div className='flex gap-1 items-center'>
                  <Image src="/home_icons/star.svg" alt="star" width={16} height={16} />
                  <span className='text-[#020202] text-xs font-medium'>4.5</span>
                  <span className='text-[10px] text-[#545454]'>(2910)</span>
            </div>
        </div>
        <div>
            <p className='text-[#020202] font-medium text-sm'>J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..</p>
        </div>
        <div className='flex items-center justify-between'>
            <span className='text-[#020202] text-base font-medium'>AED 900</span>
            <div>
                <div className="flex gap-1">
                    {colors.map((color, idx) => (
                        <div
                        key={idx}
                        className="h-5 w-5 rounded-full"
                        style={{ backgroundColor: color }}
                        />
                    ))}
                    <span className='text-[#020202] text-base font-medium'>+2</span>
                    </div>
                
            </div>
        </div>
      </section>
    </div>
  );
}

export default ProductCard