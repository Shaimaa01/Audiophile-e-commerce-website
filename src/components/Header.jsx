/* eslint-disable react/prop-types */
import Logo from "./Logo";
import Navigation from "./Navigation";
import Cart from "./Cart";

const Header = ({ cartItems, clearCart , setCartItems }) => {
  return (
    <header className="flex justify-between items-center text-white border-b border-[#979797] h-[96px] " >
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