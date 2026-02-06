"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Verify = () => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("code", code);

      const res = await fetch(
        "https://tinytales.trendline.marketing/api/auth/verify-email",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await res.json();

      if (data.status) {
        router.push("/dashboard");
      } else {
        setError(data.message || "Invalid verification code");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <>
       <div >
        {/* Logo */}
        <img
          src="/home_icons/logo.svg"
          alt="logo"
          className="sm:w-20 md:w-40 mt-4 mx-auto"
        />
    <form onSubmit={handleVerify} className="flex flex-col gap-3 max-w-sm mx-auto mt-10">
      <input
        type="text"
        placeholder="Enter verification code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-[#BE968E] text-white p-2 rounded">
        Verify
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
    </div>
    </>
  );
};

export default Verify;
