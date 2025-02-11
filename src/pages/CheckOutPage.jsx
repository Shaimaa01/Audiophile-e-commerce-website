/* eslint-disable react/prop-types */
import GoBackButton from "../components/GoBackButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import OrderSummry from "../components/OrderSummry";
import { useState } from "react";
import ThankYou from "../components/ThankYou";
import Cash from "/assets/checkout/icon-cash-on-delivery.svg";

function CheckOutPage({ cartItems , clearCart }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "e-Money",
    eMoneyNumber: "",
    eMoneyPIN: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name can't be longer than 50 characters")
      .matches(/^[a-zA-Z\s]+$/, "Name should only contain letters and spaces")
      .required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(
        /^\+?\d{1,4}[\s-]?\(?\d{1,3}?\)?[\s-]?\d{1,3}[\s-]?\d{4}$/,
        "Phone number is not valid"
      )
      .required("Phone number is required"),
    address: Yup.string()
      .min(5, "Address is too short")
      .max(100, "Address is too long")
      .matches(/^[A-Za-z0-9\s,.-]+$/, "Address contains invalid characters")
      .required("Address is required"),
    zip: Yup.string()
      .matches(/^[A-Z0-9]{1,5}\s?-?\s?[A-Z0-9]{3,6}$/i, "ZIP is not valid")
      .required("ZIP code is required"),
    city: Yup.string()
      .min(2, "City name is too short")
      .matches(/^[a-zA-Z\s]+$/, "City should only contain letters")
      .required("City is required"),
    country: Yup.string()
      .min(2, "Country name is too short")
      .max(20, "Country name is too long")
      .matches(/^[a-zA-Z\s'-.]+$/, "Country name contains invalid characters")
      .required("Country is required"),
    paymentMethod: Yup.string().required("PaymentMethod is required"),
    eMoneyNumber: Yup.string().when("paymentMethod", {
      is: "e-Money",
      then: (schema) =>
        schema
          .matches(
            /^[a-zA-Z0-9]+$/,
            "e-Money number should contain only letters and numbers"
          )
          .required("e-Money number is required"),
      otherwise: (schema) => schema,
    }),
    eMoneyPIN: Yup.string().when("paymentMethod", {
      is: "e-Money",
      then: (schema) =>
        schema
          .required("e-Money PIN is required")
          .length(4, "e-Money PIN must be exactly 4 digits")
          .matches(/^\d{4}$/, "e-Money PIN must be numeric"),
      otherwise: (schema) => schema,
    }),
  });

  const calculateTotal = () => {
    const productTotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return productTotal;
  };

  const shipping = 50;
  const vat = calculateTotal() * 0.2;
  const grandTotal = calculateTotal() + shipping;

  return (
    <section aria-labelledby="check-out-page" className="relative">
      {/* Header */}
      <div className="bg-black  xl:h-[96px] max-xl:h-[90px]  "></div>

      {/* container */}
      <div className=" bg-light-gray">
        <GoBackButton />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            setIsSubmitted(true);
            window.scrollTo({ top: 200 });
          }}
        >
          {({ handleSubmit, errors, touched, values }) => {
            
            
            return (
              <Form noValidate onSubmit={handleSubmit}>
                <div className="flex justify-between xl:px-[160px] max-xl:px-[39px] max-sm:px-[24px] xl:pb-[160px] max-xl:pb-[116px] max-md:pb-[97px] max-xl:flex-col max-xl:items-center max-xl:gap-[32px]">
                  {/* check out form   */}
                  <div className="xl:w-[730px] max-xl:w-[689px] max-md:w-full xl:py-[54px] max-xl:py-[30px] xl:px-[48px] max-xl:px-[27.5px] max-md:p-[24px] bg-white rounded-[8px]">
                    <h2 className="text-black tracking-[1.14px] max-sm:tracking-[1px] font-bold text-[32px] max-sm:text-[28px]">
                      CHECKOUT
                    </h2>
                    {/* Billing Details */}
                    <h3 className="pt-[41px] max-md:pt-[32px]  uppercase text-burnt-orange font-bold text-[13px] tracking-[0.93px]">
                      Billing Details
                    </h3>
                    <div className="flex justify-between flex-wrap max-md:w-full max-md:gap-[8px]">
                      {/* name */}
                      <div className="flex flex-col max-md:w-full">
                        <label
                          htmlFor="name"
                          className={` font-bold text-[12px] tracking-[-0.21px] mb-[9px] mt-[16px] ${
                            errors.name && touched.name
                              ? "text-red"
                              : "text-black"
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
                            errors.email && touched.email
                              ? "text-red"
                              : "text-black"
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
                            errors.phone && touched.phone
                              ? "text-red"
                              : "text-black"
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
                    {/* shipping info */}
                    <h3 className="pt-[41px] max-md:pt-[32px]  uppercase text-burnt-orange font-bold text-[13px] tracking-[0.93px]">
                      shipping info
                    </h3>
                    <div className="flex justify-between flex-wrap max-md:gap-[8px]">
                      {/* address */}
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor="address"
                          className={` font-bold text-[12px] tracking-[-0.21px] mb-[9px] mt-[16px] ${
                            errors.address && touched.address
                              ? "text-red"
                              : "text-black"
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
                            errors.zip && touched.zip
                              ? "text-red"
                              : "text-black"
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
                            errors.city && touched.city
                              ? "text-red"
                              : "text-black"
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
                            errors.country && touched.country
                              ? "text-red"
                              : "text-black"
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
                    {/* payment details */}
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
                            The ‘Cash on Delivery’ option enables you to pay in
                            cash when our delivery courier arrives at your
                            residence. Just make sure your address is correct so
                            that your order will not be cancelled.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* summry */}
                  <OrderSummry
                    cartItems={cartItems}
                    calculateTotal={calculateTotal}
                    shipping={shipping}
                    vat={vat}
                    grandTotal={grandTotal}
                  
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>

      {/* ThankYou */}
      <ThankYou
        isSubmitted={isSubmitted}
        cartItems={cartItems}
        calculateTotal={calculateTotal}
        grandTotal={grandTotal}
        clearCart={clearCart}
      />
    </section>
  );
}

export default CheckOutPage;
