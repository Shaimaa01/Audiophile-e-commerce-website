/* eslint-disable react/prop-types */
import confirmationIcon from "/assets/checkout/icon-order-confirmation.svg";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/formatCurrency";
import { calculateTotals } from "./orderTotals";

function ThankYou({ isSubmitted, cartItems, clearCart }) {
  const navigate = useNavigate();
  const { grandTotal } = calculateTotals(cartItems);
  return (
    <>
      {isSubmitted && cartItems.length > 0 && (
        <div>
          <div className="cart-overlay fixed top-0 left-0 w-full h-full bg-black opacity-40 z-40"></div>
          <div className="absolute w-[540px] max-sm:w-[327px] sm:h-[581px] bg-white top-[222px] left-1/2 transform -translate-x-1/2  z-50 rounded-[8px] p-[48px] max-sm:p-[32px]">
            <img
              src={confirmationIcon}
              alt="confirmation icon "
              className="w-[64px] h-[64px]"
            />
            <h2 className="text-black font-bold text-[32px] max-sm:text-[24px] tracking-[1.14px] max-sm:tracking-[0.86px] leading-[36px] max-sm:leading-[28px] mt-[33px] max-sm:mt-[23px]">
              THANK YOU
              <br /> FOR YOUR ORDER
            </h2>
            <p className="my-[24px] max-sm:mt-[16px] text-black font-medium text-[15px] tracking-0 opacity-50 ">
              You will receive an email confirmation shortly.
            </p>
            <div className="flex max-sm:flex-col">
              {/* Product details */}
              <div className="sm:flex-1 h-[140px] bg-light-gray p-[24px] sm:rounded-tl-[8px] sm:rounded-bl-[8px] max-sm:rounded-tl-[8px] max-sm:rounded-tr-[8px]">
                {/* img + price + quantity */}
                <div className="flex justify-between border-b border-black border-opacity-[8%] pb-[12px]">
                  {/* img + price */}
                  <div className="flex items-center   ">
                    <img
                      src={cartItems[0].image.desktop}
                      alt={cartItems[0].name}
                      className="w-[50px] h-[50px] rounded-[8px] mr-[16px]"
                    />

                    <div>
                      <h2 className="font-bold text-[15px] text-black tracking-0 leading-[25px]">
                        {cartItems[0].name.split(" ")[0]}
                      </h2>
                      <p className="text-black font-bold text-[14px] tracking-0 opacity-[50%] leading-[25px]">
                        {formatCurrency(cartItems[0].price)}
                      </p>
                    </div>
                  </div>

                  {/* quantity */}
                  <p className="text-black font-bold text-[15px] tracking-0 opacity-50 ">
                    x{cartItems[0].quantity}
                  </p>
                </div>
                {cartItems.length > 1 && (
                  <p className="font-bold text-[12px] text-center opacity-50 mt-[12px]  ">
                    and {cartItems.length - 1} other item(s)
                  </p>
                )}
              </div>

              {/* GRAND TOTAL */}
              <div className=" w-[198px] max-sm:w-full h-[140px] max-sm:h-[92px] bg-black flex flex-col  gap-[8px] justify-center pl-[32px] max-sm:pl-[24px] sm:rounded-tr-[8px] sm:rounded-br-[8px] max-sm:rounded-bl-[8px] max-sm:rounded-br-[8px] ">
                <h3 className="uppercase font-medium text-white text-[15px] tracking-0 opacity-50">
                  GRAND TOTAL
                </h3>
                <p className="font-bold text-[18px] text-white tracking-0">
                  {formatCurrency(grandTotal)}
                </p>
              </div>
            </div>

            {/*  button */}
            <button
              onClick={() => {
                navigate(`/`);
                window.scrollTo({ top: 0 });
                clearCart();
              }}
              className=" w-full h-[48px] bg-burnt-orange hover:bg-peach text-white  font-medium text-[13px] tracking-[1px] uppercase mt-[46px] max-sm:mt-[23px]"
            >
              BACK TO HOME
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ThankYou;
