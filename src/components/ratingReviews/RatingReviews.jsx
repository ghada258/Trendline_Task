import React from 'react'
import MainButton from '../mainButton/MainButton'
import RatingLine from '../ratingLine/RatingLine'
import Review from '../review/Review';
import Image from 'next/image';

const ratingsData = [
  { num: 5, percentage: 67 },
  { num: 4, percentage: 15 },
  { num: 3, percentage: 6 },
  { num: 2, percentage: 3 },
  { num: 1, percentage: 9 },
];

const RatingReviews = () => {
  return (
    <>
      <div className="text-[#020202] flex flex-col font-semibold text-2xl">
        <span>Rating & Reviews</span>
        <span className="w-12 h-1 bg-[#BE968E] mt-2"></span>
      </div>
      <div className="flex flex-col gap-10">
        <section className="flex items-center gap-7">
          <div>
            <span className="text-[120px]">4,5</span>{" "}
            <span className="text-[#B0B0B0] text-2xl">/5</span>
          </div>

          <div className="flex flex-col gap-3">
            {ratingsData.map((item) => (
              <RatingLine
                key={item.num}
                num={item.num}
                percentage={item.percentage}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4 justify-center items-center ml-auto">
            <span className="text-[#545454] text-base">Total Reviews</span>
            <span className="text-6xl font-semibold mb-4">3.0K</span>
            <MainButton img="/home_icons/chat.svg" BtnName="Add Comment" />
          </div>
        </section>

        <section className="flex flex-col gap-6">
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className="pb-6 border-b border-[#F4F7F9] last:border-b-0"
            >
              <Review />
            </div>
          ))}
        </section>
      </div>
      <div className='flex gap-5'>
        <Image
          src="/home_icons/white_logo.svg"
          alt="overlay"
          width={98}
          height={57}
          className="p-2"
        />
        <button
          className={`rounded-xl text-sm mx-auto font-semibold px-7  text-[#BE968E] flex items-center justify-center bg-[#F5F5F5]`}
        >
          <span>View More Comments</span>
        </button>
      </div>
    </>
  );
}

export default RatingReviews