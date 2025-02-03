/* eslint-disable react/prop-types */
import Logo from "./Logo";
import Navigation from "./Navigation";
import Cart from "./Cart";
import hamburger from "/public/assets/shared/tablet/icon-hamburger.svg";

const Header = ({ cartItems, clearCart, setCartItems }) => {
  return (
    <header className="flex justify-between items-center text-white xl:h-[96px] max-xl:h-[90px]  absolute xl:w-[calc(100%-330px)] max-xl:w-[calc(100%-78px)] xl:left-[165px] max-xl:left-[39px] z-10">
      {/* Logo */}
      <div className="flex justify-center items-center max-xl:gap-[42px]">
        <img
          src={hamburger}
          alt="hamburger icon"
          className="xl:hidden w-[16px] h-[15px]"
        />
        <Logo />
      </div>

      {/* Navigation Links */}
      <div className="max-xl:hidden">
        <Navigation />
      </div>

      {/* Cart */}
      <Cart
        cartItems={cartItems}
        clearCart={clearCart}
        setCartItems={setCartItems}
      />
    </header>
  );
};

export default Header;
