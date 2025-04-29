import { useState } from "react";
import React from "react"
import { Link } from "react-router-dom";
const workouts = [
  {
    title: "Bodyweight Burn",
    tag: "No Equipment",
    duration: "4-Week Plan",
    description:
      "Sculpt and strengthen using just your bodyweight—perfect for working out anywhere, anytime.",
    details:
      "This plan includes push-ups, squats, planks, and lunges with progressive variations each week to increase intensity and build muscle without equipment.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHN6epyp--RkGbG2S56KZu1JDw1JoBID1FCQ&s",
  },
  {
    title: "Living Room HIIT",
    tag: "Quick Sweat",
    duration: "2-Week Blast",
    description:
      "Torch calories fast with high-energy HIIT workouts designed for small spaces.",
    details:
      "Expect 20-minute sessions of jumping jacks, high knees, mountain climbers, and burpees with short rest intervals—ideal for busy schedules.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQ5kPRE5prAjqdhEHROYmHF5WQS96cUJvbg&s",
  },
  {
    title: "Core Crusher",
    tag: "Abs Focus",
    duration: "3-Week Program",
    description:
      "Target your abs and obliques with a focused plan to build a stronger, more defined core.",
    details:
      "Includes crunches, leg raises, flutter kicks, and planks—all designed to be done on a yoga mat in your living room or bedroom.",
    image: "https://sunnyhealthfitness.com/cdn/shop/articles/10-Minute-Core-Crusher-Workout.jpg?v=1659456786",
  },
  {
    title: "Morning Mobility",
    tag: "Flexibility",
    duration: "Daily Routine",
    description:
      "Start your day right with this gentle mobility and stretching sequence for improved flexibility and reduced stiffness.",
    details:
      "Incorporates dynamic stretching, yoga-inspired flows, and breathing exercises—all in under 15 minutes to energize your day.",
    image: "https://www.yogasmic.in/wp-content/uploads/2024/08/3.jpg",
  },
];


const WorkoutPlans = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h2 className="text-3xl font-bold mb-8">Explore Our Workout Plans</h2>
      <div className="grid md:grid-cols-3  gap-6">
        {workouts.map((workout, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden  hover:scale-105 w-full"
          >
            <img
              src={workout.image}
              alt={workout.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{workout.title}</h3>
              <span className="inline-block bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full mb-2">
                {workout.tag}
              </span>
              <p className="text-gray-700 mb-4">{workout.description}</p>
              <p className="font-bold">{workout.duration}</p>
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="mt-4 text-blue-600 hover:underline"
              >
                {expanded === index ? "Show Less" : "Learn More →"}
              </button>
              {expanded === index && (
                <p className="mt-4 text-gray-600">{workout.details}</p>
              )}
            
            
              <Link to="/Membership">
                     <button className="mt-6 w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                        Enroll Now
                           </button>
                      </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlans;
