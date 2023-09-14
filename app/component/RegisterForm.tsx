"use client";
import Input from "../component/input/Input";
import { useState } from "react";
import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import { Black_Ops_One } from "next/font/google";
import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setisLoading(true);
    axios
      .post("./api/register", data)
      .then(() => {
        toast.success("Account created");
        signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        }).then((callback) => {
          if (callback?.ok) {
            router.push("./cart");
            router.refresh();
            toast.success("Successfully loggedIn");
          }
          if (callback?.error) {
            toast.error(callback.error);
          }
        });
      })
      .catch(() => {
        toast.error("Something Went wrong");
      })
      .finally(() => {
        setisLoading(false);
      });
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
        <AiOutlineGoogle size={24} /> Sign Up with Google
      </button>
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
        <a href="/login" className="underline text-blue-500">
          Login
        </a>
      </p>
    </>
  );
};

export default RegisterForm;
