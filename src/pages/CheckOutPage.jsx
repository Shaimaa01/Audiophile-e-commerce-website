import GoBackButton from "../components/GoBackButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function CheckOutPage() {
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
    name: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(
        /^\+?\d{1,4}[\s-]?\(?\d{1,3}?\)?[\s-]?\d{1,3}[\s-]?\d{4}$/,
        "Phone number is not valid"
      )
      .required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    zip: Yup.string().required("ZIP code is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    paymentMethod: Yup.string().required("PaymentMethod is required"),
    eMoneyNumber: Yup.string()
      .required("e-Money number is required ")
      .nullable(),
    eMoneyPIN: Yup.string().required("e-Money PIN is required ").nullable(),
  });

  const handleSubmit = (values, { resetForm }) => {
    alert("Form submitted successfully!");
    console.log(values);
    resetForm();
  };

  return (
    <div className="">
      {/* Header */}
      <div className="bg-black h-[97px] "></div>

      {/* container */}
      <div className=" bg-light-gray">
        <GoBackButton />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form noValidate>
              <div className="flex justify-between px-[165px] pb-[160px]">
                {/* check out form   */}
                <div className="w-[730px] py-[54px] px-[48px] bg-white">
                  <h2 className="text-black tracking-[1.14px] font-bold text-[32px]">
                    CHECKOUT
                  </h2>
                  {/* Billing Details */}
                  <h3 className="pt-[41px]  uppercase text-burnt-orange font-bold text-[13px] tracking-[0.93px]">
                    Billing Details
                  </h3>
                  <div className="flex justify-between flex-wrap">
                    {/* name */}
                    <div className="flex flex-col">
                      <label className="text-black font-bold text-[12px] tracking-[-0.21px] mb-[9px] mt-[16px]">
                        Name
                      </label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Alexei Ward"
                        className="border border-silver-gray rounded-[8px] w-[309px] h-[56px] pl-[24px] placeholder:text-black placeholder:opacity-40 placeholder:tracking-[-0.25px] placeholder:font-bold placeholder:text-[14px] "
                      />
                      <ErrorMessage name="name" component="p" />
                    </div>

                    {/* email */}
                    <div className="flex flex-col">
                      <label className="text-black font-bold text-[12px] tracking-[-0.21px] mb-[9px] mt-[16px]">
                        Email Address
                      </label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="alexei@mail.com"
                        className="border border-silver-gray rounded-[8px] w-[309px] h-[56px] pl-[24px] placeholder:text-black placeholder:opacity-40 placeholder:tracking-[-0.25px] placeholder:font-bold placeholder:text-[14px] "
                      />
                      <ErrorMessage name="email" component="p" />
                    </div>

                    {/* phone */}
                    <div className="flex flex-col">
                      <label className="text-black font-bold text-[12px] tracking-[-0.21px] mb-[9px] mt-[16px]">
                        Phone Number
                      </label>
                      <Field
                        type="tel"
                        name="phone"
                        placeholder="+1 202-555-0136"
                        className="border border-silver-gray rounded-[8px] w-[309px] h-[56px] pl-[24px] placeholder:text-black placeholder:opacity-40 placeholder:tracking-[-0.25px] placeholder:font-bold placeholder:text-[14px] "
                      />
                      <ErrorMessage name="phone" component="p" />
                    </div>
                  </div>
                  {/* shipping info */}
                  <h3 className="pt-[41px]  uppercase text-burnt-orange font-bold text-[13px] tracking-[0.93px]">
                    shipping info
                  </h3>
                  <div className="flex justify-between flex-wrap">
                    {/* address */}
                    <div className="flex flex-col w-full">
                      <label className="text-black font-bold text-[12px] tracking-[-0.21px] mb-[9px] mt-[16px]">
                        Address
                      </label>
                      <Field
                        type="text"
                        name="address"
                        placeholder="1137 Williams Avenue"
                        className="border border-silver-gray rounded-[8px] w-full h-[56px] pl-[24px] placeholder:text-black placeholder:opacity-40 placeholder:tracking-[-0.25px] placeholder:font-bold placeholder:text-[14px] "
                      />
                      <ErrorMessage name="address" component="p" />
                    </div>

                    {/* ZIP Code */}
                    <div className="flex flex-col ">
                      <label className="text-black font-bold text-[12px] tracking-[-0.21px] mb-[9px] mt-[16px]">
                        ZIP Code
                      </label>
                      <Field
                        type="text"
                        name="zip"
                        placeholder="10001"
                        className="border border-silver-gray rounded-[8px]  w-[309px]  h-[56px] pl-[24px] placeholder:text-black placeholder:opacity-40 placeholder:tracking-[-0.25px] placeholder:font-bold placeholder:text-[14px] "
                      />
                      <ErrorMessage name="zip" component="p" />
                    </div>

                    {/* City */}
                    <div className="flex flex-col ">
                      <label className="text-black font-bold text-[12px] tracking-[-0.21px] mb-[9px] mt-[16px]">
                        City
                      </label>
                      <Field
                        type="text"
                        name="city"
                        placeholder="1New York"
                        className="border border-silver-gray rounded-[8px]  w-[309px]  h-[56px] pl-[24px] placeholder:text-black placeholder:opacity-40 placeholder:tracking-[-0.25px] placeholder:font-bold placeholder:text-[14px] "
                      />
                      <ErrorMessage name="city" component="p" />
                    </div>

                    {/* Country */}
                    <div className="flex flex-col ">
                      <label className="text-black font-bold text-[12px] tracking-[-0.21px] mb-[9px] mt-[16px]">
                        Country
                      </label>
                      <Field
                        type="text"
                        name="country"
                        placeholder="United States"
                        className="border border-silver-gray rounded-[8px]  w-[309px]  h-[56px] pl-[24px] placeholder:text-black placeholder:opacity-40 placeholder:tracking-[-0.25px] placeholder:font-bold placeholder:text-[14px] "
                      />
                      <ErrorMessage name="country" component="p" />
                    </div>
                  </div>
                  {/* payment details */}
                  <h3 className="pt-[41px]  uppercase text-burnt-orange font-bold text-[13px] tracking-[0.93px]">
                    payment details
                  </h3>
                  <div>
                    {/* Payment Method */}
                    <div
                      role="group"
                      aria-labelledby="payment-method"
                      className="flex justify-between mt-[16px]"
                    >
                      <h4 className="text-black font-bold text-[12px] tracking-[-0.21px] mb-[9px] ">
                        Payment Method
                      </h4>
                      <div className="flex flex-col gap-[16px]">
                        {/* e-mony */}
                        <div
                          className={`border rounded-[8px] w-[309px] h-[56px] pl-[21px] flex items-center gap-[16px]  ${
                            values.paymentMethod === "e-Money"
                              ? "border-burnt-orange"
                              : "border-silver-gray"
                          }`}
                        >
                          <Field
                            id="e-Money"
                            type="radio"
                            name="paymentMethod"
                            value="e-Money"
                            className="appearance-none cursor-pointer w-[20px] h-[20px] border border-silver-gray rounded-full checked:before:bg-burnt-orange relative before:content-[''] before:w-[10px] before:h-[10px]  before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 "
                          />
                          <label
                            htmlFor="e-Money"
                            className="cursor-pointer text-black font-bold text-[14px] tracking-[-0.25px]"
                          >
                            e-Money
                          </label>
                        </div>

                        {/* Cash on Delivery */}
                        <div
                          className={`border rounded-[8px] w-[309px] h-[56px] pl-[21px] flex items-center gap-[16px] cursor-pointer ${
                            values.paymentMethod === "Cash on Delivery"
                              ? "border-burnt-orange"
                              : "border-silver-gray"
                          }`}
                        >
                          <Field
                            id="cash"
                            type="radio"
                            name="paymentMethod"
                            value="Cash on Delivery"
                            className="appearance-none cursor-pointer w-[20px] h-[20px] border border-silver-gray rounded-full checked:before:bg-burnt-orange relative before:content-[''] before:w-[10px] before:h-[10px]  before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 "
                          />
                          <label
                            htmlFor="cash"
                            className="cursor-pointer text-black font-bold text-[14px] tracking-[-0.25px]"
                          >
                            Cash on Delivery
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Conditional e-Money fields */}
                    {values.paymentMethod === "e-Money" && (
                      <div className="flex justify-between flex-wrap pt-[16px]">
                        {/* e-Money Number */}
                        <div className="flex flex-col">
                          <label className="text-black font-bold text-[12px] tracking-[-0.21px] mb-[9px] mt-[16px]">
                            e-Money Number
                          </label>
                          <Field
                            type="text"
                            name="eMoneyNumber"
                            placeholder="238521993"
                            className="border border-silver-gray rounded-[8px] w-[309px] h-[56px] pl-[24px] placeholder:text-black placeholder:opacity-40 placeholder:tracking-[-0.25px] placeholder:font-bold placeholder:text-[14px] "
                          />
                          <ErrorMessage name="eMoneyNumber" component="p" />
                        </div>

                        {/* e-Money PIN */}
                        <div className="flex flex-col">
                          <label className="text-black font-bold text-[12px] tracking-[-0.21px] mb-[9px] mt-[16px]">
                            e-Money PIN
                          </label>
                          <Field
                            type="password"
                            name="eMoneyPIN"
                            placeholder="6891"
                            className="border border-silver-gray rounded-[8px] w-[309px] h-[56px] pl-[24px] placeholder:text-black placeholder:opacity-40 placeholder:tracking-[-0.25px] placeholder:font-bold placeholder:text-[14px] "
                          />
                          <ErrorMessage name="eMoneyPIN" component="p" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* summry */}
                <div className="w-[350px]  bg-white">
                  <button type="submit">Submit</button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default CheckOutPage;
