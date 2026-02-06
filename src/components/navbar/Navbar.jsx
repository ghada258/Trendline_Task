"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const BASE_URL = "https://tinytales.trendline.marketing/api";

  const homeItems = [
    { image: "./home_icons/home.svg", name: "Home" },
    { image: "./home_icons/category.svg", name: "Our Category" },
    { image: "./home_icons/about_us.svg", name: "About Us" },
    { image: "./home_icons/contact_us.svg", name: "Contact Us" },
    { image: "./home_icons/faq_us.svg", name: "FAQs" },
  ];

  const icons = [
    { image: "./home_icons/shopping_bag.svg" },
    { image: "./home_icons/notification.svg" },
    { image: "./home_icons/love.svg" },
  ];

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${BASE_URL}/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
      const data = await res.json();
      console.log("Logout response:", data);

      localStorage.removeItem("token");
      router.push("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 shadow-sm relative">
      {/* Logo + Desktop Menu */}
      <div className="flex items-center gap-6">
        <Image src="./home_icons/logo.svg" alt="logo" width={66} height={51} />

        <div className="hidden md:flex gap-6 items-center">
          {homeItems.map((item, key) => (
            <div key={key} className="flex gap-1 items-center">
              <Image src={item.image} alt="icons" width={20} height={20} />
              <span className="text-sm text-[#8A8A8A]">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Icons */}
      <div className="hidden md:flex items-center gap-4">
        {icons.map((item, key) => (
          <Image key={key} src={item.image} alt="icons" width={24} height={24} />
        ))}

        <div className="flex gap-1 items-center relative">
          <span className="text-sm text-[#020202] cursor-pointer">EN</span>
          <Image src="./home_icons/down_arrow.svg" alt="icons" width={24} height={24} />

          <div className="flex gap-1 items-center relative ml-4">
            <Image
              src="./home_icons/user.svg"
              alt="user"
              width={24}
              height={24}
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="cursor-pointer"
            />
            <Image src="./home_icons/down_arrow.svg"  onClick={() => setUserMenuOpen(!userMenuOpen)} alt="down" width={24} height={24} className="cursor-pointer" />

            {userMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-32 bg-white shadow-lg rounded-md flex flex-col text-black z-50">
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 hover:bg-gray-100 text-left"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <Image src="./home_icons/menu.svg" alt="menu" width={30} height={30} />
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col p-4 gap-4 z-50 md:hidden">
          {homeItems.map((item, key) => (
            <div key={key} className="flex gap-2 items-center">
              <Image src={item.image} alt={item.name} width={20} height={20} />
              <span>{item.name}</span>
            </div>
          ))}

          <div className="flex gap-4 items-center">
            {icons.map((item, key) => (
              <Image key={key} src={item.image} alt="icon" width={24} height={24} />
            ))}
            <div className="flex gap-1 items-center">
              <span>EN</span>
              <Image src="./home_icons/down_arrow.svg" alt="down" width={24} height={24} />
            </div>
            <div className="flex gap-1 items-center relative">
              <Image
                src="./home_icons/user.svg"
                alt="user"
                width={24}
                height={24}
                 onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="cursor-pointer"
              />
              <Image src="./home_icons/down_arrow.svg" onClick={() => setUserMenuOpen(!userMenuOpen)} alt="down" width={24} height={24} className="cursor-pointer" />

              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-32 bg-white shadow-lg rounded-md flex flex-col text-black z-50">
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 hover:bg-gray-100 text-left"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
