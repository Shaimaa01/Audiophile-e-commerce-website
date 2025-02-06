/* eslint-disable react/prop-types */
import Logo from "./Logo";
import Navigation from "./Navigation";
import Cart from "./Cart";
import { useState } from "react";
import ThreeProducts from "./ThreeProducts";

const Header = ({ cartItems, clearCart, setCartItems }) => {
  const [hamburgerContent, setHamburgerContent] = useState(false);

  const toggleHamburger = () => {
    setHamburgerContent((prev) => !prev);
  };

  const closeHamburger = (e) => {
    if (e.target.classList.contains("close-huamburger")) {
      setHamburgerContent(false);
    }
  };
  return (
    <header className="select-none flex justify-between items-center text-white xl:h-[96px] max-xl:h-[90px]  absolute xl:w-[calc(100%-330px)] max-xl:w-[calc(100%-78px)] max-sm:w-[calc(100%-48px)] xl:left-[165px] max-xl:left-[39px] max-sm:left-[24px] z-10">
      {/* Logo */}
      <div className="flex justify-center items-center max-xl:gap-[42px] max-sm:justify-between max-sm:gap-0 max-sm:w-full relative z-10">
        {/* hamburger Icon */}
        <div
          className={`lg:hidden cursor-pointer transition-colors ${
            hamburgerContent
              ? "text-burnt-orange"
              : "text-white hover:text-burnt-orange"
          }`}
          onClick={toggleHamburger}
          aria-label="Toggle hamburger"
          aria-expanded={hamburgerContent}
          role="button"
        >
          {/* SVG icon */}
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"
              fill="currentColor"
            />
          </svg>
        </div>
        <Logo />
        {/* Cart */}
        <div className="sm:hidden">
          <Cart
            cartItems={cartItems}
            clearCart={clearCart}
            setCartItems={setCartItems}
          />
        </div>
      </div>

      {/* hamburger content */}
      {hamburgerContent && (
        <>
          <div
            onClick={closeHamburger}
            className="close-huamburger fixed top-0 left-0 w-full h-full bg-black opacity-40 z-9"
          ></div>
          <div
            onClick={toggleHamburger}
            className=" bg-white responsive-width absolute top-[90px] text-black left-[-39px] max-sm:left-[-24px] py-[56px] max-sm:py-[32px] rounded-bl-[8px] rounded-br-[8px] z-10"
          >
            <ThreeProducts />
          </div>
        </>
      )}

      {/* Navigation Links */}
      <div className="max-lg:hidden">
        <Navigation />
      </div>

      {/* Cart */}
      <div className="max-sm:hidden">
        <Cart
          cartItems={cartItems}
          clearCart={clearCart}
          setCartItems={setCartItems}
        />
      </div>
    </header>
  );
};

export default Header;
