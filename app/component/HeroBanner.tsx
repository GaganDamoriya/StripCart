"use client";
import Imag from "./Imag";
// import { motion } from "framer-motion";
// import { useState, useRef } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import imageeArray from "./imageArray";

const HeroBanner: React.FC = () => {
  return (
    <>
      <div className="flex overflow-hidden">
        <div
          className="absolute top-1/3 z-10 left-8 md:top-1/2 cursor-pointer"
          // onClick={() => navigation("left")}
        >
          <BsFillArrowLeftCircleFill size="1.5rem" />
        </div>
        <div className="mt-3 flex justify-evenly gap-2 ">
          {imageeArray.map((image, index) => (
            <Imag srclink={image} />
          ))}
        </div>

        <div
          className="absolute  top-1/3 z-10 right-8 text-lg cursor-pointer md:top-1/2"
          // onClick={() => navigation("right")}
        >
          <BsFillArrowRightCircleFill size="1.5rem" />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
