"use client"
import Image from "next/image";
import React, { useState } from "react";
import NextButton from "../nextButton/NextButton";
import NextLine from "../nextLine/NextLine";
import Card from "../card/Card";
import FavButton from "../favButton/FavButton";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import ColorButton from "../colorButton/ColorButton";
import MainButton from "../mainButton/MainButton";

const ProductDetails = () => {
  const material = [
    { value: "cotton", label: "Cotton" },
    { value: "polyester", label: "Polyester" },
    { value: "linen", label: "Linen" },
  ];

  const sizes = [
    { value: "2xl", label: "2xl" },
    { value: "lg", label: "lg" },
    { value: "3xl", label: "3xl" },
  ];

  const colors = [
    { color: "#D90202", label: "Red" },
    { color: "#B8CCDA", label: "Blue" },
    { color: "#988755", label: "Brown" },
    { color: "#7198C8", label: "Dark Blue" },
    { color: "#5D5D5B", label: "Gray" },
  ];

  const [count, setCount] = useState(0);
  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [type, setType] = useState("cotton");
  const [size, setSize] = useState("2xl");

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-5">
  {/* Left section */}
  <section className="flex flex-col items-center md:items-start w-full md:w-auto">
    <div className="bg-[#F5F5F5] rounded-3xl flex flex-col gap-4 py-2 justify-center w-full md:w-auto"
      style={{
        background: "linear-gradient(180deg, #0000004D 10%, #F4F4F433 30%)",
        zIndex: 10,
      }}
    >
      {/* Progress lines */}
      <div className="flex gap-2 items-center justify-center px-4 pt-4">
        {[...Array(4)].map((_, index) => (
          <NextLine
            key={index}
            colorClass={index === 1 ? "border-[#FFFFFF]" : "border-[#D4D4D4]"}
          />
        ))}
      </div>

      {/* Carousel */}
      <div className="flex justify-between px-4 items-center relative w-full">
        <NextButton bgClass="bg-[#C4C4C4]" img="/home_icons/previous.svg" />

        <div className="relative w-[305px] md:w-auto">
          <Image
            src="/home_icons/product.svg"
            alt="overlay"
            width={305}
            height={514}
            className="rounded-xl object-cover"
          />
        </div>

        <NextButton bgClass="bg-[#BE968E]" img="/home_icons/next.svg" />
      </div>
    </div>

    {/* Thumbnails */}
    <div className="grid grid-cols-3 gap-2 mt-2 w-full md:w-auto">
      <Card bgClass="bg-[#F5F5F5]" img="/home_icons/product_1.svg" />
      <Card bgClass="bg-[#F5F5F5]" img="/home_icons/product_2.svg" />
      <div className="relative">
        <Card bgClass="bg-[#F5F5F5]" img="/home_icons/product_3.svg" />
        <div className="absolute inset-0 bg-[#020202B2] rounded-3xl flex items-center justify-center">
          <span className="text-white text-[32px] font-bold">+2</span>
        </div>
      </div>
    </div>

    <Image
      src="/home_icons/white_logo.svg"
      alt="overlay"
      width={98}
      height={57}
      className="p-2"
    />
  </section>

  {/* Right section */}
  <section className="flex flex-col gap-4 w-full md:w-auto items-center md:items-start">
    {/* Header */}
    <div className="flex justify-between w-full md:w-auto">
      <div className="border border-[#BE968E] flex justify-center items-center text-[#BE968E] px-4 py-2 rounded-3xl">
        T-Shirt
      </div>
      <div className="flex items-center gap-2">
        <FavButton img="/home_icons/bag-add.svg" />
        <FavButton img="/home_icons/love_add.svg" />
      </div>
    </div>

    {/* Description */}
    <div className="flex flex-col gap-4 text-left w-full">
      <p className="text-2xl font-medium">
        J.VER Man Shirts Solid Long Sleeve Stretch <br /> Wrinkle-Free With Blue
      </p>
      <div>
        <span>$300.00</span>{" "}
        <span className="line-through text-[#8A8A8A]">$360.00</span>
        <p>This price is exclusive of taxes.</p>
      </div>
      <p>
        Lorem ipsum dolor sit, consectetuer adipiscing elit, sed diam nonummy
        <br /> Lorem ipsum dolor sit amet, diam nonummy
      </p>
    </div>

    <span className="border border-[#E6E6E6] w-full"></span>

    {/* Select Type & Size */}
    <div className="flex flex-col gap-4 w-full md:w-[300px]">
      <TextField
        select
        label="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        variant="outlined"
        fullWidth
        size="medium"
        sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
      >
        {material.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        variant="outlined"
        fullWidth
        size="medium"
        sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
      >
        {sizes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>

    {/* Colors */}
    <div className="flex flex-col gap-2 w-full">
      <p className="text-[#020202] font-medium text-[20px] text-left">Colors</p>
      <div className="flex gap-2 justify-start">
        {colors.map((c) => (
          <ColorButton
            key={c.color}
            color={c.color}
            label={c.label}
            selected={selectedColor.color === c.color}
            onClick={() => setSelectedColor(c)}
          />
        ))}
      </div>
    </div>

    {/* Quantity & Price */}
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
        <div className="flex gap-2 items-center flex-row w-full md:w-auto">
          <div className="flex justify-center gap-7 w-[184px] items-center py-2 px-2 rounded-2xl bg-[#F5F5F5]">
            <button
              onClick={decrease}
              className="bg-[#FFFFFF] text-3xl w-10 h-10 rounded-lg text-[#B0B0B0]"
            >
              <span>-</span>
            </button>
            <span className="text-2xl text-[#333333] font-medium">{count}</span>
            <button
              onClick={increase}
              className="bg-[#FFFFFF] w-10 h-10 text-3xl text-[#000000] rounded-lg"
            >
              <span>+</span>
            </button>
          </div>

          <span className="text-[#020202] font-medium text-[20px] text-center ">$300.00</span>
        </div>

        <MainButton img="/home_icons/bag_button.svg" BtnName="Add To Cart" className="w-full md:w-auto" />
      </div>
    </div>
  </section>
</div>

  );
};

export default ProductDetails;
