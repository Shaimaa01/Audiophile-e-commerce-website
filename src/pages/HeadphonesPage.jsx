import Footer from "../components/Footer";
import Man from "../components/Man";
import ThreeProducts from "../components/ThreeProducts";
import data from "../data.json";
import { useNavigate } from "react-router-dom";

const HeadphonesPage = () => {
  const xx99II = data.find((item) => item.id === 4);
  const xx99I = data.find((item) => item.id === 3);
  const xx59 = data.find((item) => item.id === 2);

  const navigate = useNavigate();

  return (
    <div className="bg-off-white">
      {/* header */}
      <div className=" xl:h-[96px] max-xl:h-[90px]  bg-black  ">
        {/* border for header  */}
        <div className="border-b border-white opacity-[10.4%] xl:mx-[165px] max-xl:mx-[39px] h-[96px] "></div>
      </div>

      {/* headphone header */}
      <div className="h-[240px] bg-black text-white tracking-[1.43px] font-bold text-[40px] flex items-center justify-center">
        HEADPHONES
      </div>

      {/* xx99II */}
      <div className="xl:my-[160px] max-xl:my-[120px] xl:mx-[165px] max-xl:mx-[39px] flex xl:h-[560px] justify-between max-xl:gap-[20px] max-[850px]:flex-col max-[850px]:gap-[52px] max-[850px]:items-center">
        <img
          src={xx99II.categoryImage.desktop}
          alt="xx99II headphone "
          className="xl:w-[540px] max-xl:w-1/2 h-full rounded-md max-[850px]:hidden"
        />
        <img
          src={xx99II.categoryImage.tablet}
          alt="xx99II headphone "
          className=" w-full   rounded-md min-[850px]:hidden"
        />

        <div className="flex items-center max-[850px]:justify-center">
          <div className=" max-w-[445px] max-[850px]:max-w-[572px] max-[850px]:text-center">
            {xx99II.new && (
              <p className="font-regular text-[14px] tracking-[10px] text-burnt-orange pb-[24px] ">
                NEW PRODUCT
              </p>
            )}
            <h2 className="font-bold text-black text-[40px] tracking-[1.43px] leading-[44px] pb-[24px] uppercase max-w-[360px] max-[850px]:mx-auto">
              {xx99II.name}
            </h2>
            <p className=" text-black font-medium text-[15px] leading-[25px] opacity-[50%] tracking-0">
              {xx99II.description}
            </p>
            <button
              className="w-[160px] h-[48px] bg-burnt-orange hover:bg-peach text-white mt-[40px] max-[850px]:mt-[24px] font-bold text-[13px] tracking-[1px] uppercase"
              onClick={() => {
                navigate(`/product/${xx99II.id}`);
                window.scrollTo({ top: 0 });
              }}
            >
              See Product
            </button>
          </div>
        </div>
      </div>

      {/* xx99I */}
      <div className="xl:my-[160px] max-xl:my-[120px] xl:mx-[165px] max-xl:mx-[39px] flex xl:h-[560px] justify-between max-xl:gap-[20px] max-[850px]:flex-col max-[850px]:gap-[52px] max-[850px]:items-center">
        <img
          src={xx99I.categoryImage.tablet}
          alt="xx99I headphone "
          className=" w-full   rounded-md min-[850px]:hidden"
        />

        <div className="flex items-center max-[850px]:justify-center">
          <div className=" max-w-[445px] max-[850px]:max-w-[572px] max-[850px]:text-center">
            {xx99I.new && (
              <p className="font-regular text-[14px] tracking-[10px] text-burnt-orange pb-[24px] ">
                NEW PRODUCT
              </p>
            )}
            <h2 className="font-bold text-black text-[40px] tracking-[1.43px] leading-[44px] pb-[24px] uppercase max-w-[360px] max-[850px]:mx-auto">
              {xx99I.name}
            </h2>
            <p className=" text-black font-medium text-[15px] leading-[25px] opacity-[50%] tracking-0">
              {xx99I.description}
            </p>
            <button
              className="w-[160px] h-[48px] bg-burnt-orange hover:bg-peach text-white mt-[40px] max-[850px]:mt-[24px]  font-bold text-[13px] tracking-[1px] uppercase"
              onClick={() => {
                navigate(`/product/${xx99I.id}`);
                window.scrollTo({ top: 0 });
              }}
            >
              See Product
            </button>
          </div>
        </div>
        <img
          src={xx99I.categoryImage.desktop}
          alt="xx99I headphone "
          className="xl:w-[540px] max-xl:w-1/2 h-full rounded-md max-[850px]:hidden"
        />
      </div>

      {/* xx59 */}
      <div className="xl:my-[160px] max-xl:mt-[120px] xl:mx-[165px] max-xl:mx-[39px] flex xl:h-[560px] justify-between max-xl:gap-[20px] max-[850px]:flex-col max-[850px]:gap-[52px] max-[850px]:items-center">
        <img
          src={xx59.categoryImage.desktop}
          alt="xx99II headphone "
          className="xl:w-[540px] max-xl:w-1/2 h-full rounded-md max-[850px]:hidden"
        />
        <img
          src={xx59.categoryImage.tablet}
          alt="xx99II headphone "
            className=" w-full   rounded-md min-[850px]:hidden"
        />

        <div className="flex items-center max-[850px]:justify-center">
          <div className=" max-w-[445px] max-[850px]:max-w-[572px] max-[850px]:text-center">
            {xx59.new && (
              <p className="font-regular text-[14px] tracking-[10px] text-burnt-orange pb-[24px] ">
                NEW PRODUCT
              </p>
            )}
            <h2 className="font-bold text-black text-[40px] tracking-[1.43px] leading-[44px] pb-[24px] uppercase max-w-[360px] max-[850px]:mx-auto">
              {xx59.name}
            </h2>
            <p className=" text-black font-medium text-[15px] leading-[25px] opacity-[50%] tracking-0">
              {xx59.description}
            </p>
            <button
              className="w-[160px] h-[48px] bg-burnt-orange hover:bg-peach text-white mt-[40px] max-[850px]:mt-[24px]  font-bold text-[13px] tracking-[1px] uppercase"
              onClick={() => {
                navigate(`/product/${xx59.id}`);
                window.scrollTo({ top: 0 });
              }}
            >
              See Product
            </button>
          </div>
        </div>
      </div>

      <div className="max-lg:my-[96px]">  <ThreeProducts /></div>

      <Man />

      <Footer />
    </div>
  );
};

export default HeadphonesPage;
