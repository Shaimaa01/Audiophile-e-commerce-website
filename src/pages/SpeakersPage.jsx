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
      <div className="h-[96px] bg-black">
        <div className="border-b border-[#979797] mx-[165px] h-[96px] "></div>
      </div>

      {/* headphone header */}
      <div className="h-[240px] bg-black text-white tracking-[1.43px] font-bold text-[40px] flex items-center justify-center">
        SPEAKERS
      </div>

      {/* zx9 */}
      <div className="my-[160px] mx-[165px] flex h-[560px] justify-between  ">
        <img
          src={zx9.image.desktop}
          alt="zx7 speakers "
          className="w-[540px] h-full rounded-md"
        />

        <div className="flex items-center">
          <div className=" max-w-[445px]">
            {zx9.new && (
              <p className="font-regular text-[14px] tracking-[10px] text-burnt-orange ">
                NEW PRODUCT
              </p>
            )}
            <h2 className="font-bold text-black text-[40px] tracking-[1.43px] leading-[44px] py-[24px] uppercase max-w-[360px]">
              {zx9.name}
            </h2>
            <p className=" text-black font-medium text-[15px] leading-[25px] opacity-[50%] tracking-0">
              {zx9.description}
            </p>
            <button
              className="w-[160px] h-[48px] bg-burnt-orange hover:bg-peach text-white mt-[40px] font-bold text-[13px] tracking-[1px] uppercase"
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
      <div className="my-[160px] mx-[165px] flex h-[560px] justify-between  ">
        <div className="flex items-center">
          <div className="w-[445px]">
            {zx7.new && (
              <p className="font-regular text-[14px] tracking-[10px] text-burnt-orange ">
                NEW PRODUCT
              </p>
            )}
            <h2 className="font-bold text-black text-[40px] tracking-[1.43px] leading-[44px] py-[24px] uppercase max-w-[360px]">
              {zx7.name}
            </h2>
            <p className=" text-black font-medium text-[15px] leading-[25px] opacity-[50%] tracking-0">
              {zx7.description}
            </p>
            <button
              className="w-[160px] h-[48px] bg-burnt-orange hover:bg-peach text-white mt-[40px] font-bold text-[13px] tracking-[1px] uppercase"
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
          src={zx7.image.desktop}
          alt="zx7 speakers "
          className="w-[540px] h-full rounded-md"
        />
      </div>

      <ThreeProducts />

      <Man />

      <Footer />
    </div>
  );
};

export default SpeakersPage;
