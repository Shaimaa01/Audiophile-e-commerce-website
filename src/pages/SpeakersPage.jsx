import Footer from "../components/Footer";
import Man from "../components/Man";
import ThreeProducts from "../components/ThreeProducts";
import data from "../data.json";
import { useNavigate } from "react-router-dom";

const SpeakersPage = () => {
  const zx9 = data.find((item) => item.id === 6);
  const zx7 = data.find((item) => item.id === 5);

  const navigate = useNavigate();
  return (
    <div className="bg-off-white">
      {/* header */}
      <div className=" xl:h-[96px] max-xl:h-[90px]  bg-black">
        <div className="border-b border-white opacity-[10.4%] xl:mx-[165px] max-xl:mx-[39px] h-[96px] "></div>
      </div>

      {/* headphone header */}
      <div className="h-[240px] bg-black text-white tracking-[1.43px] font-bold text-[40px] flex items-center justify-center">
        SPEAKERS
      </div>

      {/* zx9 */}
      <div className="xl:my-[160px] max-xl:my-[120px] xl:mx-[165px] max-xl:mx-[39px] flex xl:h-[560px] justify-between max-xl:gap-[20px] max-[850px]:flex-col max-[850px]:gap-[52px] max-[850px]:items-center">
        <img
          src={zx9.categoryImage.desktop}
          alt="zx7 speakers "
          className="xl:w-[540px] max-xl:w-1/2 h-full rounded-md max-[850px]:hidden"
        />
        <img
          src={zx9.categoryImage.tablet}
          alt="zx7 speakers "
          className=" w-full   rounded-md min-[850px]:hidden"
        />

        <div className="flex items-center max-[850px]:justify-center">
          <div className=" max-w-[445px] max-[850px]:max-w-[572px] max-[850px]:text-center">
            {zx9.new && (
              <p className="font-regular text-[14px] tracking-[10px] text-burnt-orange pb-[24px] ">
                NEW PRODUCT
              </p>
            )}
            <h2 className="font-bold text-black text-[40px] tracking-[1.43px] leading-[44px] pb-[24px] uppercase max-w-[360px] max-[850px]:mx-auto">
              {zx9.name}
            </h2>
            <p className=" text-black font-medium text-[15px] leading-[25px] opacity-[50%] tracking-0">
              {zx9.description}
            </p>
            <button
              className="w-[160px] h-[48px] bg-burnt-orange hover:bg-peach text-white mt-[40px] max-[850px]:mt-[24px] font-bold text-[13px] tracking-[1px] uppercase"
              onClick={() => {
                navigate(`/product/${zx9.id}`);
                window.scrollTo({ top: 0 });
              }}
            >
              See Product
            </button>
          </div>
        </div>
      </div>

      {/* zx7 */}
      <div className="xl:my-[160px] max-xl:mt-[120px] xl:mx-[165px] max-xl:mx-[39px] flex xl:h-[560px] justify-between max-xl:gap-[20px] max-[850px]:flex-col max-[850px]:gap-[52px] max-[850px]:items-center">
        <img
          src={zx7.categoryImage.tablet}
          alt="zx7 speakers "
          className=" w-full  rounded-md min-[850px]:hidden"
        />
        <div className="flex items-center max-[850px]:justify-center">
          <div className=" max-w-[445px] max-[850px]:max-w-[572px] max-[850px]:text-center">
            {zx7.new && (
              <p className="font-regular text-[14px] tracking-[10px] text-burnt-orange pb-[24px] ">
                NEW PRODUCT
              </p>
            )}
            <h2 className="font-bold text-black text-[40px] tracking-[1.43px] leading-[44px] pb-[24px] uppercase max-w-[360px] max-[850px]:mx-auto">
              {zx7.name}
            </h2>
            <p className=" text-black font-medium text-[15px] leading-[25px] opacity-[50%] tracking-0">
              {zx7.description}
            </p>
            <button
              className="w-[160px] h-[48px] bg-burnt-orange hover:bg-peach text-white mt-[40px] max-[850px]:mt-[24px] font-bold text-[13px] tracking-[1px] uppercase"
              onClick={() => {
                navigate(`/product/${zx7.id}`);
                window.scrollTo({ top: 0 });
              }}
            >
              See Product
            </button>
          </div>
        </div>
        <img
          src={zx7.categoryImage.desktop}
          alt="zx7 speakers "
          className="xl:w-[540px] max-xl:w-1/2 h-full rounded-md max-[850px]:hidden"
        />
      </div>

      <ThreeProducts />

      <Man />

      <Footer />
    </div>
  );
};

export default SpeakersPage;
