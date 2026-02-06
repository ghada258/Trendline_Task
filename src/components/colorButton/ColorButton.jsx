"use client";
import React from "react";

const ColorButton = ({ color, selected, onClick ,label }) => {
  return (
    <>
    <div className="flex flex-col gap-1">
    <button
      type="button"
      onClick={onClick}
      className={` h-14 w-14 rounded-full flex items-center justify-center bg-[#F4F7F9] transition ${selected ? "border-2 border-black" : "border border-transparent"}  `}
    >
      <div
        className="h-8 w-8 rounded-full"
        style={{ backgroundColor: color }}
      />
    </button>
      {selected && (
        <span className="text-sm text-black font-medium">
          {label}
        </span>
      )}
      </div>
    </>
    
  );
};

export default ColorButton;
