"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/authForm/AuthForm";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const res = await fetch(
        "https://tinytales.trendline.marketing/api/auth/login",
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
        setError(data.message || "Invalid email or password");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <AuthForm
      title="Login"
      subtitle="Sign In To Tinytales"
      buttonText="Log In"
      onSubmit={handleLogin}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      error={error}
    >
      <p className="text-sm text-gray-500 mt-4">
        Don’t have an account?{" "}
        <span
          onClick={() => router.push("/register")}
          className="text-[#BE968E] cursor-pointer font-medium"
        >
          Sign Up
        </span>
      </p>
    </AuthForm>
  );
};

export default LoginPage;
