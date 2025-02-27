import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="bg-dark-gray md:h-[365px] max-md:h-[400px] max-sm:h-full  xl:px-[165px] max-xl:px-[39px] max-sm:px-[24px] pt-[75px] max-sm:pt-[52px] relative  ">
      <p className="w-[100px] h-1 bg-burnt-orange absolute top-0 xl:left-[165px] max-xl:left-[39px] max-sm:left-1/2 max-sm:-translate-x-1/2"></p>
      <div className="flex justify-between items-center text-white  max-md:flex-col max-md:items-start max-sm:items-center max-md:gap-[32px] max-sm:gap-[48px]">
        <Logo />
        <Navigation />
      </div>

      <div className="md:mt-[36px] max-md:mt-[32px] max-sm:mt-[48px] flex justify-between items-end ">
        <p className=" md:max-w-[540px] text-white opacity-50 font-light text-[15px] tracking-[0px] leading-[25px] max-sm:text-center">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we’re open 7 days a week.
        </p>
        {/* shared icon */}
        <div className="flex gap-5 items-center max-md:hidden ">
          <SocialLinks />
        </div>
      </div>

      <div className="flex justify-between items-center md:mt-[56px] max-md:mt-[80px] max-sm:mt-[48px] max-sm:flex-col max-sm:items-center max-sm:gap-[48px] max-sm:pb-[38px]">
        <p className=" text-white opacity-50 tracking-[0px] font-medium text-[15px]">
          Copyright {new Date().getFullYear()}. All Rights Reserved
        </p>
        {/* shared icon */}
        <div className="flex gap-5 items-center  md:hidden ">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
