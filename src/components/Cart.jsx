/* eslint-disable react/prop-types */
import { useState } from "react";

const Cart = ({ cartItems, setCartItems, clearCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const updateQuantity = (id, delta) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  return (
    <div className="relative">
      {/* Cart Icon */}
      <div
        className={`cursor-pointer transition-colors ${
          isCartOpen
            ? "text-burnt-orange"
            : "text-white hover:text-burnt-orange"
        }`}
        onClick={toggleCart}
        aria-label="Toggle cart"
        aria-expanded={isCartOpen}
        role="button"
      >
        {/* SVG icon */}
        <svg
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.01883 13.1946H8.01776C7.64161 13.1955 7.33595 13.491 7.33595 13.8542C7.33595 14.2179 7.64268 14.5139 8.01954 14.5139H20.4154C20.793 14.5139 21.099 14.8092 21.099 15.1736C21.099 15.538 20.793 15.8333 20.4154 15.8333H19.25H9.25H8.01954C6.88876 15.8333 5.96876 14.9455 5.96876 13.8542C5.96876 13.0421 6.47843 12.343 7.20493 12.0382L4.73686 1.31944H1.18359C0.806016 1.31944 0.5 1.02412 0.5 0.659722C0.5 0.295329 0.806016 0 1.18359 0H5.28516C5.6056 0 5.88295 0.214753 5.95256 0.516611L6.44122 2.63889H23.1498C23.3643 2.63889 23.5663 2.73613 23.6956 2.9014C23.8246 3.06668 23.8659 3.28074 23.807 3.47986L21.0726 12.716C20.9888 12.9991 20.7205 13.1944 20.4154 13.1944H8.0215L8.01883 13.1946ZM9.25 15.8333C10.3987 15.8333 11.3333 16.7679 11.3333 17.9167C11.3333 19.0654 10.3987 20 9.25 20C8.10127 20 7.16667 19.0654 7.16667 17.9167C7.16667 16.7679 8.10127 15.8333 9.25 15.8333ZM19.25 15.8333C20.3987 15.8333 21.3333 16.7679 21.3333 17.9167C21.3333 19.0654 20.3987 20 19.25 20C18.1013 20 17.1667 19.0654 17.1667 17.9167C17.1667 16.7679 18.1013 15.8333 19.25 15.8333ZM19.8997 11.875L22.2435 3.95833H6.74492L8.56784 11.875H19.8997ZM9.94444 17.9167C9.94444 17.5338 9.63285 17.2222 9.25 17.2222C8.86715 17.2222 8.55556 17.5338 8.55556 17.9167C8.55556 18.2995 8.86715 18.6111 9.25 18.6111C9.63285 18.6111 9.94444 18.2995 9.94444 17.9167ZM19.25 17.2222C19.6328 17.2222 19.9444 17.5338 19.9444 17.9167C19.9444 18.2995 19.6328 18.6111 19.25 18.6111C18.8672 18.6111 18.5556 18.2995 18.5556 17.9167C18.5556 17.5338 18.8672 17.2222 19.25 17.2222Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Cart Window */}
      {isCartOpen && (
        <div className="absolute top-[129px] right-0 w-[377px] p-5 bg-white shadow-lg rounded-lg z-50 animate-fade-in">
          {!cartItems ? (
            <p className="text-sm text-gray-500 text-center py-4">
              Your cart is empty.
            </p>
          ) : (
            <>
              <div className="flex justify-between">
                <h3 className="text-lg font-semibold text-gray-800">Cart</h3>
                <button
                  onClick={clearCart}
                  className="text-black tracking-[0px] leading-[25px] font-medium text-[15px] opacity-[50%]  underline hover:text-burnt-orange "
                >
                  Remove all
                </button>
              </div>
              <ul>
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between py-2 text-black "
                  >
                    {/* product details */}
                    <div className="flex">
                      <img
                        src={item.image.desktop}
                        alt={item.name}
                        className="w-[64px] h-[64px]"
                      />
                      <div>
                        <h2 className="font-bold text-[15px] text-black tracking-[0px] leading-[25px]">
                          {item.name.split(" ")[0]}
                        </h2>
                        <p className="text-black font-bold text-[14px] tracking-[0px] leading-[25px] opacity-[50%]">
                          {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 0,
                          }).format(item.price)}
                        </p>
                      </div>
                    </div>

                    <div className="w-[120px] h-[48px] bg-light-gray flex justify-between items-center px-[15.5px]">
                      {/* Decrease button */}
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="font-bold text-[13px] text-black opacity-[25%] tracking-[1px] hover:text-burnt-orange hover:opacity-[100%]"
                      >
                        -
                      </button>

                      {/* Current number */}
                      <span className="font-bold text-[13px] text-black tracking-[1px]">
                        {item.quantity}
                      </span>

                      {/* Increase button */}
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="font-bold text-[13px] text-black opacity-[25%] tracking-[1px] hover:text-burnt-orange hover:opacity-[100%]"
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
