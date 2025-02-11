/* eslint-disable react-hooks/exhaustive-deps */
import ThreeProducts from "../components/ThreeProducts";
import data from "../data.json";
import { useNavigate } from "react-router-dom";
import Man from "../components/Man";
import { useState, useEffect } from "react";

const EarphonesPage = () => {
  const yx1 = data.find((item) => item.id === 1);

  const navigate = useNavigate();

  const [yx1Image, setyx1Image] = useState();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 850) {
        setyx1Image(yx1.categoryImage.desktop);
      } else if (window.innerWidth >= 440) {
        setyx1Image(yx1.categoryImage.tablet);
      } else {
        setyx1Image(yx1.categoryImage.mobile);
      }
    };

    handleResize(); // Set initial background image
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section aria-labelledby="headphones-page" className="bg-off-white">
      {/* header */}
      <div className=" xl:h-[96px] max-xl:h-[90px]  bg-black  ">
        <div className="border-b border-white opacity-[10.4%] xl:mx-[165px] max-xl:mx-[39px] max-sm:mx-0 h-[96px] max-xl:h-[90px]"></div>
      </div>

      {/* headphone header */}
      <h2 className="h-[240px] max-sm:h-[102px] bg-black text-white tracking-[1.43px] max-sm:tracking-[2px] font-bold text-[40px] max-sm:text-[28px] flex items-center justify-center">
        EARPHONES
      </h2>

      {/* yx1 */}
      <section className="xl:my-[160px] max-xl:my-[120px] max-sm:my-[64px] xl:mx-[165px] max-xl:mx-[39px] max-sm:mx-[24px] flex xl:h-[560px] justify-between max-xl:gap-[20px] max-[850px]:flex-col max-[850px]:gap-[52px] max-sm:gap-[32px] max-[850px]:items-center">
        <img
          src={yx1Image}
          alt="yx1 earphones "
          className="xl:w-[540px] max-xl:w-1/2 max-xl:h-full  rounded-md max-[850px]:w-full "
        />

        <div className="flex items-center max-[850px]:justify-center">
          <div className=" max-w-[445px] max-[850px]:max-w-[572px] max-[850px]:text-center">
            {yx1.new && (
              <p className="font-regular text-[14px] tracking-[10px] text-burnt-orange pb-[24px] ">
                NEW PRODUCT
              </p>
            )}
            <h3 className="font-bold text-black text-[40px] max-sm:text-[28px] tracking-[1.43px] max-sm:tracking-[1px] sm:leading-[44px] pb-[24px] uppercase max-w-[360px] max-[850px]:mx-auto  max-sm:text-cente">
              {yx1.name}
            </h3>
            <p className=" text-black font-medium text-[15px] leading-[25px] opacity-[50%] tracking-0">
              {yx1.description}
            </p>
            <button
              className="w-[160px] h-[48px] bg-burnt-orange hover:bg-peach text-white mt-[40px] max-[850px]:mt-[24px] font-bold text-[13px] tracking-[1px] uppercase"
              onClick={() => {
                navigate(`/product/${yx1.id}`);
                window.scrollTo({ top: 0 });
              }}
            >
              See Product
            </button>
          </div>
        </div>
      </section>

      <section className="max-lg:my-[96px] max-sm:my-[120px]">
        <ThreeProducts />
      </section>

      <Man />

   
    </section>
  );
};

export default EarphonesPage;
