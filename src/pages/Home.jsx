import { Link } from "react-router-dom"
import React from "react"

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white py-28 min-h-[600px]"
        style={{ backgroundImage: "url('./src/asd1.png')" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Body, Transform Your Life
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Join FitLife and discover the best workout plans tailored to your fitness goals. Whether you're at home or at the gym, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/exercises/home-plan"
              className="bg-white text-blue-600 hover:bg-blue-100 px-8 py-3 rounded-md font-bold text-lg"
            >
              Home Workouts
            </Link>
            <Link
              to="/exercises/gym-plan"
              className="bg-transparent hover:bg-blue-700 border-2 border-white px-8 py-3 rounded-md font-bold text-lg "
            >
              Gym Workouts
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-[#F4F6FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Programs</h2>
          <div className="grid  md:grid-cols-3 gap-8">

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="./src/loss.jpeg"
                alt="Weight Loss Program"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Weight Loss Program</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive program designed to help you shed those extra pounds and keep them off.
                </p>
                <Link to="/exercises" className="text-blue-600 font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="src/musle gain.webp"
                alt="Muscle Building"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Muscle Building</h3>
                <p className="text-gray-600 mb-4">
                  Build lean muscle mass with our scientifically proven strength training program.
                </p>
                <Link to="/exercises" className="text-blue-600 font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="./src/Mobility2.jpg"
                alt="Flexibility & Mobility"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Flexibility & Mobility</h3>
                <p className="text-gray-600 mb-4">
                  Improve your range of motion, prevent injuries, and enhance overall performance.
                </p>
                <Link to="/exercises" className="text-blue-600 font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/*  */}
      <section
        className="bg-cover bg-center text-white py-28 min-h-[600px]"
        style={{ backgroundImage: "url('./src/asd4.png')" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="  grid lg:grid-cols-3 gap-8 text-gray-700">
          
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/046/837/306/small/fitness-trainer-smiling-in-gym-with-dumbbells-diverse-trainer-health-and-wellness-promotion-professional-athlete-strength-training-coach-photo.jpg" alt="Ahmed Ibrahim" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-gray-400">Ahmed </h4>
                  <p className="text-gray-600">Gained 15 lbs of muscle</p>
                </div>
              </div>
              <p>
                "The gym plan was exactly what I needed to break through my plateau. The exercises are challenging but effective!"
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img src="" alt="Nour" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-gray-400">Nour</h4>
                  <p className="text-gray-600">Lost 30 lbs in 3 months</p>
                </div>
              </div>
              <p>
                "The home workout plan was perfect for my busy schedule. I never thought I could achieve such amazing results without going to the gym!"
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img src="https://www.julienutrition.com/wp-content/uploads/2024/11/Personal-Trainer-Strength-Conditioning-and-Fitness-Coach-JM-Nutrition.jpg" alt="Ayman Ali" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-gray-400">Ayman</h4>
                  <p className="text-gray-600">Improved flexibility</p>
                </div>
              </div>
              <p>
                "I've struggled with back pain for years. The mobility exercises have made a huge difference in my daily life and overall well-being."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/*  */}
      <section className="bg-[#123458] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of members who have transformed their bodies and lives with our expert-designed fitness programs.
          </p>
          <Link
            to="/Membership"
            className="bg-white text-blue-600 hover:bg-blue-100 px-8 py-3 rounded-md font-bold text-lg inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
