import { Link } from "react-router-dom";

export default function MembershipPage() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">
            Choose Your Fitness Journey
          </h1>
          <p className="mt-4 mx-auto text-xl text-gray-500">
            Select the membership that fits your goals and lifestyle
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Smart Package */}
          <div className="flex flex-col border-2 border-gray-200 rounded-lg w-full md:w-[calc(33.333%-22px)]">
            <div className="p-6 text-center border-b">
              <h3 className="text-2xl font-bold">Smart</h3>
              <div className="mt-4 flex justify-center">
                <span className="text-5xl font-bold">$29</span>
                <span className="text-xl text-gray-500">/month</span>
              </div>
              <p className="mt-5 text-gray-500">Perfect for beginners</p>
            </div>
            <div className="p-6 flex-grow">
              <ul className="space-y-3">
                <li className="flex">
                  <span className="text-blue-500 font-bold mr-2">✓</span>
                  <span>Access to main gym area</span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 font-bold mr-2">✓</span>
                  <span>Basic fitness assessment</span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 font-bold mr-2">✓</span>
                  <span>2 group classes per week</span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 font-bold mr-2">✓</span>
                  <span>Locker room access</span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 font-bold mr-2">✓</span>
                  <span>Mobile app access</span>
                </li>
              </ul>
            </div>
            <div className="p-6 border-t">
              <Link to="/payment?plan=smart&price=29" className="block w-full">
                <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Mid Package */}
          <div className="flex flex-col border-2 border-blue-500 rounded-lg shadow-lg relative w-full md:w-[calc(33.333%-22px)]">
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg">
              Popular
            </div>
            <div className="p-6 text-center border-b">
              <h3 className="text-2xl font-bold">Mid</h3>
              <div className="mt-4 flex justify-center">
                <span className="text-5xl font-bold">$49</span>
                <span className="text-xl text-gray-500">/month</span>
              </div>
              <p className="mt-5 text-gray-500">
                For dedicated fitness enthusiasts
              </p>
            </div>
            <div className="p-6 flex-grow">
              <ul className="space-y-3">
                <li className="flex">
                  <span className="text-blue-500 font-bold mr-2">✓</span>
                  <span>All Smart features</span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 font-bold mr-2">✓</span>
                  <span>Full access to all gym equipment</span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 font-bold mr-2">✓</span>
                  <span>5 group classes per week</span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 font-bold mr-2">✓</span>
                  <span>1 personal training session monthly</span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 font-bold mr-2">✓</span>
                  <span>Nutrition consultation</span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 font-bold mr-2">✓</span>
                  <span>Towel service</span>
                </li>
              </ul>
            </div>
            <div className="p-6 border-t">
              <Link to="/payment?plan=mid&price=49" className="block w-full">
                <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Elite Package */}
          <div className="flex flex-col border-2 border-gray-200 rounded-lg w-full md:w-[calc(33.333%-22px)]">
            <div className="p-6 text-center border-b">
              <h3 className="text-2xl font-bold">Elite</h3>
              <div className="mt-4 flex justify-center">
                <span className="text-5xl font-bold">$89</span>
                <span className="text-xl text-gray-500">/month</span>
              </div>
              <p className="mt-5 text-gray-500">
                Premium experience for serious athletes
              </p>
            </div>
            <div className="p-6 flex-grow">
              <ul className="space-y-3">
                <li className="flex">
                  <span className="text-blue-500 font-bold mr-2">✓</span>
                  <span>All Mid features</span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 font-bold mr-2">✓</span>
                  <span>Unlimited group classes</span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 font-bold mr-2">✓</span>
                  <span>4 personal training sessions monthly</span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 font-bold mr-2">✓</span>
                  <span>Advanced performance tracking</span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 font-bold mr-2">✓</span>
                  <span>Priority class booking</span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 font-bold mr-2">✓</span>
                  <span>Exclusive access to premium areas</span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 font-bold mr-2">✓</span>
                  <span>Complimentary protein shakes</span>
                </li>
              </ul>
            </div>
            <div className="p-6 border-t">
              <Link to="/payment?plan=elite&price=89" className="block w-full">
                <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            All memberships include
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]">
              <h3 className="text-lg font-medium">No Contracts</h3>
              <p className="mt-2 text-gray-500">
                Cancel anytime with no penalties
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]">
              <h3 className="text-lg font-medium">Free WiFi</h3>
              <p className="mt-2 text-gray-500">
                Stay connected during your workout
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]">
              <h3 className="text-lg font-medium">Fitness Assessment</h3>
              <p className="mt-2 text-gray-500">
                Track your progress with regular check-ins
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]">
              <h3 className="text-lg font-medium">Community Events</h3>
              <p className="mt-2 text-gray-500">
                Join our fitness community activities
              </p>
            </div>
          </div>
        </div>

        {/* Questions Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Do you have any Questions?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We're here to help you on your fitness journey
          </p>
          <div className="mt-8">
            <a
              href="/QandA"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Visit Our Q&A Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
