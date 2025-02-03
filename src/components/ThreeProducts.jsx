import data from "../data.json";
import earphone from "/public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphone from "/public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "/public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import arrow from "/public/assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";

function ThreeProducts() {
  const xx99_mark_one_headphones = data.find((item) => item.id === 3);
  const zx9_speaker = data.find((item) => item.id === 6);
  const yx1_earphones = data.find((item) => item.id === 1);

  return (
    <div className="xl:mx-[165px] md:mx-[39px] xl:pt-[80px] md:pt-[60px] xl:my-[160px] md:my-[96px]  ">
      <div className="flex xl:justify-between md:justify-center items-center w-full gap-[10px] ">
        <div className=" lg:w-[350px] md:w-[223px]  lg:h-[204px] md:h-[165px] bg-light-gray relative lg:pt-[80px] md:pt-[45px] text-center rounded-lg  ">
          <img
            src={headphone}
            className=" lg:w-[218px] md:w-[134.9pxpx] lg:h-[214px] md:h-[141px] absolute lg:-top-[80px] md:-top-[55px] left-[50%] -translate-x-[50%] "
          />
          <p className="text-black pt-[35px] font-bold lg:text-[18px] md:text-[15px] uppercase lg:tracking-[1.29px] md:tracking-[1.07px]">
            {xx99_mark_one_headphones.category}
          </p>

          <Link
            to="/headphones"
            onClick={() => {
              window.scrollTo({ top: 0 });
            }}
          >
            <button className="pt-[20px] font-bold text-[13px] tracking-[1px] flex  justify-between items-center w-[57.32px] uppercase mx-auto hover:text-burnt-orange ">
              <span className="opacity-50 hover:opacity-100"> shop </span>
              <img src={arrow} className="opacity-100" />
            </button>
          </Link>
        </div>

        <div className=" lg:w-[350px] md:w-[223px] lg:h-[204px] md:h-[165px] bg-light-gray relative lg:pt-[80px] md:pt-[45px] text-center rounded-lg  ">
          <img
            src={speakers}
            className=" lg:w-[216px] md:w-[134.9pxpx] lg:h-[201px] md:h-[141px] absolute lg:-top-[72.5px] md:-top-[55px] left-[50%] -translate-x-[50%] "
          />
          <p className="text-black pt-[35px] font-bold lg:text-[18px] md:text-[15px] uppercase lg:tracking-[1.29px] md:tracking-[1.07px]">
            {zx9_speaker.category}
          </p>

          <Link
            to="/speakers"
            onClick={() => {
              window.scrollTo({ top: 0 });
            }}
          >
            <button className="pt-[20px] font-bold text-[13px] tracking-[1px] flex  justify-between items-center w-[57.32px] uppercase mx-auto hover:text-burnt-orange">
              <span className="opacity-50 hover:opacity-100"> shop </span>
              <img src={arrow} className="opacity-100" />
            </button>
          </Link>
        </div>

        <div className=" lg:w-[350px] md:w-[223px] lg:h-[204px] md:h-[165px] bg-light-gray relative lg:pt-[80px] md:pt-[45px] text-center rounded-lg  ">
          <img
            src={earphone}
            className=" lg:w-[216px] md:w-[134.9pxpx] lg:h-[187px] md:h-[141px]  absolute lg:-top-[59px] md:-top-[55px] left-[50%] -translate-x-[50%] "
          />
          <p className="text-black pt-[35px] font-bold lg:text-[18px] md:text-[15px] uppercase lg:tracking-[1.29px] md:tracking-[1.07px]">
            {yx1_earphones.category}
          </p>

          <Link
            to="/earphones"
            onClick={() => {
              window.scrollTo({ top: 0 });
            }}
          >
            <button className="pt-[20px] font-bold text-[13px] tracking-[1px] flex  justify-between items-center w-[57.32px] uppercase mx-auto hover:text-burnt-orange">
              <span className="opacity-50 hover:opacity-100"> shop </span>
              <img src={arrow} className="opacity-100" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ThreeProducts;
