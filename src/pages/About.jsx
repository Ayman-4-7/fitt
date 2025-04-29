import React from "react"

  
  
  
  
  export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About NoN-Stop Gym</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're on a mission to make fitness accessible, enjoyable, and effective for everyone.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-6">
               NoN-Stop was founded in 2023 by a group of fitness enthusiasts who believed that quality fitness guidance
              should be accessible to everyone, regardless of their location or schedule.
            </p>
            <p className="text-gray-700 mb-6">
              What started as a small blog sharing home workout tips has grown into a comprehensive fitness platform
              serving thousands of members worldwide. Our team now includes certified personal trainers, nutritionists,
              and health experts dedicated to helping you achieve your fitness goals.
            </p>
            <p className="text-gray-700">
              We understand that everyone's fitness journey is unique, which is why we offer customized workout plans
              for both home and gym environments. Whether you're a beginner just starting out or an experienced fitness
              enthusiast looking to take your training to the next level, FitLife has something for you.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}

      <section
  className="bg-cover bg-center text-white py-16 min-h-[600px]"
  style={{ backgroundImage: "url('./src/asd6.jpg')" }}
>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://www.julienutrition.com/wp-content/uploads/2024/11/Personal-Trainer-Strength-Conditioning-and-Fitness-Coach-JM-Nutrition.jpg" alt="John Davis" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ayman Ali</h3>
                <p className="text-blue-600 mb-4">Founder & Head Trainer</p>
                <p className="text-gray-700">
                  Certified personal trainer with over 10 years of experience in strength training and functional
                  fitness.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="data:image/jpeg;base64,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"
                alt="mohamad"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mohamad </h3>
                <p className="text-blue-600 mb-4">Nutrition Specialist</p>
                <p className="text-gray-700">
                  Registered dietitian specializing in sports nutrition and weight management strategies.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN4NYaMGS8d806xsl4U3GFR8jif0vKMWlPRg&s"
                alt="Michael Wong"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ahmed B</h3>
                <p className="text-blue-600 mb-4">Gym Coach</p>
                <p className="text-gray-700">
                  Certified yoga instructor with expertise in improving flexibility, mobility, and mind-body connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Value 1 */}
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-gray-700">
                We believe quality fitness guidance should be available to everyone, regardless of their circumstances.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-700">
                We continuously research and develop new approaches to make fitness more effective and enjoyable.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-700">
                We foster a supportive community where members can share experiences and motivate each other.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

