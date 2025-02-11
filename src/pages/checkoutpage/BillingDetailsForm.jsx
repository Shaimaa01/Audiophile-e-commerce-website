/* eslint-disable react/prop-types */
import { Field, ErrorMessage } from "formik";

function BillingDetailsForm({ errors, touched }) {
  return (
    <>
      <h3 className="pt-[41px] max-md:pt-[32px]  uppercase text-burnt-orange font-bold text-[13px] tracking-[0.93px]">
        Billing Details
      </h3>
      <div className="flex justify-between flex-wrap max-md:w-full max-md:gap-[8px]">
        {/* name */}
        <div className="flex flex-col max-md:w-full">
          <label
            htmlFor="name"
            className={` font-bold text-[12px] tracking-[-0.21px] mb-[9px] mt-[16px] ${
              errors.name && touched.name ? "text-red" : "text-black"
            }`}
          >
            Name
          </label>
          <Field
            id="name"
            autoComplete="name"
            type="text"
            name="name"
            placeholder="Alexei Ward"
            className={`focus:outline-none caret-burnt-orange ${
              errors.name && touched.name
                ? "border-2 border-red focus:border-red"
                : "border-silver-gray focus:border-burnt-orange"
            } border rounded-[8px] w-[309px] max-md:w-full h-[56px] pl-[24px] placeholder:text-black placeholder:opacity-40 placeholder:tracking-[-0.25px] placeholder:font-bold placeholder:text-[14px] font-bold text-[14px] tracking-[-0.25px]`}
          />
          <ErrorMessage
            name="name"
            component="p"
            className="text-red font-medium text-[12px] tracking-[-0.21px] mt-[4px]"
          />
        </div>
        {/* email */}
        <div className="flex flex-col max-md:w-full">
          <label
            htmlFor="email"
            className={` font-bold text-[12px] tracking-[-0.21px] mb-[9px] mt-[16px] ${
              errors.email && touched.email ? "text-red" : "text-black"
            }`}
          >
            Email Address
          </label>
          <Field
            id="email"
            autoComplete="email"
            type="email"
            name="email"
            placeholder="alexei@mail.com"
            className={`focus:outline-none caret-burnt-orange ${
              errors.email && touched.email
                ? "border-2 border-red focus:border-red"
                : "border-silver-gray focus:border-burnt-orange"
            } border rounded-[8px] w-[309px] max-md:w-full h-[56px] pl-[24px] placeholder:text-black placeholder:opacity-40 placeholder:tracking-[-0.25px] placeholder:font-bold placeholder:text-[14px] font-bold text-[14px] tracking-[-0.25px]`}
          />
          <ErrorMessage
            name="email"
            component="p"
            className="text-red font-medium text-[12px] tracking-[-0.21px] mt-[4px]"
          />
        </div>
        {/* phone */}
        <div className="flex flex-col max-md:w-full">
          <label
            htmlFor="phone"
            className={` font-bold text-[12px] tracking-[-0.21px] mb-[9px] mt-[16px] ${
              errors.phone && touched.phone ? "text-red" : "text-black"
            }`}
          >
            Phone Number
          </label>
          <Field
            id="phone"
            autoComplete="tel"
            type="tel"
            name="phone"
            placeholder="+1 202-555-0136"
            className={`focus:outline-none caret-burnt-orange ${
              errors.phone && touched.phone
                ? "border-2 border-red focus:border-red"
                : "border-silver-gray focus:border-burnt-orange"
            } border rounded-[8px] w-[309px] max-md:w-full h-[56px] pl-[24px] placeholder:text-black placeholder:opacity-40 placeholder:tracking-[-0.25px] placeholder:font-bold placeholder:text-[14px] font-bold text-[14px] tracking-[-0.25px]`}
          />
          <ErrorMessage
            name="phone"
            component="p"
            className="text-red font-medium text-[12px] tracking-[-0.21px] mt-[4px]"
          />
        </div>
      </div>
    </>
  );
}

export default BillingDetailsForm;
