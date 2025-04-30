import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dropdownRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (!dropdownRef.current?.contains(e.target)) {
        setIsExercisesDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-[#123458] text-white shadow-lg min-h-[100px] text-2xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-4">
            <img
              src="./src/logo1.png"
              alt="Non-Stop Gym Logo"
              className="h-[175px] w-[175px] object-contain"
            />
            <span className="text-3xl font-[rajdhani]">NON-Stop GYM</span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-200 ">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-200">
              About Us
            </Link>

            <Link to="/Supplements" className="hover:text-blue-200 ">
              Supplements{" "}
            </Link>
            <Link to="/membership" className="hover:text-blue-200">
              Membership
            </Link>

            <div className="relative group">
              {/* This Link acts as the main navigation to /exercises */}
              <Link
                to="/exercises"
                className="flex items-center hover:text-blue-200 "
              >
                Exercises
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>

              {/* Dropdown appears on hover */}
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                <Link
                  to="/exercises/home-plan"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                >
                  Home Plan
                </Link>
                <Link
                  to="/exercises/gym-plan"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                >
                  Gym Plan
                </Link>
              </div>
            </div>

            <Link to="/qanda" className="hover:text-blue-200 ">
              Q&A
            </Link>
            
            <Link to="/contact" className="hover:text-blue-200 ">
              Contact
            </Link>
            <Link
              to="/login"
              className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-100 "
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
