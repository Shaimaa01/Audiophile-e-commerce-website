/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/formatCurrency";
import { calculateTotals } from "./orderTotals";
function OrderSummry({ cartItems }) {
  const { productTotal, shipping, vat, grandTotal } =
    calculateTotals(cartItems);
  return (
    <div className="xl:w-[350px] max-xl:w-[689px] max-md:w-full h-fit py-[32px] px-[33px] max-sm:px-[24px]  bg-white rounded-[8px] ">
      <h2 className="text-black uppercase font-bold text-[18px] tracking-[1.29px] ">
        summary
      </h2>

      {/* products details */}
      <ul className="flex flex-col   gap-[22px] py-[25px]">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between  text-black">
            {/* Product details */}
            <div className="flex items-center ">
              <img
                src={item.image.desktop}
                alt={item.name}
                className="w-[64px] h-[64px] rounded-[8px] mr-[16px]"
              />

              <div>
                <h2 className="font-bold text-[15px] text-black tracking-0 leading-[25px]">
                  {item.name.split(" ")[0]}
                </h2>
                <p className="text-black font-bold text-[14px] tracking-0 opacity-[50%] leading-[25px]">
                  {formatCurrency(item.price)}
                </p>
              </div>
            </div>

            {/* quantity */}
            <p className="text-black font-bold text-[15px] tracking-0 opacity-50 mt-[10px]">
              x{item.quantity}
            </p>
          </li>
        ))}
      </ul>

      {/* money details */}
      <div className="flex flex-col gap-[8px]">
        {/* Total  */}
        <div className="flex justify-between items-center text-black ">
          <h3 className="uppercase font-medium text-[15px] tracking-0 opacity-50">
            total
          </h3>
          <p className="font-bold text-[18px] tracking-0">
            {formatCurrency(productTotal)}
          </p>
        </div>

        {/* SHIPPING */}
        <div className="flex justify-between items-center text-black ">
          <h3 className="uppercase font-medium text-[15px] tracking-0 opacity-50">
            SHIPPING
          </h3>
          <p className="font-bold text-[18px] tracking-0">
            {formatCurrency(shipping)}
          </p>
        </div>

        {/* VAT (INCLUDED) */}
        <div className="flex justify-between items-center text-black ">
          <h3 className="uppercase font-medium text-[15px] tracking-0 opacity-50">
            VAT (INCLUDED)
          </h3>
          <p className="font-bold text-[18px] tracking-0">
            {formatCurrency(vat)}
          </p>
        </div>

        {/* GRAND TOTAL */}
        <div className="flex justify-between items-center mt-[10px]  ">
          <h3 className="uppercase font-medium text-black text-[15px] tracking-0 opacity-50">
            GRAND TOTAL
          </h3>
          <p className="font-bold text-[18px] text-burnt-orange tracking-0">
            {formatCurrency(grandTotal)}
          </p>
        </div>
      </div>

      {/*  button */}
      <button
        type="submit"
        className=" w-full h-[48px] bg-burnt-orange hover:bg-peach text-white  font-medium text-[13px] tracking-[1px] uppercase mt-[24px]"
      >
        CONTINUE & PAY
      </button>
    </div>
  );
}

export default OrderSummry;
