import { Link } from "react-router-dom";

export default function SupplementsPage() {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            <span className="block">Premium Supplements</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Fuel your workouts and recovery with our high-quality supplements
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Supplement 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]">
            <div className="h-96 overflow-hidden">
              <img
                src="data:image/jpeg;base64,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"
                alt="Premium Whey Protein"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Premium Whey Protein
              </h3>
              <p className="mt-2 text-gray-600">
                High-quality protein for muscle recovery and growth
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">$49.99</span>
                <Link to="/payment?product=Premium%20Whey%20Protein&price=49.99">
                  <button className="rounded-md bg-blue-600 px-6 py-2 font-bold text-white shadow-md hover:bg-blue-700">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Supplement 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]">
            <div className="h-96 overflow-hidden">
              <img
                src="data:image/jpeg;base64,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"
                alt="Pre-Workout Energy"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Pre-Workout Energy
              </h3>
              <p className="mt-2 text-gray-600">
                Boost your energy and focus for intense workouts
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">$39.99</span>
                <Link to="/payment?product=Pre-Workout%20Energy&price=39.99">
                  <button className="rounded-md bg-blue-600 px-6 py-2 font-bold text-white shadow-md hover:bg-blue-700">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Supplement 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]">
            <div className="h-96 overflow-hidden">
              <img
                src="https://www.iafstore.com/imgp/big/p58529.jpg"
                alt="BCAA Complex"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">BCAA Complex</h3>
              <p className="mt-2 text-gray-600">
                Essential amino acids for muscle preservation and recovery
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">$34.99</span>
                <Link to="/payment?product=BCAA%20Complex&price=34.99">
                  <button className="rounded-md bg-blue-600 px-6 py-2 font-bold text-white shadow-md hover:bg-blue-700">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Supplement 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]">
            <div className="h-96 overflow-hidden">
              <img
                src="https://www.iafstore.com/imgp/mm/p7862.jpg"
                alt="Creatine Monohydrate"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Creatine Monohydrate
              </h3>
              <p className="mt-2 text-gray-600">
                Increase strength and power output during high-intensity
                training
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">$29.99</span>
                <Link to="/payment?product=Creatine%20Monohydrate&price=29.99">
                  <button className="rounded-md bg-blue-600 px-6 py-2 font-bold text-white shadow-md hover:bg-blue-700">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Supplement 5 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]">
            <div className="h-96 overflow-hidden">
              <img
                src="https://www.davisco.in/images/xtreme-mass-gainer-5kg-chocolate-a.jpg"
                alt="Mass Gainer"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Mass Gainer</h3>
              <p className="mt-2 text-gray-600">
                High-calorie formula for building muscle mass
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">$54.99</span>
                <Link to="/payment?product=Mass%20Gainer&price=54.99">
                  <button className="rounded-md bg-blue-600 px-6 py-2 font-bold text-white shadow-md hover:bg-blue-700">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Supplement 6 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]">
            <div className="h-96 overflow-hidden">
              <img
                src="https://herbals-shop.com/wp-content/uploads/2017/05/Formula-2-multivitamin-herbalife-768x768.png"
                alt="Multivitamin Complex"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Multivitamin Complex
              </h3>
              <p className="mt-2 text-gray-600">
                Complete daily vitamin and mineral support
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">$24.99</span>
                <Link to="/payment?product=Multivitamin%20Complex&price=24.99">
                  <button className="rounded-md bg-blue-600 px-6 py-2 font-bold text-white shadow-md hover:bg-blue-700">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Why Choose Our Supplements?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]">
              <h3 className="text-lg font-medium text-gray-900">
                Premium Quality
              </h3>
              <p className="mt-2 text-gray-500">
                All our supplements are made with the highest quality
                ingredients
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]">
              <h3 className="text-lg font-medium text-gray-900">Lab Tested</h3>
              <p className="mt-2 text-gray-500">
                Every batch is tested for purity and potency
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]">
              <h3 className="text-lg font-medium text-gray-900">
                Expert Formulated
              </h3>
              <p className="mt-2 text-gray-500">
                Developed by nutrition and fitness experts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
