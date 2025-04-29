import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import DashboardLayout from "../components/DashboardLayout"

export default function EditMemberShip() {
  
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    membershipType: "Standard",
    expirationDate: "",
  }

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    membershipType: Yup.string().required("Membership type is required"),
    expirationDate: Yup.date().required("Expiration date is required"),
  })

  const handleSubmit = (values, { resetForm }) => {
    console.log("Membership form submitted:", values)
    alert("Membership details updated successfully!")
    resetForm()
  }

  return (
    <DashboardLayout>
      <div className="max-w-lg mx-auto mt-10 p-6 text-white shadow-lg rounded-lg text-center bg-gray-900">
        <h2 className="text-3xl font-extrabold text-white mb-5">Edit Membership</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4 text-left">
            {/* Full Name & Email */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block text-gray-300">Full Name</label>
                <Field
                  name="fullName"
                  type="text"
                  placeholder="Enter full name"
                  className="w-full mt-1 p-2 border border-gray-600 bg-gray-800 rounded-lg text-white placeholder-gray-500"
                />
                <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="w-full">
                <label className="block text-gray-300">Email</label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className="w-full mt-1 p-2 border border-gray-600 bg-gray-800 rounded-lg text-white placeholder-gray-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-300">Phone Number</label>
              <Field
                name="phone"
                type="tel"
                placeholder="Enter phone number"
                className="w-full mt-1 p-2 border border-gray-600 bg-gray-800 rounded-lg text-white placeholder-gray-500"
              />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-300">Address</label>
              <Field
                as="textarea"
                name="address"
                rows="3"
                placeholder="Enter address"
                className="w-full mt-1 p-2 border border-gray-600 bg-gray-800 rounded-lg text-white placeholder-gray-500"
              />
              <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Membership Type */}
            <div>
              <label className="block text-gray-300">Membership Type</label>
              <Field
                as="select"
                name="membershipType"
                className="w-full mt-1 p-2 border border-gray-600 bg-gray-800 rounded-lg text-white"
              >
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
                <option value="VIP">VIP</option>
              </Field>
              <ErrorMessage name="membershipType" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Expiration Date */}
            <div>
              <label className="block text-gray-300">Expiration Date</label>
              <Field
                name="expirationDate"
                type="date"
                className="w-full mt-1 p-2 border border-gray-600 bg-gray-800 rounded-lg text-white"
              />
              <ErrorMessage name="expirationDate" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-white font-bold p-2 rounded-lg text-black hover:bg-white hover:text-[#1f2a44] transition duration-200"
            >
              Save Changes
            </button>
          </Form>
        </Formik>
      </div>
    </DashboardLayout>
  )
}
