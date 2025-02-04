/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import data from "../data.json";
import GoBackButton from "../components/GoBackButton";
import { useNavigate } from "react-router-dom";
import ThreeProducts from "../components/ThreeProducts";
import Man from "../components/Man";
import Footer from "../components/Footer";

const ProductDetails = ({ addToCart, increment, decrement, count }) => {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id));
  const navigate = useNavigate();

  // Format the price
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0, // No decimals
  }).format(product.price);

  return (
    <div className="">
      {/* Header */}
      <div className="bg-black  xl:h-[96px] max-xl:h-[90px]  "></div>

      {/* product container */}
      <div className=" bg-off-white">
        <GoBackButton />

        {/* Product Image +  product details  */}
        <div className="flex xl:gap-[124.5px] max-xl:gap-[69px] justify-center items-center h-[560px] px-[165px] ">
          {/* Product Image */}
          <img
            src={product.image.desktop}
            alt={product.name}
            className="xl:w-[540px] xl:h-full max-xl:w-full max-xl:h-full rounded-md max-lg:hidden"
          />
          <img
            src={product.image.tablet}
            alt={product.name}
            className="w-full h-full rounded-md lg:hidden"
          />

          {/* product details */}
          <div className="">
            {product.new && (
              <p className="font-regular text-[14px] tracking-[10px] text-burnt-orange mb-[15px]">
                NEW PRODUCT
              </p>
            )}
            <h2 className="font-bold text-[40px] text-black tracking-[1.43px] leading-[44px] ">
              {product.name}
            </h2>
            <p className="text-black leading-[25px] tracking-[0] font-medium text-[15px] opacity-[50%] max-w-[445px]  my-[32px]">
              {product.description}
            </p>
            <p className="text-black font-bold text-[18px] tracking-[1.29px] ">
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

        {/* Features + in box */}
        <div className="xl:my-[160px] max-xl:my-[120px] xl:px-[165px] max-xl:px-[39px] flex justify-between max-lg:gap-[120px] max-lg:flex-col">
          <div>
            <h2 className="text-black tracking-[1.14px] leading-[36px] font-bold text-[32px] ">
              FEATURES
            </h2>
            <p className="lg:max-w-[635px] text-black opacity-50 tracking-0 leading-[25px] font-medium text-[15px] mt-[32px]">
              {product.features}
            </p>
          </div>
          <div className="lg:w-[350px] max-lg:flex max-lg:justify-between">
            <h2 className="text-black leading-[36px] tracking-[1.14px] font-bold text-[32px] uppercase mb-[27px] max-lg:w-1/2 ">
              in the box
            </h2>
            <div className="w-full max-lg:w-1/2">
              {product.includes.map((include, index) => (
                <p
                  className=" py-[5px] text-black tracking-0  text-[15px]   "
                  key={index}
                >
                  <span className="mr-[24px] text-burnt-orange  font-bold  opacity-100">
                    {include.quantity}x
                  </span>
                  <span className="opacity-50 font-medium">{include.item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* product photos */}

        {/* desktop */}
        <div className=" lg:h-[592px] max-lg:h-[368px] xl:my-[160px] max-xl:my-[120px] xl:px-[165px] max-xl:px-[39px] flex justify-between xl:gap-[30px] max-xl:gap-[18px]">
          <div className="flex justify-between flex-col xl:gap-[30px] max-xl:gap-[18px]  max-xl:w-2/5">
            <img
              src={product.gallery.first.desktop}
              className="rounded-[8px] xl:w-[445px] h-full max-lg:hidden  "
            />
            <img
              src={product.gallery.first.tablet}
              className="rounded-[8px] h-[174px]  lg:hidden  "
            />

            <img
              src={product.gallery.second.desktop}
              className="rounded-[8px] xl:w-[445px] h-full max-lg:hidden "
            />
            <img
              src={product.gallery.second.tablet}
              className="rounded-[8px] h-[174px] lg:hidden "
            />
          </div>
          <img
            src={product.gallery.third.desktop}
            className="rounded-[8px] xl:w-[635px] xl:h-full max-xl:w-3/5 max-lg:hidden "
          />
          <img
            src={product.gallery.third.tablet}
            className="rounded-[8px] w-3/5 h-full  lg:hidden "
          />
        </div>

        {/* you may also like */}
        <div className="xl:my-[160px] max-xl:my-[120px] xl:px-[165px] max-xl:px-[39px] text-center">
          <h2 className=" text-black tracking-[1.14px] font-bold text-[32px] uppercase">
            you may also like
          </h2>
          <div className=" xl:mt-[64px] max-xl:mt-[56px] xl:h-[471px] flex xl:gap-[30px] max-xl:gap-[11px]">
            {product.others.map((otherProduct, index) => (
              <div key={index}>
                <img
                  src={otherProduct.image.desktop}
                  alt={otherProduct.name}
                  className="rounded-[8px] max-lg:hidden "
                />
                <img
                  src={otherProduct.image.tablet}
                  alt={otherProduct.name}
                  className="rounded-[8px] lg:hidden"
                />
                <h3 className="text-black tracking-[1.71px] font-bold text-[24px] mt-[40px] ">
                  {otherProduct.name}
                </h3>
                <button
                  className="w-[160px] h-[48px] bg-burnt-orange hover:bg-peach text-white mt-[32px] font-bold text-[13px] tracking-[1px] uppercase"
                  onClick={() => {
                    window.scrollTo({ top: 0 });
                    navigate(`/product/${otherProduct.id}`);
                  }}
                >
                  See Product
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="max-lg:my-[96px]">  <ThreeProducts /></div>

        <Man />

        <Footer />
      </div>
    </div>
  );
};

export default ProductDetails;
