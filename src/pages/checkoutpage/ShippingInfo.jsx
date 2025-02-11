/* eslint-disable react/prop-types */
import { Field, ErrorMessage } from "formik";

function ShippingInfo({ errors, touched }) {
  return (
    <>
      <h3 className="pt-[41px] max-md:pt-[32px]  uppercase text-burnt-orange font-bold text-[13px] tracking-[0.93px]">
        shipping info
      </h3>
      <div className="flex justify-between flex-wrap max-md:gap-[8px]">
        {/* address */}
        <div className="flex flex-col w-full">
          <label
            htmlFor="address"
            className={` font-bold text-[12px] tracking-[-0.21px] mb-[9px] mt-[16px] ${
              errors.address && touched.address ? "text-red" : "text-black"
            }`}
          >
            Address
          </label>
          <Field
            id="address"
            autoComplete="street-address"
            type="text"
            name="address"
            placeholder="1137 Williams Avenue"
            className={`focus:outline-none caret-burnt-orange ${
              errors.address && touched.address
                ? "border-2 border-red focus:border-red"
                : "border-silver-gray focus:border-burnt-orange"
            } border rounded-[8px] w-full h-[56px] pl-[24px] placeholder:text-black placeholder:opacity-40 placeholder:tracking-[-0.25px] placeholder:font-bold placeholder:text-[14px] font-bold text-[14px] tracking-[-0.25px]`}
          />
          <ErrorMessage
            name="address"
            component="p"
            className="text-red font-medium text-[12px] tracking-[-0.21px] mt-[4px]"
          />
        </div>

        {/* ZIP Code */}
        <div className="flex flex-col max-md:w-full">
          <label
            htmlFor="zip"
            className={` font-bold text-[12px] tracking-[-0.21px] mb-[9px] mt-[16px] ${
              errors.zip && touched.zip ? "text-red" : "text-black"
            }`}
          >
            ZIP Code
          </label>
          <Field
            id="zip"
            autoComplete="postal-code"
            type="text"
            name="zip"
            placeholder="10001"
            className={`focus:outline-none caret-burnt-orange ${
              errors.zip && touched.zip
                ? "border-2 border-red focus:border-red"
                : "border-silver-gray focus:border-burnt-orange"
            } border rounded-[8px] w-[309px] max-md:w-full h-[56px] pl-[24px] placeholder:text-black placeholder:opacity-40 placeholder:tracking-[-0.25px] placeholder:font-bold placeholder:text-[14px] font-bold text-[14px] tracking-[-0.25px]`}
          />
          <ErrorMessage
            name="zip"
            component="p"
            className="text-red font-medium text-[12px] tracking-[-0.21px] mt-[4px]"
          />
        </div>

        {/* City */}
        <div className="flex flex-col max-md:w-full">
          <label
            htmlFor="city"
            className={` font-bold text-[12px] tracking-[-0.21px] mb-[9px] mt-[16px] ${
              errors.city && touched.city ? "text-red" : "text-black"
            }`}
          >
            City
          </label>
          <Field
            id="city"
            autoComplete="address-level2"
            type="text"
            name="city"
            placeholder="1New York"
            className={`focus:outline-none caret-burnt-orange ${
              errors.city && touched.city
                ? "border-2 border-red focus:border-red"
                : "border-silver-gray focus:border-burnt-orange"
            } border rounded-[8px] w-[309px] max-md:w-full h-[56px] pl-[24px] placeholder:text-black placeholder:opacity-40 placeholder:tracking-[-0.25px] placeholder:font-bold placeholder:text-[14px] font-bold text-[14px] tracking-[-0.25px]`}
          />
          <ErrorMessage
            name="city"
            component="p"
            className="text-red font-medium text-[12px] tracking-[-0.21px] mt-[4px]"
          />
        </div>

        {/* Country */}
        <div className="flex flex-col max-md:w-full">
          <label
            htmlFor="country"
            className={` font-bold text-[12px] tracking-[-0.21px] mb-[9px] mt-[16px] ${
              errors.country && touched.country ? "text-red" : "text-black"
            }`}
          >
            Country
          </label>
          <Field
            id="country"
            autoComplete="country"
            type="text"
            name="country"
            placeholder="United States"
            className={`focus:outline-none caret-burnt-orange ${
              errors.country && touched.country
                ? "border-2 border-red focus:border-red"
                : "border-silver-gray focus:border-burnt-orange"
            } border rounded-[8px] w-[309px] max-md:w-full h-[56px] pl-[24px] placeholder:text-black placeholder:opacity-40 placeholder:tracking-[-0.25px] placeholder:font-bold placeholder:text-[14px] font-bold text-[14px] tracking-[-0.25px]`}
          />
          <ErrorMessage
            name="country"
            component="p"
            className="text-red font-medium text-[12px] tracking-[-0.21px] mt-[4px]"
          />
        </div>
      </div>
    </>
  );
}

export default ShippingInfo;
