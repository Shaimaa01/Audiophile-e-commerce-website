import man from "/public/assets/home/desktop/Bitmap.svg";

function Man() {
  return (
    <div className=" mx-[165px] my-[160px] h-[588px] flex justify-between items-center">
      <div className="w-[445px] h-[295px]">
        <h2 className="text-black leading-[44px] tracking-[1.43px] font-bold text-[40px] uppercase">
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
        className="w-[540px] h-[588px]"
      />
    </div>
  );
}

export default Man;
