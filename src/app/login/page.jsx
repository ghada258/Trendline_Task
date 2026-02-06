"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
        const router = useRouter();
        const [email, setEmail] = useState("");
        const [name , setName] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState("");


        const handleSubmit = async (e) => {
            e.preventDefault();
            setError(""); 

            try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await res.json();

            const userExists = users.some((user) =>(user.email === email && user.name === name));

            if (userExists) {
                localStorage.setItem("username", name);
                router.push("/home");
            } else {
                setError("Invalid email or name");
            }
            } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again later.");
            }
        };
  return (
    <div className="bg-[url('/blue_background.svg')] bg-cover bg-center min-h-screen flex justify-center items-center">
       <div className=' bg-white w-xl  rounded-xl flex-col justify-center items-center text-center py-6 px-8'>
          <div>
            <h1 className='font-bold text-2xl text-[#BE968E]'>Login</h1>
            <p className='text-gray-400'>Sign In To Tinytales </p>
          </div>
           <img src="./home_icons/logo.svg" alt="login" className='sm:w-20  md:w-40 mt-4 mx-auto' />

        <form onSubmit={handleSubmit} className="w-full space-y-4">
             <div className="w-full mb-4">
            <label htmlFor="text" className="block text-left pl-2 text-gray-700 font-medium mb-1"
            >
             Name
            </label>
           <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ghada Elsayed" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"/>
          </div>
          <div className="w-full mb-4">
            <label htmlFor="email" className="block text-left pl-2 text-gray-700 font-medium mb-1">
            Email 
            </label>
           <input type="email" id="email" placeholder="example@email.com" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"  value={email}
              onChange={(e) => setEmail(e.target.value)}/>
          </div>
           <div className="w-full mb-4">
            <label htmlFor="email" className="block text-left pl-2 text-gray-700 font-medium mb-1">
            Password
            </label>
           <input type="password" id="password" placeholder="************" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500" value={password}
              onChange={(e) => setPassword(e.target.value)}/>
          </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
           <button type="submit" className="w-full bg-[#BE968E] hover:bg-[#ba9993] text-white font-semibold py-2 rounded-lg mt-6" >
            Sign In
          </button>
         </form>
          
       </div>
    </div>
  )
}

export default page