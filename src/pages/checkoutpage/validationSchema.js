import * as Yup from "yup";

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

export default validationSchema;
