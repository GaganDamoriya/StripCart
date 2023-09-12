"use client";
interface SetImageProps {
  cartProduct: CartProductType;
  product: any;
  handleSetImage: (value: SelectedImgtype) => void;
}
import Image from "next/image";
import {
  CartProductType,
  SelectedImgtype,
} from "../product/[productId]/ProductDetails";

const SetImage: React.FC<SetImageProps> = ({
  cartProduct,
  product,
  handleSetImage,
}) => {
  return (
    <div
      className="
    grid
    grid-cols-6
    gap-2
     max-h-[500px] 
    min-h-[300px]
    h-full
     sm:min-h-[400px]"
    >
      <div
        className="flex 
      flex-col 
      border 
      justify-center
      gap-4
      cursor-pointer
      max h-[500px]
      min-h-[300px]
      sm:min-h-[400px]
       "
      >
        {product.images.map((image: SelectedImgtype) => {
          return (
            <div
              key={image.color}
              className={`relative w-80%  aspect-square rounded border-teal-500 ${
                cartProduct.selectedImg.color === image.color
                  ? "border-[1.5px]"
                  : "border-none"
              }`}
              onClick={() => {
                handleSetImage(image);
              }}
            >
              <Image
                src={image.image}
                alt={image.color}
                fill
                className="object contain"
              />
            </div>
          );
        })}
      </div>
      <div className="col-span-5 relative aspect-square">
        <Image
          fill
          src={cartProduct.selectedImg.image}
          alt={cartProduct.name}
          className="
          w-full
          object-contain
          max h-[500px]
          min-h-[280px]
          sm:min-h-[400px]
          "
        />
      </div>
    </div>
  );
};

export default SetImage;
