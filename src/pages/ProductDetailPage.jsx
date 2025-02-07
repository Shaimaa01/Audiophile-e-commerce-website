/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import data from "../data.json";
import GoBackButton from "../components/GoBackButton";
import { useNavigate } from "react-router-dom";
import ThreeProducts from "../components/ThreeProducts";
import Man from "../components/Man";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

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

  const [productImage, setProductImage] = useState();
  const [firstGalleryImg, setFirstGalleryImg] = useState();
  const [secondGalleryImg, setSecondGalleryImg] = useState();
  const [thirdGalleryImg, setThirdGalleryImg] = useState();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setProductImage(product.image.desktop);
        setFirstGalleryImg(product.gallery.first.desktop);
        setSecondGalleryImg(product.gallery.second.desktop);
        setThirdGalleryImg(product.gallery.third.desktop);
      } else if (window.innerWidth >= 640) {
        setProductImage(product.image.tablet);
        setFirstGalleryImg(product.gallery.first.tablet);
        setSecondGalleryImg(product.gallery.second.tablet);
        setThirdGalleryImg(product.gallery.third.tablet);
      } else {
        setProductImage(product.image.mobile);
        setFirstGalleryImg(product.gallery.first.mobile);
        setSecondGalleryImg(product.gallery.second.mobile);
        setThirdGalleryImg(product.gallery.third.mobile);
      }
    };

    handleResize(); // Set initial background image
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      {/* Header */}
      <div className="bg-black  xl:h-[96px] max-xl:h-[90px]  "></div>

      {/* product container */}
      <div className=" bg-off-white">
        <GoBackButton />

        {/* Product Image +  product details  */}
        <div className="flex xl:gap-[124.5px] max-xl:gap-[69px] max-md:gap-[20px] max-sm:gap-[32px] justify-center  items-center min-[418px]:text-center sm:text-start max-lg:h-[560px] max-md:h-[480px] max-sm:h-full xl:px-[165px] sm:px-[39px] max-sm:px-[24px] max-sm:flex-col ">
          {/* Product Image */}
          <img
            src={productImage}
            alt={product.name}
            className="lg:w-[540px] max-md:w-[281px] max-sm:w-full max-md:h-[480px] max-sm:h-full md:h-full rounded-md "
          />

          {/* product details */}
          <div className="max-xl:w-[339.5px]">
            {product.new && (
              <p className="font-regular text-[14px] tracking-[10px] text-burnt-orange mb-[15px] max-sm:mb-[24px]">
                NEW PRODUCT
              </p>
            )}
            <h2 className="font-bold text-[40px] max-sm:text-[28px] text-black tracking-[1.43px] max-sm:tracking-[1px] sm:leading-[44px] max-w-[255px] min-[418px]:mx-auto sm:mx-0">
              {product.name}
            </h2>
            <p className="text-black leading-[25px] tracking-[0] font-medium text-[15px] opacity-[50%] max-w-[445px]  sm:my-[32px] max-sm:my-[24px]">
              {product.description}
            </p>
            <p className="text-black font-bold text-[18px] tracking-[1.29px] ">
              {formattedPrice}
            </p>
            <div className="sm:mt-[47px] max-sm:mt-[31px] flex gap-4 ">
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
        <div className="xl:my-[160px] max-xl:my-[120px] max-sm:my-[88px] xl:px-[165px] max-xl:px-[39px] max-sm:px-[24px] flex justify-between max-lg:gap-[120px] max-sm:gap-[88px] max-lg:flex-col">
          <div>
            <h2 className="text-black tracking-[1.14px] max-sm:[0.86px] leading-[36px]  font-bold text-[32px] max-sm:text-[24px]">
              FEATURES
            </h2>
            <p className="lg:max-w-[635px] text-black opacity-50 tracking-0 leading-[25px] font-medium text-[15px] mt-[32px] max-sm:mt-[24px]">
              {product.features}
            </p>
          </div>
          <div className="lg:w-[350px] max-lg:flex max-lg:justify-between max-sm:flex-col ">
            <h2 className="text-black leading-[36px] tracking-[1.14px] max-sm:tracking-[0.86px] font-bold text-[32px] max-sm:text-[24px] uppercase mb-[27px] max-sm:mb-[21.5px] max-lg:w-1/2 ">
              in the box
            </h2>
            <div className="w-full max-lg:w-1/2 max-sm:w-full ">
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
        <div className=" lg:h-[592px] max-lg:h-[368px] max-sm:h-full xl:my-[160px] max-xl:my-[120px] max-sm:my-[88px] xl:px-[165px] max-xl:px-[39px] max-sm:px-[24px] flex max-sm:flex-col justify-between xl:gap-[30px] max-xl:gap-[18px] max-sm:gap-[20px]">
          <div className="flex justify-between flex-col xl:gap-[30px] max-xl:gap-[18px] max-sm:gap-[20px]  max-xl:w-2/5 max-sm:w-full">
            <img
              src={firstGalleryImg}
              className="rounded-[8px] xl:w-[445px] h-full max-lg:h-[174px] max-sm:w-full max-sm:h-full "
            />

            <img
              src={secondGalleryImg}
              className="rounded-[8px] xl:w-[445px] h-full max-lg:h-[174px] max-sm:h-full"
            />
          </div>
          <img
            src={thirdGalleryImg}
            className="rounded-[8px] xl:w-[635px] sm:h-full max-sm:h-[368px] max-xl:w-3/5 max-sm:w-full "
          />
        </div>

        {/* you may also like */}
        <div className="xl:my-[160px] max-xl:my-[120px] max-sm:my-[88px] xl:px-[165px] max-xl:px-[39px] max-sm:px-[24px] text-center">
          <h2 className=" text-black tracking-[1.14px] max-sm:tracking-[0.86px] font-bold text-[32px] max-sm:text-[24px] uppercase">
            you may also like
          </h2>
          <div className=" xl:mt-[64px] max-xl:mt-[56px] max-sm:mt-[40px] xl:h-[471px] flex max-sm:flex-col xl:gap-[30px] max-xl:gap-[11px] max-sm:gap-[56px]">
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
                  className="rounded-[8px] lg:hidden max-sm:hidden"
                />
                <img
                  src={otherProduct.image.mobile}
                  alt={otherProduct.name}
                  className="rounded-[8px] sm:hidden"
                />
                <h3 className="text-black tracking-[1.71px] font-bold text-[24px] mt-[40px] max-sm:mt-[32px] ">
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

        <div className="max-lg:my-[96px] max-sm:my-[120px]">
          <ThreeProducts />
        </div>

        <Man />

        <Footer />
      </div>
    </div>
  );
};

export default ProductDetails;
