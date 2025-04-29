import DashboardLayout from "../components/DashboardLayout";
import { Link } from "react-router-dom"
import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"


const EditG = () => {


  const contactSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
    facebook: Yup.string().required("facebook is required"),
    instgram: Yup.string().required("instgram is required"),
  })

  

  const handleSubmit = (value,{resetForm }) => {
    alert('Done')
    resetForm();
  }

  

  return (
    <DashboardLayout>
      <div className="max-w-lg mx-auto mt-10 p-6 text-white shadow-lg rounded-lg text-center bg-gray-900">
        <h2 className="text-3xl font-extrabold text-white mb-5">Edit Contact Information</h2>

        <Formik initialValues={{email: '', phone: '', facebook: '', instgram: ''}} validationSchema={contactSchema} onSubmit={handleSubmit}>
          {
            ({ isSubmitting, errors, touched }) => (
              <Form>
              {/* Contact Email */}
              <div className="mb-4 text-left">
                <label className="block mt-5 text-gray-300">Contact Email</label>
                <Field
                 id='email'
                 name='email'
                  className="w-full mt-1 p-2 border border-gray-600 bg-gray-800 rounded-lg text-white placeholder-gray-500"
                  placeholder="Enter contact email"
                />
                <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600" />
              </div>
  
              {/* Phone (optional) */}
              <div className="mb-4 text-left">
                <label className="block text-gray-300">Phone Number</label>
                <Field
                id='phone'
                 name='phone'
                  className="w-full mt-1 p-2 border border-gray-600 bg-gray-800 rounded-lg text-white placeholder-gray-500"
                  placeholder="Enter phone number"
                />
                <ErrorMessage name="phone" component="div" className="mt-1 text-sm text-red-600" />
              </div>
  
              
  
              {/* Facebook */}
              <div className="mb-4 text-left">
                <label className="block text-gray-300">Facebook URL</label>
                <Field
                   id='facebook'
                   name='facebook'  
                  className="w-full mt-1 p-2 border border-gray-600 bg-gray-800 rounded-lg text-white placeholder-gray-500"
                  placeholder="https://facebook.com/yourpage"
                />
                <ErrorMessage name="facebook" component="div" className="mt-1 text-sm text-red-600" />
              </div>
  
              {/* Instagram */}
              <div className="mb-4 text-left">
                <label className="block text-gray-300">Instagram URL</label>
                <Field
                  id='instgram'
                  name='instgram'
                  className="w-full mt-1 p-2 border border-gray-600 bg-gray-800 rounded-lg text-white placeholder-gray-500"
                  placeholder="https://instagram.com/yourhandle"
                />
                <ErrorMessage name="instgram" component="div" className="mt-1 text-sm text-red-600" />
              </div> 
  
  
              {/* Submit Button */}
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-white font-bold p-2 rounded-lg text-black hover:bg-white hover:text-[#1f2a44] transition duration-200"
              >
                Save Changes
              </button>
            </Form>
            )
          }

        </Formik>

      </div>
      </DashboardLayout>
  );
}
export default EditG