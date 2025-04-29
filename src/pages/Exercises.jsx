import { Link } from "react-router-dom"

const Exercises = () => {
  return (
    <div>
     
        <div className="bg-blue-600 text-white py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Exercise Programs</h1>
          <p className="text-xl ">Choose the workout plan that fits your lifestyle and goals.</p>
        </div>
      

      {/* Exercise Plans */}
      
      
          <div className="py-16 mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            {/* Home Plan */}
            <div className="bg-white shadow-lg ">
              <img
                src="data:image/jpeg;base64,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"
                alt="Home Workout Plan"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Home Workout Plan</h2>
                <p className="text-gray-700 mb-6">
                  No equipment? No problem! Our home workout plan uses bodyweight exercises and minimal equipment to
                  help you get fit from the comfort of your own home.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex">
                  <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Minimal or no equipment required
                  </li>
                  <li className="flex">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    30-45 minute workouts
                  </li>
                  <li className="flex">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Beginner to advanced options
                  </li>
                  <li className="flex">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Video tutorials for each exercise
                  </li>
                </ul>
                <Link
                  to="/exercises/home-plan"
                  className="flex justify-center bg-blue-600 text-white py-2 px-4 hover:bg-blue-700"
                >
                  View Home Plan
                </Link>
              </div>
            </div>

            {/* Gym Plan */}
            <div className="bg-white shadow-lg">
              <img
                src="https://buzzpulse.co.uk/wp-content/uploads/2024/02/Why-you-shouldnt-workout-with-the-same-routine-every-day.webp"
                alt="Gym Workout Plan"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Gym Workout Plan</h2>
                <p className="text-gray-700 mb-6">
                  Take advantage of gym equipment to maximize your results. Our gym workout plan is designed to help you
                  build strength, increase muscle mass, and improve overall fitness.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Full gym equipment utilization
                  </li>
                  <li className="flex">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    45-60 minute workouts
                  </li>
                  <li className="flex">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Progressive overload principles
                  </li>
                  <li className="flex">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Detailed form guides and tips
                  </li>
                </ul>
                <Link
                  to="/exercises/gym-plan"
                  className="flex justify-center bg-blue-600 text-white py-2 px-4 hover:bg-blue-700"
                >
                  View Gym Plan
                </Link>
              </div>
            </div>
          </div>
        
     

      
     
        <div className="py-16 bg-gray-100 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

            {/* comment1 */}

            <div className="bg-white p-6 shadow-md">
              <div className="flex mb-4">
                <img src="/placeholder.svg?height=50&width=50" alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Ayman</h4>
                  <p className="text-gray-600">Home Plan User</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I never thought I could get such amazing results working out at home. The home plan is perfect for my
                busy schedule!"
              </p>
            </div>

            {/* comment2 */}
            <div className="bg-white p-6 shadow-md">
              <div className="flex mb-4">
                <img src="/placeholder.svg?height=50&width=50" alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Nour</h4>
                  <p className="text-gray-600">Gym Plan User</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The gym plan has transformed my physique. I've gained muscle and lost fat in just 3 months. Highly
                recommended!"
              </p>
            </div>

            {/* comment3 */}
            <div className="bg-white p-6 shadow-md">
              <div className="flex mb-4">
                <img src="/placeholder.svg?height=50&width=50" alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Ahmed</h4>
                  <p className="text-gray-600">Both Plans User</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I use the gym plan during weekdays and the home plan on weekends. The flexibility is amazing and keeps
                me consistent!"
              </p>
            </div>
          </div>
        </div>
      
    
    </div>
  )
}

export default Exercises

