/* eslint-disable react/prop-types */
import { Field , ErrorMessage } from "formik";
import Cash from "/assets/checkout/icon-cash-on-delivery.svg";

function PaymentDetails( {values , touched , errors}) {
  return (
    <>
      <h3 className="pt-[41px] max-md:pt-[32px]  uppercase text-burnt-orange font-bold text-[13px] tracking-[0.93px]">
        payment details
      </h3>
      <div>
        {/* Payment Method */}
        <div
          role="group"
          aria-labelledby="payment-method"
          className="flex max-sm:flex-col justify-between mt-[16px]"
        >
          <h4 className="text-black font-bold text-[12px] tracking-[-0.21px] mb-[9px] max-sm:mb-[17px] ">
            Payment Method
          </h4>
          <div className="flex flex-col gap-[16px]">
            {/* e-mony */}
            <div
              className={`hover:border-burnt-orange border rounded-[8px] w-[309px] max-sm:w-full h-[56px] pl-[21px] flex items-center gap-[16px]  ${
                values.paymentMethod === "e-Money"
                  ? "border-burnt-orange"
                  : "border-silver-gray"
              }`}
            >
              <Field
                id="e-Money"
                autoComplete="cc-number"
                type="radio"
                name="paymentMethod"
                value="e-Money"
                className="appearance-none cursor-pointer w-[20px] h-[20px] border border-silver-gray rounded-full checked:before:bg-burnt-orange relative before:content-[''] before:w-[10px] before:h-[10px]  before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 "
              />
              <label
                htmlFor="e-Money"
                className={` font-bold text-[12px] tracking-[-0.21px] mb-[9px] mt-[16px]  text-black cursor-pointer`}
              >
                e-Money
              </label>
            </div>

            {/* Cash on Delivery */}
            <div
              className={`hover:border-burnt-orange border rounded-[8px] w-[309px] max-sm:w-full h-[56px] pl-[21px] flex items-center gap-[16px] cursor-pointer ${
                values.paymentMethod === "Cash on Delivery"
                  ? "border-burnt-orange"
                  : "border-silver-gray"
              }`}
            >
              <Field
                id="cash"
                autoComplete="off"
                type="radio"
                name="paymentMethod"
                value="Cash on Delivery"
                className="appearance-none cursor-pointer w-[20px] h-[20px] border border-silver-gray rounded-full checked:before:bg-burnt-orange relative before:content-[''] before:w-[10px] before:h-[10px]  before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 "
              />
              <label
                htmlFor="cash"
                className={` font-bold text-[12px] tracking-[-0.21px] mb-[9px] mt-[16px]  text-black cursor-pointer`}
              >
                Cash on Delivery
              </label>
            </div>
          </div>
        </div>

        {/* Conditional e-Money fields */}
        {values.paymentMethod === "e-Money" && (
          <div className="flex justify-between flex-wrap pt-[16px] max-sm:gap-[8px]">
            {/* e-Money Number */}
            <div className="flex flex-col max-md:w-full">
              <label
                htmlFor="eMoneyNumber"
                className={` font-bold text-[12px] tracking-[-0.21px] mb-[9px] mt-[16px] ${
                  errors.eMoneyNumber && touched.eMoneyNumber
                    ? "text-red"
                    : "text-black"
                }`}
              >
                e-Money Number
              </label>
              <Field
                id="eMoneyNumber"
                autoComplete="cc-number"
                type="text"
                name="eMoneyNumber"
                placeholder="238521993"
                className={`focus:outline-none caret-burnt-orange ${
                  errors.eMoneyNumber && touched.eMoneyNumber
                    ? "border-2 border-red focus:border-red"
                    : "border-silver-gray focus:border-burnt-orange"
                } border rounded-[8px] w-[309px] max-md:w-full h-[56px] pl-[24px] placeholder:text-black placeholder:opacity-40 placeholder:tracking-[-0.25px] placeholder:font-bold placeholder:text-[14px] font-bold text-[14px] tracking-[-0.25px]`}
              />
              <ErrorMessage
                name="eMoneyNumber"
                component="p"
                className="text-red font-medium text-[12px] tracking-[-0.21px] mt-[4px]"
              />
            </div>

            {/* e-Money PIN */}
            <div className="flex flex-col max-md:w-full">
              <label
                htmlFor="eMoneyPIN"
                className={` font-bold text-[12px] tracking-[-0.21px] mb-[9px] mt-[16px] ${
                  errors.eMoneyPIN && touched.eMoneyPIN
                    ? "text-red"
                    : "text-black"
                }`}
              >
                e-Money PIN
              </label>
              <Field
                id="eMoneyPIN"
                autoComplete="off"
                type="password"
                name="eMoneyPIN"
                placeholder="6891"
                className={`focus:outline-none caret-burnt-orange ${
                  errors.eMoneyPIN && touched.eMoneyPIN
                    ? "border-2 border-red focus:border-red"
                    : "border-silver-gray focus:border-burnt-orange"
                } border rounded-[8px] w-[309px] max-md:w-full h-[56px] pl-[24px] placeholder:text-black placeholder:opacity-40 placeholder:tracking-[-0.25px] placeholder:font-bold placeholder:text-[14px] font-bold text-[14px] tracking-[-0.25px]`}
              />
              <ErrorMessage
                name="eMoneyPIN"
                component="p"
                className="text-red font-medium text-[12px] tracking-[-0.21px] mt-[4px]"
              />
            </div>
          </div>
        )}

        {/* Conditional Cash on Delivery */}
        {values.paymentMethod === "Cash on Delivery" && (
          <div className="flex justify-between items-center gap-[32px] mt-[30px]">
            <img
              src={Cash}
              alt=" icon cash on deilvery"
              className="w-[48px] h-[48px]"
            />
            <p className="text-black tracking-0 leading-[25px] font-medium text-[15px] opacity-50">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default PaymentDetails;
