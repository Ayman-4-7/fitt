import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useNavigate, Link } from "react-router-dom"

// Validation Schema
const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
})

export default function Login() {
  const navigate = useNavigate()

  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    const { email, password } = values

    if (email === "admin@gmail.com" && password === "admin123") {
      navigate("/Dashboard")
    } else {
      setErrors({ password: "Invalid email or password" })
    }

    setSubmitting(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form className="space-y-4">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="admin@example.com"
                  className={`w-full px-3 py-2 border rounded ${
                    errors.email && touched.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <ErrorMessage name="email" component="div" className="text-sm text-red-600 mt-1" />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="admin123"
                  className={`w-full px-3 py-2 border rounded ${
                    errors.password && touched.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <ErrorMessage name="password" component="div" className="text-sm text-red-600 mt-1" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>

          
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
