"use client";

import { truncateText } from "@/app/utils/truncateText";
import { formatPrice } from "@/app/utils/formatPrice";

import Image from "next/image";
import { Rating } from "@mui/material";

interface CarouselProps {
  data: any;
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const productRating =
    data.reviews.reduce((sum: number, item: any) => sum + item.rating, 0) /
    data.reviews.length;

  return (
    <div
      className="col-span-1
    cursor-pointer
    border-[1px]
    border-slate-200
    bg-slate-50
    rounded-sm
    p-2
    transition
    hover:scale-105
    text-sm
    item-center
    text-center
    "
    >
      <div key={data.id} className="flex flex-col  gap-1 w-full">
        <div className="aspect-square overflow-hidden relative">
          <Image
            fill
            src={data.images[0].image}
            alt={data.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div>{truncateText(data.name)}</div>
        <div>
          <Rating value={productRating} readOnly />
        </div>
        <div className="text-gray-400 text-sm italic">
          {data.reviews.length} reviews
        </div>
        <div>{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default Carousel;
