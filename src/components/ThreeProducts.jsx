import data from "../data.json";
import earphone from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphone from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import arrow from "/assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";

function ThreeProducts() {
  const xx99_mark_one_headphones = data.find((item) => item.id === 3);
  const zx9_speaker = data.find((item) => item.id === 6);
  const yx1_earphones = data.find((item) => item.id === 1);

  return (
    <div className=" xl:mx-[165px] max-xl:mx-[39px] max-sm:mx-[24px] xl:pt-[80px] max-xl:pt-[60px] max-sm:pt-0 lg:my-[160px] max-xl:my-[0px]  ">
      <div className="flex xl:justify-between max-xl:justify-center items-center w-full gap-[10px] max-sm:flex-col max-sm:gap-[16px]  ">
        <div className=" w-1/3 max-sm:w-full  lg:h-[204px] max-lg:h-[165px] bg-light-gray relative lg:pt-[80px] max-lg:pt-[45px] text-center rounded-lg  max-sm:mt-[60px]">
          <img
            src={headphone}
            className=" lg:w-[218px] max-lg:w-[148.9px] lg:h-[214px] max-lg:h-[141px] absolute lg:-top-[80px] max-lg:-top-[55px] left-[50%] -translate-x-[50%] "
          />
          <p className="text-black pt-[35px] font-bold lg:text-[18px] max-lg:text-[15px] uppercase lg:tracking-[1.29px] max-lg:tracking-[1.07px]">
            {xx99_mark_one_headphones.category}
          </p>

          <Link
            to="/headphones"
            onClick={() => {
              window.scrollTo({ top: 0 });
            }}
          >
            <button className=" pt-[20px] font-bold text-[13px] tracking-[1px] flex  justify-between items-center w-[57.32px] uppercase mx-auto hover:text-burnt-orange ">
              <span className=" opacity-50 hover:opacity-100"> shop </span>
              <img src={arrow} className="opacity-100" />
            </button>
          </Link>
        </div>

        <div className=" w-1/3 max-sm:w-full   lg:h-[204px] max-lg:h-[165px] bg-light-gray relative lg:pt-[80px] max-lg:pt-[45px] text-center rounded-lg max-sm:mt-[60px] ">
          <img
            src={speakers}
            className=" lg:w-[218px] max-lg:w-[148.9px] lg:h-[214px] max-lg:h-[141px] absolute lg:-top-[80px] max-lg:-top-[55px] left-[50%] -translate-x-[50%] "
          />
          <p className="text-black pt-[35px] font-bold lg:text-[18px] max-lg:text-[15px] uppercase lg:tracking-[1.29px] max-lg:tracking-[1.07px]">
            {zx9_speaker.category}
          </p>

          <Link
            to="/speakers"
            onClick={() => {
              window.scrollTo({ top: 0 });
            }}
          >
            <button className=" pt-[20px] font-bold text-[13px] tracking-[1px] flex  justify-between items-center w-[57.32px] uppercase mx-auto hover:text-burnt-orange">
              <span className="opacity-50 hover:opacity-100"> shop </span>
              <img src={arrow} className="opacity-100" />
            </button>
          </Link>
        </div>

        <div className=" w-1/3 max-sm:w-full   lg:h-[204px] max-lg:h-[165px] bg-light-gray relative lg:pt-[80px] max-lg:pt-[45px] text-center rounded-lg  max-sm:mt-[60px]">
          <img
            src={earphone}
            className=" lg:w-[218px] max-lg:w-[164.9px] lg:h-[214px] max-lg:h-[141px] absolute lg:-top-[80px] max-lg:-top-[55px] left-[50%] -translate-x-[50%] "
          />
          <p className="text-black pt-[35px] font-bold lg:text-[18px] max-lg:text-[15px] uppercase lg:tracking-[1.29px] max-lg:tracking-[1.07px]">
            {yx1_earphones.category}
          </p>

          <Link
            to="/earphones"
            onClick={() => {
              window.scrollTo({ top: 0 });
            }}
          >
            <button className=" pt-[20px] font-bold text-[13px] tracking-[1px] flex  justify-between items-center w-[57.32px] uppercase mx-auto hover:text-burnt-orange">
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
