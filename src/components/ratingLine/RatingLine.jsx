"use client"
import Image from 'next/image';
import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 8,
  borderRadius: 5,
  backgroundColor: '#F0F0F0', 
  '& .MuiLinearProgress-bar': {
    borderRadius: 5,
    backgroundColor: '#BE968E', 
  },
}));


const RatingLine = ({num ,percentage}) => {
  return (
       <div className="flex items-center gap-2 w-full">
      <Image
        src="/home_icons/star.svg"
        alt="star"
        width={24}
        height={24}
      />

      <span className="w-4 text-[#545454] font-medium text-xl">{num}</span>

      <div className="w-[363px]">
        <BorderLinearProgress
          variant="determinate"
          value={percentage}
        />
      </div>

      <span className="w-10 text-right flex font-medium text-[#545454] text-xl"><span className='text-[#545454] text-xl'>%</span> {percentage}</span>
    </div>
  );
}

export default RatingLine