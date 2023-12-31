"use client";
interface ProductDetailsProps {
  data: any;
}
import { useState, useCallback } from "react";
import { Rating } from "@mui/material";
import SetColor from "@/app/component/SetColor";
import SetImage from "@/app/component/SetImage";
import Quantity from "@/app/component/nav/Quantity";

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: SelectedImgtype;
  quantity: number;
  price: number;
};

export type SelectedImgtype = {
  color: string;
  colorCode: string;
  image: string;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ data }) => {
  const productRating =
    data.reviews.reduce((sum: number, item: any) => sum + item.rating, 0) /
    data.reviews.length;

  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: data.id,
    name: data.name,
    description: data.description,
    category: data.category,
    brand: data.brand,
    selectedImg: { ...data.images[0] },
    quantity: 1,
    price: data.price,
  });
  const handleColorSelect = useCallback(
    (value: SelectedImgtype) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct.selectedImg]
  );

  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) return;
    setCartProduct((prev) => {
      return { ...prev, quantity: --prev.quantity };
    });
  }, [cartProduct]);
  const handleQtyIncrease = useCallback(() => {
    if (cartProduct.quantity === 99) return;
    setCartProduct((prev) => {
      return { ...prev, quantity: ++prev.quantity };
    });
  }, [cartProduct]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <SetImage
        cartProduct={cartProduct}
        product={data}
        handleSetImage={handleColorSelect}
      />
      <div className="flex flex-col gap-1 text-sm text-gray-500">
        <div className="text-3xl font-medium text-slate-700">{data.name}</div>
        <div className="flex items-center gap-5">
          <div>
            <Rating value={productRating} readOnly />
          </div>
          <div className="text-gray-500 text-sm italic">
            {data.reviews.length} reviews
          </div>
          <Horizontal />
        </div>
        <div className="text-justify">{data.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORY: </span>
          {data.category}
        </div>
        <div>
          <span className="font-semibold">BRAND: </span>
          {data.brand}
        </div>
        <div className={data.inStock ? "text-green-400" : "text-red-400"}>
          {data.inStock ? "in Stock" : "Out of Stock"}
        </div>
        <Horizontal />
        <SetColor
          cartProduct={cartProduct}
          images={data.images}
          handleColorSelect={handleColorSelect}
        />
        <Horizontal />
        <Quantity
          isInCart={false}
          cartProduct={cartProduct}
          handleQtyIncrease={handleQtyIncrease}
          handleQtyDecrease={handleQtyDecrease}
        />
        <Horizontal />
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
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
