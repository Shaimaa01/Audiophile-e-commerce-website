import man from "/public/assets/home/desktop/Bitmap.svg";
import manTablet from "/public/assets/shared/tablet/image-best-gear.jpg";
import manMobile from "/public/assets/shared/mobile/image-best-gear.jpg";

function Man() {
  return (
    <div className=" xl:mx-[165px] max-xl:mx-[39px] xl:my-[160px] max-xl:my-[96px] xl:h-[588px] flex justify-between items-center max-xl:gap-[20px] max-md:gap-[63px] max-md:flex-col ">
      <img
        src={manTablet}
        alt="man wearing headphone black"
        className="w-full  md:hidden rounded-[8px]"
      />

      <div className="xl:w-[445px] xl:h-[295px] max-md:text-center">
        <h2 className="text-black leading-[44px] tracking-[1.43px] font-bold text-[40px] uppercase max-xl:text-[30px] max-md:text-[40px]">
          Bringing you the <span className="text-burnt-orange">best</span> audio
          gear
        </h2>
        <p className="mt-[28px] text-black leading-[25px] tracking-[0px] font-medium text-[15px] opacity-50 ">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <img
        src={man}
        alt="man wearing headphone black"
        className=" xl:w-[540px] xl:h-[588px] max-xl:w-1/2 max-md:hidden"
      />
    </div>
  );
}

export default Man;
