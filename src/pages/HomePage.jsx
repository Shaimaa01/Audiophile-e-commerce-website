import ThreeProducts from "../components/ThreeProducts";
import data from "../data.json";
import zx9 from "/assets/home/desktop/image-speaker-zx9.png";
import circles from "/assets/home/desktop/pattern-circles.svg";

import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Man from "../components/Man";
import heroDesktop from "/assets/home/desktop/image-hero.jpg";
import heroTablet from "/assets/home/tablet/image-header.jpg";
import heroMobile from "/assets/home/mobile/image-header.jpg";
import zx7Desktop from "/assets/home/desktop/image-speaker-zx7.jpg";
import zx7Tablet from "/assets/home/tablet/image-speaker-zx7.jpg";
import zx7Mobile from "/assets/home/mobile/image-speaker-zx7.jpg";
import earphonesDesktop from "/assets/home/desktop/image-earphones-yx1.jpg";
import earphonesTablet from "/assets/home/tablet/image-earphones-yx1.jpg";
import earphonesMobile from "/assets/home/mobile/image-earphones-yx1.jpg";
import { useState, useEffect } from "react";

const HomePage = () => {
  const product = data.find((item) => item.id === 4);
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState();
  const [zx7Image, setZx7Image] = useState();
  const [earphonesImage, setEarphonesImage] = useState();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 836) {
        setBackgroundImage(heroDesktop);
      } else if (window.innerWidth >= 375) {
        setBackgroundImage(heroTablet);
      } else {
        setBackgroundImage(heroMobile);
      }

      if (window.innerWidth >= 1024) {
        setZx7Image(zx7Desktop);
        setEarphonesImage(earphonesDesktop);
      } else if (window.innerWidth >= 767) {
        setZx7Image(zx7Tablet);
        setEarphonesImage(earphonesTablet);
      } else {
        setZx7Image(zx7Mobile);
        setEarphonesImage(earphonesMobile);
      }
    };

    handleResize(); // Set initial background image
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-off-white">
      {/* first container  */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        className="h-screen xl:px-[165px] max-xl:px-[39px] bg-cover bg-center bg-no-repeat "
      >
        {/* for header */}
        <div className=" xl:h-[96px] max-xl:h-[90px]  border-b border-white opacity-[10.4%] "></div>
        {/* content */}
        <div
          className="relative "
          style={{
            height: `calc(100% - 96px)`,
          }}
        >
          <div className="absolute  top-1/2  transform  -translate-y-1/2 max-w-[379px] max-[836px]:left-1/2 max-[836px]:-translate-x-1/2 max-[836px]:text-center">
            {product.new && (
              <p className="font-regular text-[14px] tracking-[10px] text-white opacity-[49.64%]">
                NEW PRODUCT
              </p>
            )}
            <h2 className="font-bold text-white text-[56px] tracking-[2px] leading-[58px] py-[24px] uppercase">
              {product.name}
            </h2>
            <p className="max-w-[349px] text-white font-medium text-[15px] leading-[25px] opacity-[75%] tracking-0">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button
              className="w-[160px] h-[48px] bg-burnt-orange hover:bg-peach text-white mt-[40px] font-bold text-[13px] tracking-[1px] uppercase"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              See Product
            </button>
          </div>
        </div>
      </div>

      {/* second container */}
      <ThreeProducts />

      {/* third container  */}
      <div className="lg:h-[560px] bg-burnt-orange xl:mx-[165px] md:mx-[39px] rounded-[8px] relative overflow-hidden flex items-center max-lg:flex-col max-lg:items-center max-lg:justify-center">
        {/* bg  circles for desktop */}
        <div className="w-full h-full absolute -left-36 -top-8 max-lg:hidden">
          <img src={circles} alt="circles" />
        </div>

        {/* bg  circles for tablet */}
        <img
          src={circles}
          alt="circles"
          className="  w-[1000px] h-[1000px] absolute  top-[-340px]  max-w-none   lg:hidden z-0"
        />

        {/* img zx9 speaker for desktop */}
        <div className="w-[370px] h-[490px] absolute left-[144px] -bottom-14 max-lg:hidden">
          <img src={zx9} />
        </div>

        {/* img zx9 speaker for tablet */}
        <div className="w-[197px] h-[237px] z-10  lg:hidden max-xl:mt-[64px]">
          <img src={zx9} />
        </div>

        <div className="w-[349px] h-[303px] lg:ml-[666px] max-lg:text-center max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:my-[64px]">
          <h2 className="w-[261px] font-bold text-[56px] text-white tracking-[2px] leading-[58px] ">
            ZX9 SPEAKER
          </h2>
          <p className="pt-[24px] text-white opacity-75 font-medium text-[15px] tracking-[0px] leading-[25px]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="mt-[40px] w-[160px] h-[48px] bg-black text-center font-bold text-[13px] tracking-[1px] text-white uppercase py-[15px] z-10 relative hover:bg-[#4C4C4C]">
            See Product
          </button>
        </div>
      </div>

      {/* fourth container */}
      <div
        className="xl:mx-[165px] max-xl:mx-[39px] xl:my-[48px] max-xl:my-[32px] h-[320px] rounded-[8px] flex items-center max-xl:bg-right max-xl:bg-no-repeat max-xl:bg-cover"
        style={{
          backgroundImage: `url(${zx7Image})`,
        }}
      >
        <div className="w-[204px] h-[118px] xl:ml-[95px] max-xl:ml-[62px] ">
          <h2 className="text-black tracking-[2px] font-bold text-[28px] ">
            ZX7 SPEAKER
          </h2>
          <button className="w-[160px] h-[48px] xl:mt-[28px] max-xl:mt-[32px] ml-[1.5px] border border-black text-black font-bold text-[13px] tracking-[1px] uppercase hover:bg-black hover:text-white">
            see product
          </button>
        </div>
      </div>

      {/* fifth container */}
      <div className=" xl:mx-[165px] max-xl:mx-[39px] h-[320px] flex justify-between gap-[10px] ">
        <div className="w-1/2 rounded-[8px]">
          <img
            src={earphonesImage}
            alt="earphones"
            className="rounded-[8px] w-full h-full"
          />
        </div>
        <div className="w-1/2 rounded-[8px] bg-light-gray flex items-center">
          <div className="lg:ml-[95px] max-xl:ml-[41px]">
            <h2 className="text-black font-bold text-[28px] tracking-[2px]">
              YX1 EARPHONES
            </h2>
            <button className="w-[160px] h-[48px] mt-[28px] ml-[1.5px] border border-black text-black font-bold text-[13px] tracking-[1px] uppercase hover:bg-black hover:text-white">
              see product
            </button>
          </div>
        </div>
      </div>

      <Man />

      <Footer />
    </div>
  );
};

export default HomePage;
