"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push("/login");
    }
  }, [router]);

  if (!user) {
    return null; 
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-[#BE968E]">
          Welcome, {user.name}
        </h1>
        <p className="text-gray-500 mt-2">
          You have successfully logged in.
        </p>

        <button
          onClick={() => router.push("/home")}
          className="mt-6 bg-[#BE968E] hover:bg-[#ba9993] text-white font-semibold py-2 px-6 rounded-lg transition-all"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
