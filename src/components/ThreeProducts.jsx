import earphone from "/public/assets/other-products/Group 5.svg";
import speakers from "/public/assets/other-products/image-removebg-preview(38).svg";
import headphone from "/public/assets/other-products/image-removebg-preview(41).svg";
import arrow from "/public/assets/other-products/arrow.svg";
import data from "../data.json";

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
            className=" w-[122.95px] h-[160px] absolute -top-[80px] left-[50%] -translate-x-[50%] "
          />
          <div
            className="absolute w-[100px] h-[20px] rounded-full bg-black opacity-40 left-[50%] -translate-x-[50%] top-[77px]"
            style={{
              filter: "blur(15px)",
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 20px 20px",
            }}
          ></div>
          <p className="text-black pt-[35px] font-bold text-[18px] uppercase tracking-[1.29px]">
            {xx99_mark_one_headphones.category}
          </p>
          <button className="pt-[20px] font-bold text-[13px] tracking-[1px] flex  justify-between items-center w-[57.32px] uppercase mx-auto">
            <span className="opacity-50"> shop </span>
            <img src={arrow} className="opacity-100" />{" "}
          </button>
        </div>
        <div className=" w-[350px]  h-[204px] bg-light-gray relative pt-[80px] text-center rounded-lg  ">
          <img
            src={speakers}
            className=" w-[121.49px] h-[146px] absolute -top-[72.5px] left-[50%] -translate-x-[50%] "
          />
          <div
            className="absolute w-[100px] h-[20px] rounded-full bg-black opacity-40 left-[50%] -translate-x-[50%] top-[77px]"
            style={{
              filter: "blur(15px)",
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 20px 20px",
            }}
          ></div>
          <p className="text-black pt-[35px] font-bold text-[18px] uppercase tracking-[1.29px]">
            {zx9_speaker.category}
          </p>
          <button className="pt-[20px] font-bold text-[13px] tracking-[1px] flex  justify-between items-center w-[57.32px] uppercase mx-auto">
            <span className="opacity-50"> shop </span>
            <img src={arrow} className="opacity-100" />{" "}
          </button>
        </div>
        <div className=" w-[350px]  h-[204px] bg-light-gray relative pt-[80px] text-center rounded-lg  ">
          <img
            src={earphone}
            className=" w-[125px] h-[126px] absolute -top-[59px] left-[50%] -translate-x-[50%] "
          />
          <div
            className="absolute w-[100px] h-[20px] rounded-full bg-black opacity-40 left-[50%] -translate-x-[50%] top-[77px]"
            style={{
              filter: "blur(15px)",
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 20px 20px",
            }}
          ></div>
          <p className="text-black pt-[35px] font-bold text-[18px] uppercase tracking-[1.29px]">
            {yx1_earphones.category}
          </p>
          <button className="pt-[20px] font-bold text-[13px] tracking-[1px] flex  justify-between items-center w-[57.32px] uppercase mx-auto">
            <span className="opacity-50"> shop </span>
            <img src={arrow} className="opacity-100" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThreeProducts;
