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
      <div className="h-[96px] bg-black  ">
        {/* border for header  */}
        <div className="border-b border-[#979797] mx-[165px] h-[96px] "></div>
      </div>

      {/* headphone header */}
      <div className="h-[240px] bg-black text-white tracking-[1.43px] font-bold text-[40px] flex items-center justify-center">
        HEADPHONES
      </div>

      {/* xx99II */}
      <div className="my-[160px] mx-[165px] flex h-[560px] justify-between  ">
        <img
          src={xx99II.image.desktop}
          alt="xx99II headphone "
          className="w-[540px] h-full rounded-md"
        />

        <div className="flex items-center">
          <div className=" max-w-[445px]">
            {xx99II.new && (
              <p className="font-regular text-[14px] tracking-[10px] text-burnt-orange ">
                NEW PRODUCT
              </p>
            )}
            <h2 className="font-bold text-black text-[40px] tracking-[1.43px] leading-[44px] py-[24px] uppercase max-w-[360px]">
              {xx99II.name}
            </h2>
            <p className=" text-black font-medium text-[15px] leading-[25px] opacity-[50%] tracking-0">
              {xx99II.description}
            </p>
            <button
              className="w-[160px] h-[48px] bg-burnt-orange hover:bg-peach text-white mt-[40px] font-bold text-[13px] tracking-[1px] uppercase"
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
      <div className="my-[160px] mx-[165px] flex h-[560px] justify-between  ">
        <div className="flex items-center">
          <div className="w-[445px]">
            {xx99I.new && (
              <p className="font-regular text-[14px] tracking-[10px] text-burnt-orange ">
                NEW PRODUCT
              </p>
            )}
            <h2 className="font-bold text-black text-[40px] tracking-[1.43px] leading-[44px] py-[24px] uppercase max-w-[360px]">
              {xx99I.name}
            </h2>
            <p className=" text-black font-medium text-[15px] leading-[25px] opacity-[50%] tracking-0">
              {xx99I.description}
            </p>
            <button
              className="w-[160px] h-[48px] bg-burnt-orange hover:bg-peach text-white mt-[40px] font-bold text-[13px] tracking-[1px] uppercase"
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
          src={xx99I.image.desktop}
          alt="xx99I headphone "
          className="w-[540px] h-full rounded-md"
        />
      </div>

      {/* xx59 */}
      <div className="mt-[160px] mx-[165px] flex h-[560px] justify-between  ">
        <img
          src={xx59.image.desktop}
          alt="xx99II headphone "
          className="w-[540px] h-full rounded-md"
        />

        <div className="flex items-center">
          <div className=" max-w-[445px]">
            {xx59.new && (
              <p className="font-regular text-[14px] tracking-[10px] text-burnt-orange ">
                NEW PRODUCT
              </p>
            )}
            <h2 className="font-bold text-black text-[40px] tracking-[1.43px] leading-[44px] py-[24px] uppercase max-w-[360px]">
              {xx59.name}
            </h2>
            <p className=" text-black font-medium text-[15px] leading-[25px] opacity-[50%] tracking-0">
              {xx59.description}
            </p>
            <button
              className="w-[160px] h-[48px] bg-burnt-orange hover:bg-peach text-white mt-[40px] font-bold text-[13px] tracking-[1px] uppercase"
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

      <ThreeProducts />

      <Man />

      <Footer />
    </div>
  );
};

export default HeadphonesPage;
