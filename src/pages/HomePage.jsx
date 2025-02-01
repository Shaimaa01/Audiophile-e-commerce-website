import ThreeProducts from "../components/ThreeProducts";
import data from "../data.json";
import hero from "/assets/home/desktop/image-hero.jpg";
import zx7 from "/public/assets/home/desktop/image-speaker-zx7.jpg";
import zx9 from "/public/assets/home/desktop/image-speaker-zx9.png";
import circles from "/assets/home/desktop/pattern-circles.svg";
import earphones from "/public/assets/home/desktop/image-earphones-yx1.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Man from "../components/Man";

const HomePage = () => {
  const product = data.find((item) => item.id === 4);
  const navigate = useNavigate();

  return (
    <div className="bg-off-white">
      {/* first container  */}
      <div
        style={{
          backgroundImage: `url(${hero})`,
        }}
        className="h-screen px-[165px] "
      >
        {/* for header */}
        <div className="h-[96px] border-b border-[#979797] "></div>
        {/* content */}
        <div
          className="relative "
          style={{
            height: `calc(100% - 96px)`,
          }}
        >
          <div className="absolute  top-1/2  transform  -translate-y-1/2 max-w-[379px]">
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
      <div className="h-[560px] bg-burnt-orange mx-[165px] rounded-[8px] relative overflow-hidden flex items-center">
        <div className="w-full h-full absolute -left-36 -top-8">
          <img src={circles} alt="circles" />
        </div>

        <div className="w-[370px] h-[490px] absolute left-[144px] -bottom-14">
          <img src={zx9} />
        </div>

        <div className="w-[349px] h-[303px] ml-[666px] ">
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
        className="mx-[165px] my-[48px] h-[320px] rounded-[8px] flex items-center "
        style={{
          backgroundImage: `url(${zx7})`,
        }}
      >
        <div className="w-[204px] h-[118px] ml-[95px] ">
          <h2 className="text-black tracking-[2px] font-bold text-[28px] ">
            ZX7 SPEAKER
          </h2>
          <button className="w-[160px] h-[48px] mt-[28px] ml-[1.5px] border border-black text-black font-bold text-[13px] tracking-[1px] uppercase hover:bg-black hover:text-white">
            see product
          </button>
        </div>
      </div>

      {/* fifth container */}
      <div className="mx-[165px] h-[320px] flex justify-between ">
        <div className="w-[535px] rounded-[8px]">
          <img
            src={earphones}
            alt="earphones"
            className="rounded-[8px] w-full h-full"
          />
        </div>
        <div className="w-[535px] rounded-[8px] bg-light-gray flex items-center">
          <div className="ml-[95px]">
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
