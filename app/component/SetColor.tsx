"use client";

import {
  CartProductType,
  SelectedImgtype,
} from "../product/[productId]/ProductDetails";

interface SetColorProps {
  cartProduct: CartProductType;
  images: SelectedImgtype[];
  handleColorSelect: (value: SelectedImgtype) => void;
}

const SetColor: React.FC<SetColorProps> = ({
  cartProduct,
  images,
  handleColorSelect,
}) => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <span className="font-semibold">COLOR:</span>
        <div className="flex gap-1">
          {images.map((image) => {
            return (
              <div
                key={image.color}
                onClick={() => handleColorSelect(image)}
                className={`h-7
            w-7
            rounded-full
            flex
            border-teal-300
            items-center
            justify-center
            ${
              image.color === cartProduct.selectedImg.color
                ? "border-[1.5px]"
                : "border-none"
            }`}
              >
                <div
                  style={{ background: image.colorCode }}
                  className="h-5 w-5 rounded-full border-[1.2px] border-slate-300 cursor-pointer "
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SetColor;
