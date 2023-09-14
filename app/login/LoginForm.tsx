"use client";
import Input from "../component/input/Input";
import { useState } from "react";
import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import { Black_Ops_One } from "next/font/google";
import { AiOutlineGoogle } from "react-icons/ai";

const blackOps = Black_Ops_One({ subsets: ["latin"], weight: ["400"] });

const LoginForm = () => {
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setisLoading(true);
    console.log(data);
  };
  return (
    <>
      <div className="flex gap-2  items-center">
        <span className="text-xl text-slate-700 font-bold"> Sign in</span>
        <span
          className={`${blackOps.className} text-2xl font-bold  text-orange-600`}
        >
          StripCart
        </span>
      </div>
      <button
        className="
        w-full
        flex
        gap-2
        disabled:opacity-70 
        disabled:cursor-not-allowed
        rounded
        hover:opacity-50
        transition
        text-slate-700
        border-slate-700
        border-[1.25px]
        items-center
        justify-center
        font-semibold
        px-3
        py-4
        active:translate-y-2"
      >
        <AiOutlineGoogle size={24} /> Sign in with Google
      </button>
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <button
        className="disabled:opacity-70 
        disabled:cursor-not-allowed
        rounded
        hover:opacity-50
        transition
        text-white
        border-slate-700
        items-center
        justify-center
        bg-slate-700
        w-[300px]
        px-3
        py-4
        active:translate-y-2
        "
        onClick={handleSubmit(onSubmit)}
      >
        Sign in
      </button>
      <p className="text-slate-400 text-sm">
        Don't have an account?{" "}
        <a href="/register" className="underline text-blue-500">
          Login
        </a>
      </p>
    </>
  );
};

export default LoginForm;
