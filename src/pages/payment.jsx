"use client";

import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Payment validation schema using Yup
const PaymentSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  cardNumber: Yup.string()
    .matches(/^[0-9]{16}$/, "Card number must be 16 digits")
    .required("Card number is required"),
  expiryDate: Yup.string()
    .matches(
      /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
      "Expiry date must be in MM/YY format"
    )
    .required("Expiry date is required"),
  cvv: Yup.string()
    .matches(/^[0-9]{3,4}$/, "CVV must be 3 or 4 digits")
    .required("CVV is required"),
});

const Payment = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white py-20"
        style={{ backgroundImage: "url('./src/asd1.png')" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Complete Your Payment
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Join FitLife today and start your fitness journey with our premium
            workout plans.
          </p>
        </div>
      </section>

      {/* Payment Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Payment Details
            </h2>

            <Formik
              initialValues={{
                fullName: "",
                email: "",
                cardNumber: "",
                expiryDate: "",
                cvv: "",
                plan: "monthly",
              }}
              validationSchema={PaymentSchema}
              onSubmit={(values, { setSubmitting }) => {
                // In a real app, you would process the payment here
                console.log(values);
                setTimeout(() => {
                  alert("Payment successful!");
                  setSubmitting(false);
                }, 500);
              }}
            >
              {({ isSubmitting, touched, errors }) => (
                <Form className="space-y-6">
                  {/* Plan Selection */}
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <Field type="radio" name="plan" value="monthly" />
                        <span className="text-lg font-medium">
                          Monthly Plan - $29.99/month
                        </span>
                      </label>
                    </div>
                    <div className="flex-1">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <Field type="radio" name="plan" value="annual" />
                        <span className="text-lg font-medium">
                          Annual Plan - $249.99/year
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-gray-700 font-medium mb-1"
                    >
                      Full Name
                    </label>
                    <Field
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-md border ${
                        touched.fullName && errors.fullName
                          ? "border-red-500"
                          : "border-gray-300 focus:border-blue-500"
                      } focus:outline-none`}
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-1"
                    >
                      Email Address
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 rounded-md border ${
                        touched.email && errors.email
                          ? "border-red-500"
                          : "border-gray-300 focus:border-blue-500"
                      } focus:outline-none`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Payment Information */}
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-xl font-bold mb-4">
                      Payment Information
                    </h3>

                    <div>
                      <label
                        htmlFor="cardNumber"
                        className="block text-gray-700 font-medium mb-1"
                      >
                        Card Number
                      </label>
                      <Field
                        type="text"
                        name="cardNumber"
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className={`w-full px-4 py-3 rounded-md border ${
                          touched.cardNumber && errors.cardNumber
                            ? "border-red-500"
                            : "border-gray-300 focus:border-blue-500"
                        } focus:outline-none`}
                      />
                      <ErrorMessage
                        name="cardNumber"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <label
                          htmlFor="expiryDate"
                          className="block text-gray-700 font-medium mb-1"
                        >
                          Expiry Date (MM/YY)
                        </label>
                        <Field
                          type="text"
                          name="expiryDate"
                          id="expiryDate"
                          placeholder="MM/YY"
                          className={`w-full px-4 py-3 rounded-md border ${
                            touched.expiryDate && errors.expiryDate
                              ? "border-red-500"
                              : "border-gray-300 focus:border-blue-500"
                          } focus:outline-none`}
                        />
                        <ErrorMessage
                          name="expiryDate"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="cvv"
                          className="block text-gray-700 font-medium mb-1"
                        >
                          CVV
                        </label>
                        <Field
                          type="text"
                          name="cvv"
                          id="cvv"
                          placeholder="123"
                          className={`w-full px-4 py-3 rounded-md border ${
                            touched.cvv && errors.cvv
                              ? "border-red-500"
                              : "border-gray-300 focus:border-blue-500"
                          } focus:outline-none`}
                        />
                        <ErrorMessage
                          name="cvv"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 disabled:opacity-70"
                    >
                      {isSubmitting ? "Processing..." : "Complete Payment"}
                    </button>
                  </div>

                  <p className="text-center text-gray-600 text-sm mt-4">
                    By completing this purchase, you agree to our{" "}
                    <Link to="/terms" className="text-blue-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy"
                      className="text-blue-600 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
