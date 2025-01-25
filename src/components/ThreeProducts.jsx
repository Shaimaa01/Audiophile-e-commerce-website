import data from "../data.json";
import earphone from "/public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphone from "/public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "/public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import arrow from "/public/assets/shared/desktop/icon-arrow-right.svg";

function ThreeProducts() {
  const xx99_mark_one_headphones = data.find((item) => item.id === 3);
  const zx9_speaker = data.find((item) => item.id === 6);
  const yx1_earphones = data.find((item) => item.id === 1);

  return (
    <div className="px-[165px] pt-[200px] pb-[168px] ">
      <div className="flex justify-between items-center w-full">
        <div className=" w-[350px]  h-[204px] bg-light-gray relative pt-[80px] text-center rounded-lg  ">
          <img
            src={headphone}
            className=" w-[218px] h-[210px] absolute -top-[80px] left-[50%] -translate-x-[50%] "
          />
          <p className="text-black pt-[35px] font-bold text-[18px] uppercase tracking-[1.29px]">
            {xx99_mark_one_headphones.category}
          </p>
          <button className="pt-[20px] font-bold text-[13px] tracking-[1px] flex  justify-between items-center w-[57.32px] uppercase mx-auto hover:text-burnt-orange ">
            <span className="opacity-50 hover:opacity-100"> shop </span>
            <img src={arrow} className="opacity-100" />
          </button>
        </div>

        <div className=" w-[350px]  h-[204px] bg-light-gray relative pt-[80px] text-center rounded-lg  ">
          <img
            src={speakers}
            className=" w-[216px] h-[201px] absolute -top-[72.5px] left-[50%] -translate-x-[50%] "
          />
          <p className="text-black pt-[35px] font-bold text-[18px] uppercase tracking-[1.29px]">
            {zx9_speaker.category}
          </p>
          <button className="pt-[20px] font-bold text-[13px] tracking-[1px] flex  justify-between items-center w-[57.32px] uppercase mx-auto hover:text-burnt-orange">
            <span className="opacity-50 hover:opacity-100"> shop </span>
            <img src={arrow} className="opacity-100" />
          </button>
        </div>

        <div className=" w-[350px]  h-[204px] bg-light-gray relative pt-[80px] text-center rounded-lg  ">
          <img
            src={earphone}
            className=" w-[216px] h-[187px] absolute -top-[59px] left-[50%] -translate-x-[50%] "
          />
          <p className="text-black pt-[35px] font-bold text-[18px] uppercase tracking-[1.29px]">
            {yx1_earphones.category}
          </p>
          <button className="pt-[20px] font-bold text-[13px] tracking-[1px] flex  justify-between items-center w-[57.32px] uppercase mx-auto hover:text-burnt-orange">
            <span className="opacity-50 hover:opacity-100"> shop </span>
            <img src={arrow} className="opacity-100" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThreeProducts;
