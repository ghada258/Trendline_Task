"use client";
import React, { useState } from "react";

const AuthForm = ({
  title,
  subtitle,
  buttonText,
  onSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  mobile,
  setMobile,
  countryCode,
  setCountryCode,
  error,
  showName = false,
  showMobile = false,
  showCountryCode = false,
  children,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full bg-cover bg-center min-h-screen flex justify-center items-center">
      <div className="bg-white w-[420px] rounded-xl text-center py-6 px-8">
        {/* Title */}
        <div>
          <h1 className="font-bold text-2xl text-[#BE968E]">{title}</h1>
          <p className="text-gray-400">{subtitle}</p>
        </div>

        {/* Logo */}
        <img
          src="/home_icons/logo.svg"
          alt="logo"
          className="sm:w-10 md:w-20 mt-4 mx-auto"
        />

        {/* Form */}
        <form onSubmit={onSubmit} className="w-full space-y-4 mt-4">
          {/* Name */}
          {showName && (
            <div>
              <label className="block text-left pl-2 text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ghada Elsayed"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-left pl-2 text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-left pl-2 text-gray-700 font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="************"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2"
              >
                {showPassword ? (
                  // Eye Open SVG
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ) : (
                  // Eye Closed SVG
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3l18 18M10.477 10.477a3 3 0 104.046 4.046M21.542 12c-1.274 4.057-5.065 7-9.542 7-1.857 0-3.568-.61-4.95-1.63M2.458 12C3.732 7.943 7.523 5 12 5c1.857 0 3.568.61 4.95 1.63"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile */}
          {showMobile && (
            <div>
              <label className="block text-left pl-2 text-gray-700 font-medium mb-1">
                Mobile
              </label>
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="0501234567"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          )}

          {/* Country Code */}
          {showCountryCode && (
            <div>
              <label className="block text-left pl-2 text-gray-700 font-medium mb-1">
                Country Code
              </label>
              <input
                type="text"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                placeholder="971"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          )}

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#BE968E] hover:bg-[#ba9993] text-white font-semibold py-2 rounded-lg mt-2"
          >
            {buttonText}
          </button>
        </form>

        {/* Children (for Login/Sign Up links) */}
        {children}
      </div>
    </div>
  );
};

export default AuthForm;
