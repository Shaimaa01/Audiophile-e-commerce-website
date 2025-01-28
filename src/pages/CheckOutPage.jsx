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
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    zip: Yup.string().required("ZIP code is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
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

        <div className="flex justify-between px-[165px]">
          {/* check out form   */}
          <div className="w-[730px] py-[54px] px-[48px] bg-white">
            <h2 className="text-black tracking-[1.14px] font-bold text-[32px]">
              CHECKOUT
            </h2>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form>
                  {/* Billing Details */}
                  <h3 className="pt-[41px] pb-[16px] uppercase text-burnt-orange font-bold text-[13px] tracking-[0.93px]">
                    Billing Details
                  </h3>
                  <div>
                    <label className="text-black font-bold text-[12px] tracking-[-0.21px]" >Name</label>
                    <Field type="text" name="name" placeholder="Alexei Ward" className="border border-[#CFCFCF] rounded-[8px] w-[309px] h-[56px]" />
                    <ErrorMessage name="name" component="div" />

                    <label>
                      Email:
                      <Field type="email" name="email" />
                      <ErrorMessage name="email" component="div" />
                    </label>

                    <label>
                      Phone Number:
                      <Field type="tel" name="phone" />
                      <ErrorMessage name="phone" component="div" />
                    </label>
                  </div>

                  <label>
                    Address:
                    <Field type="text" name="address" />
                    <ErrorMessage name="address" component="div" />
                  </label>

                  <label>
                    ZIP Code:
                    <Field type="text" name="zip" />
                    <ErrorMessage name="zip" component="div" />
                  </label>

                  <label>
                    City:
                    <Field type="text" name="city" />
                    <ErrorMessage name="city" component="div" />
                  </label>

                  <label>
                    Country:
                    <Field as="select" name="country">
                      <option value="">Select your country</option>
                      <option value="USA">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="India">India</option>
                      <option value="Other">Other</option>
                    </Field>
                    <ErrorMessage name="country" component="div" />
                  </label>

                  <button type="submit">Submit</button>
                </Form>
              )}
            </Formik>
          </div>

          {/* summry */}
          <div className="w-[350px] bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage;
