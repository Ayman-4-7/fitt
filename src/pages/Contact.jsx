import React, { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="bg-[#F4F6FF]">
    
      <div className="bg-blue-600 text-white py-12  text-center">
          <h1 className="text-4xl font-bold mb-4 ">Contact Us</h1>
          <p className="text-xl">Have questions or feedback? We'd love to hear from you!</p>
      </div>

      {/* Contact Form and Info */}
      <div className=" py-16 mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
      
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-700 mb-8">
                We're here to help with any questions you might 
                have about our fitness programs, membership options, or
                anything else related to your fitness journey.
              </p>

              <div className="space-y-6">
                {/* address */}
                <div className="flex">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-gray-600">The British University In Egypt, Gate 3 , Building H </p>
                  </div>
                </div>

                {/* email */}
                <div className="flex">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-gray-600">NonStopGym@gmail.com</p>
                  </div>
                </div>

                {/* phone */}
                <div className="flex">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-gray-600">(+20)1555111854
                      - (+20)1000095905
                    </p>
                  </div>
                </div>

                {/* working hours */}
                <div className="flex">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Working Hours</h3>
                    <p className="text-gray-600">Sunday - Saturday: 7AM - 1AM</p>
                    <p className="text-gray-600">Friday: 1PM - 3AM</p>
                    
                  </div>
                </div>
              </div>
              </div>

          { /* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="flex text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F4F6FF]"
                  />
                </div>

                <div>
                  <label className="flex text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F4F6FF]"
                  />
                </div>

                <div>
                  <label className="flex text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F4F6FF]"
                  />
                </div>

                <div>
                  <label className="flex text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F4F6FF]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex mx-auto bg-blue-600 text-white py-2 px-6 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
                
              </form>
            </div>
      </div>

      {/* Map Section */}
          <div className="max-w-5xl mx-auto py-8 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.1758946653954!2d31.60854556000725!3d30.11777991519683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581dea54fc683b%3A0xfb58c4d6f97e0173!2z2KfZhNis2KfZhdi52Kkg2KfZhNio2LHZiti32KfZhtmK2Kkg2YHZiiDZhdi12LE!5e0!3m2!1sar!2seg!4v1743420869107!5m2!1sar!2seg"
                width="1050"
                height="400"
              ></iframe>
        </div>
      
    </div>
  )
}