/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import data from "../data.json";

const ProductDetails = ({ addToCart , increment , decrement , count}) => {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id));

  // Format the price
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0, // No decimals
  }).format(product.price);

  return (
    <div className="">
      <div className="bg-black h-[96px]"></div>

      {/* first container */}
      <div className="px-[165px] pt-[79px]">
        {/* go back button */}
        <button
          className=" font-medium text-[15px] text-black opacity-[50%] hover:text-burnt-orange hover:opacity-[100%]"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>

        {/* content */}
        <div className="flex gap-[124.5px] justify-center items-center">
          {/* Product Image */}

          <img
            src={product.image.desktop}
            alt={product.name}
            className="w-[540px] h-[560px] mt-[56px]"
          />

          {/* product details */}
          <div className="">
            {product.new && (
              <p className="font-regular text-[14px] tracking-[10px] text-burnt-orange">
                NEW PRODUCT
              </p>
            )}
            <h2 className="font-bold text-[40px] text-black tracking-[1.43px] leading-[44px] mt-[35px] ml-[0.5px]">
              {product.name}
            </h2>
            <p className="text-black leading-[25px] tracking-[0] font-medium text-[15px] opacity-[50%] max-w-[445px] ml-[0.5px] my-[32px]">
              {product.description}
            </p>
            <p className="text-black font-bold text-[18px] tracking-[1.29px] ml-[0.5px]">
              {formattedPrice}
            </p>
            <div className="mt-[47px] flex gap-4">
              <div className="w-[120px] h-[48px] bg-light-gray flex justify-between items-center px-[15.5px]">
                {/* Decrease button */}
                <button
                  onClick={decrement}
                  className="font-bold text-[13px] text-black opacity-[25%] tracking-[1px] hover:text-burnt-orange hover:opacity-[100%]"
                >
                  -
                </button>

                {/* Current number */}
                <span className="font-bold text-[13px] text-black tracking-[1px]">
                  {count}
                </span>

                {/* Increase button */}
                <button
                  onClick={increment}
                  className="font-bold text-[13px] text-black opacity-[25%] tracking-[1px] hover:text-burnt-orange hover:opacity-[100%]"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="bg-burnt-orange hover:bg-peach w-[160px] h-[48px] text-white font-bold text-[13px] tracking-[1px]"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
