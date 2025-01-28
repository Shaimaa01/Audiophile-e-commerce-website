import ThreeProducts from "../components/ThreeProducts";
import data from "../data.json";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Man from "../components/Man";

const EarphonesPage = () => {
  const yx1 = data.find((item) => item.id === 1);

  const navigate = useNavigate();
  return (
    <div className="bg-off-white">
      {/* header */}
      <div className="h-[96px] bg-black  ">
        <div className="border-b border-[#979797] mx-[165px] h-[96px] "></div>
      </div>

      {/* headphone header */}
      <div className="h-[240px] bg-black text-white tracking-[1.43px] font-bold text-[40px] flex items-center justify-center">
        EARPHONES
      </div>

      {/* yx1 */}
      <div className="my-[160px] mx-[165px] flex h-[560px] justify-between  ">
        <img
          src={yx1.image.desktop}
          alt="yx1 earphones "
          className="w-[540px] h-full rounded-md"
        />

        <div className="flex items-center">
          <div className=" max-w-[445px]">
            {yx1.new && (
              <p className="font-regular text-[14px] tracking-[10px] text-burnt-orange ">
                NEW PRODUCT
              </p>
            )}
            <h2 className="font-bold text-black text-[40px] tracking-[1.43px] leading-[44px] py-[24px] uppercase max-w-[360px]">
              {yx1.name}
            </h2>
            <p className=" text-black font-medium text-[15px] leading-[25px] opacity-[50%] tracking-0">
              {yx1.description}
            </p>
            <button
              className="w-[160px] h-[48px] bg-burnt-orange hover:bg-peach text-white mt-[40px] font-bold text-[13px] tracking-[1px] uppercase"
              onClick={() => {
                navigate(`/product/${yx1.id}`);
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

export default EarphonesPage;
