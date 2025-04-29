import React from "react"
import DashboardLayout from "../components/DashboardLayout"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

export default function EditExercise() {
  const initialValues = {
    gymPlans: "gym_plan",
    exerciseName: "",
    description: "",
    duration: "",
    intensityLevel: "low",
    date: "",
  }

  const exerciseSchema = Yup.object().shape({
    gymPlans: Yup.string().required("Plan selection is required"),
    exerciseName: Yup.string()
      .required("Exercise name is required")
      .min(3, "Minimum 3 characters"),
    description: Yup.string().required("Description is required"),
    duration: Yup.number()
      .typeError("Duration must be a number")
      .required("Duration is required")
      .min(1, "Must be at least 1 minute"),
    intensityLevel: Yup.string().required("Intensity level is required"),
    date: Yup.date().required("Date is required"),
  })

  const handleSubmit = (values, { resetForm }) => {
    console.log("Exercise values:", values)
    alert("Exercise updated successfully!")
    resetForm()
  }

  return (
    <DashboardLayout>
      <div className="max-w-lg mx-auto mt-10 p-6 text-white shadow-lg rounded-lg text-center bg-gray-900">
        <h1 className="text-3xl font-extrabold text-white mb-5">Edit Exercise</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={exerciseSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-4 text-left">
              {/* Plans */}
              <div>
                <label htmlFor="gymPlans" className="block text-gray-300">Plans</label>
                <Field
                  as="select"
                  name="gymPlans"
                  id="gymPlans"
                  className="w-full mt-1 p-2 border border-gray-600 bg-gray-800 rounded-lg text-white"
                >
                  <option value="gym_plan">Gym Plan</option>
                  <option value="home_plan">Home Plan</option>
                </Field>
                <ErrorMessage name="gymPlans" component="div" className="text-sm text-red-500" />
              </div>

              {/* Exercise Name */}
              <div>
                <label htmlFor="exerciseName" className="block text-gray-300">Exercise Name</label>
                <Field
                  type="text"
                  name="exerciseName"
                  id="exerciseName"
                  placeholder="Enter exercise name"
                  className="w-full mt-1 p-2 border border-gray-600 bg-gray-800 rounded-lg text-white placeholder-gray-500"
                />
                <ErrorMessage name="exerciseName" component="div" className="text-sm text-red-500" />
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-gray-300">Description</label>
                <Field
                  as="textarea"
                  name="description"
                  id="description"
                  rows="4"
                  placeholder="Enter description"
                  className="w-full mt-1 p-2 border border-gray-600 bg-gray-800 rounded-lg text-white placeholder-gray-500"
                />
                <ErrorMessage name="description" component="div" className="text-sm text-red-500" />
              </div>

              {/* Duration */}
              <div>
                <label htmlFor="duration" className="block text-gray-300">Duration (minutes)</label>
                <Field
                  type="number"
                  name="duration"
                  id="duration"
                  placeholder="Enter duration"
                  className="w-full mt-1 p-2 border border-gray-600 bg-gray-800 rounded-lg text-white placeholder-gray-500"
                />
                <ErrorMessage name="duration" component="div" className="text-sm text-red-500" />
              </div>

              {/* Intensity Level */}
              <div>
                <label htmlFor="intensityLevel" className="block text-gray-300">Intensity Level</label>
                <Field
                  as="select"
                  name="intensityLevel"
                  id="intensityLevel"
                  className="w-full mt-1 p-2 border border-gray-600 bg-gray-800 rounded-lg text-white"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </Field>
                <ErrorMessage name="intensityLevel" component="div" className="text-sm text-red-500" />
              </div>

              {/* Date */}
              <div>
                <label htmlFor="date" className="block text-gray-300">Date</label>
                <Field
                  type="date"
                  name="date"
                  id="date"
                  className="w-full mt-1 p-2 border border-gray-600 bg-gray-800 rounded-lg text-white"
                />
                <ErrorMessage name="date" component="div" className="text-sm text-red-500" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-white font-bold p-2 rounded-lg text-black hover:bg-white hover:text-[#1f2a44] "
              >
                Save Changes
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </DashboardLayout>
  )
}
