"use client";
import { CartProductType } from "@/app/product/[productId]/ProductDetails";

interface QuantityProps {
  isInCart: boolean;
  cartProduct: CartProductType;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}
const Quantity: React.FC<QuantityProps> = ({
  isInCart,
  cartProduct,
  handleQtyDecrease,
  handleQtyIncrease,
}) => {
  return (
    <div className="flex gap-2">
      {isInCart ? null : <div className="font-semibold"> QUANTITY: </div>}
      <div className="flex items-center ">
        <button
          className="border-[1.2px] border-slate-300 w-5"
          onClick={handleQtyDecrease}
        >
          -
        </button>

        <div className="w-5 text-center ">{cartProduct.quantity}</div>
        <button
          className="border-[1.2px] border-slate-300 w-5"
          onClick={handleQtyIncrease}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Quantity;
