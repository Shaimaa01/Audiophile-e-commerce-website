/* eslint-disable react/prop-types */
import GoBackButton from "../../components/GoBackButton";
import { Formik, Form } from "formik";
import validationSchema from "./validationSchema";
import { initialValues } from "./initialValues";
import OrderSummry from "./OrderSummry";
import { useState } from "react";
import ThankYou from "./ThankYou";
import BillingDetailsForm from "./BillingDetailsForm";
import ShippingInfo from "./ShippingInfo";
import PaymentDetails from "./PaymentDetails";

function CheckOutPage({ cartItems, clearCart }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

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

                    <BillingDetailsForm errors={errors} touched={touched} />

                    <ShippingInfo errors={errors} touched={touched} />

                    <PaymentDetails
                      values={values}
                      errors={errors}
                      touched={touched}
                    />
                  </div>

                  {/* summry */}
                  <OrderSummry cartItems={cartItems} />
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
        clearCart={clearCart}
      />
    </section>
  );
}

export default CheckOutPage;
