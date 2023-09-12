"use client";
import Input from "../component/input/Input";
import { useState } from "react";
import Register from "./page";
import { error } from "console";
import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import { Black_Ops_One } from "next/font/google";

const blackOps = Black_Ops_One({ subsets: ["latin"], weight: ["400"] });

const RegisterForm = () => {
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
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
        <span className="text-xl text-slate-700 font-bold"> Sign up</span>
        <span
          className={`${blackOps.className} text-2xl font-bold  text-orange-600`}
        >
          StripCart
        </span>
      </div>
      <hr className="bg-slate-200 w-full h-px" />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
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
        Sign Up
      </button>
      <p className="text-slate-400 text-sm">
        Already have an account?{" "}
        <a href="/login" className="underline">
          Login
        </a>
      </p>
    </>
  );
};

export default RegisterForm;
