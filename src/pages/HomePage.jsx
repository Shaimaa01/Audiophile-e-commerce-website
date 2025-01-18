import data from "../data.json";
import hero from "../assets/home/desktop/image-hero.jpg";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const product = data.find((item) => item.id === 4);
  const navigate = useNavigate();

  return (
    <div>
      {/* first container  */}
      <div
        style={{
          backgroundImage: `url(${hero})`,
        }}
        className="h-screen px-[165px] "
      >
        <Header />

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
              className="w-[160px] h-[48px] bg-burnt-orange hover:bg-peach text-white mt-[40px] font-bold text-[13px] tracking-[1px]"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              See Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
