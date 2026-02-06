"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/authForm/AuthForm";

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !mobile || !countryCode) {
      setError("Please fill all fields");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirmation", password);
      formData.append("mobile", mobile);
      formData.append("mobile_country_code", countryCode);
      formData.append("type", "client");
      formData.append("fcm_token", "test");

      const res = await fetch(
        "https://tinytales.trendline.marketing/api/auth/register",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        }
      );

      const data = await res.json();

      if (data.status) {

        localStorage.setItem("token", data.data.token);
        localStorage.setItem("user", JSON.stringify(data.data));

        if (data.data.email_verified_at) {
          router.push("/dashboard");
        } else {
          router.push("/verify");
        }
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
   
      <AuthForm
        title="Sign Up"
        subtitle="Create your Tinytales account"
        buttonText="Create Account"
        onSubmit={handleRegister}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        mobile={mobile}
        setMobile={setMobile}
        countryCode={countryCode}
        setCountryCode={setCountryCode}
        showName
        showMobile
        showCountryCode
        error={error}
      >

      <p className="text-sm text-gray-500 mt-4">
        Already have an account?{" "}
        <span
          onClick={() => router.push("/login")}
          className="text-[#BE968E] cursor-pointer font-medium"
        >
          Login
        </span>
      </p>
      </AuthForm>
    
  );
};

export default Register;
