import React from "react";
import Image from "next/image";

const NextButton = ({ bgClass, img ,onClick}) => {
  return (
    <button
     onClick={onClick} className={`rounded-full h-12 w-12 flex items-center justify-center ${bgClass}`}
    >
      <Image src={img} alt="img" width={20} height={20} />
    </button>
  );
};

export default NextButton;
