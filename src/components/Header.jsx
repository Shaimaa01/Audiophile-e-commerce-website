/* eslint-disable react/prop-types */
import Logo from "./Logo";
import Navigation from "./Navigation";
import Cart from "./Cart";

const Header = ({ cartItems, clearCart , setCartItems }) => {
  return (
    <header className="flex justify-between items-center text-white h-[96px]  absolute w-[calc(100%-330px)] left-[165px] z-10" >
      {/* Logo */}
      <Logo />

      {/* Navigation Links */}
      <Navigation />

      {/* Cart */}
      <Cart cartItems={cartItems} clearCart={clearCart} setCartItems={setCartItems} />
    </header>
  );
};

export default Header;