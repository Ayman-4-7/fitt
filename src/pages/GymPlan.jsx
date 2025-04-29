import { useState } from "react";
import React from "react"
import { Link } from "react-router-dom";
// Sample Gym Workout Plans focused on Gym routines
const gymPlans = [
  {
    title: "Beginner Full-Body Strength Training",
    tag: "Muscle Building",
    duration: "4-Week Program",
    description:
      "A foundational program focusing on compound movements to build overall strength and muscle mass.",
    details:
      "This plan includes exercises like squats, bench press, and deadlifts performed three times a week. Each session targets the entire body, promoting balanced muscle development and strength gains. Ideal for those new to resistance training.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pZEkdphjarTkES11poXnay4NHDnMzPsrbg&s",
  },
  {
    title: "Intermediate Push/Pull/Legs Split",
    tag: "Hypertrophy",
    duration: "6-Week Program",
    description:
      "A structured routine dividing workouts into push, pull, and leg days to maximize muscle growth.",
    details:
      "The program schedules six workouts per week: two push days (chest, shoulders, triceps), two pull days (back, biceps), and two leg days. Exercises include bench presses, rows, squats, and accessory movements, aiming for progressive overload to stimulate hypertrophy.",
    image: "https://i.ytimg.com/vi/qVek72z3F1U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAxOGCx52w8LG3qvnDcFFctEKghZw",
  },
  {
    title: "Advanced Upper/Lower Split",
    tag: "Strength & Power",
    duration: "8-Week Program",
    description:
      "An advanced program alternating upper and lower body workouts to enhance strength and power.",
    details:
      "Training four times a week, this plan focuses on heavy compound lifts like squats, deadlifts, bench presses, and overhead presses. Accessory exercises support the main lifts, and the program emphasizes increasing weight over time to build maximal strength.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Kyb12ZjKYoT3kPVZQXHxfyNz-QsQJcEWpg&s",
  },
  {
    title: "Fat Loss Circuit Training",
    tag: "Weight Loss",
    duration: "6-Week Program",
    description:
      "A high-intensity circuit training program designed to burn fat and improve cardiovascular fitness.",
    details:
      "Workouts consist of full-body circuits combining resistance exercises and cardio intervals. Sessions are performed three to four times a week, maintaining an elevated heart rate to maximize calorie expenditure and promote fat loss.",
    image: "https://cdn.sanity.io/images/uhnffrl6/production/85bcf19b5fd76b0fd34257fd3ac259699450857d-5152x3155.jpg?w=1024&fit=min&crop=bottom&auto=format&h=576",
  },
  {
    title: "Endurance and Stamina Builder",
    tag: "Endurance",
    duration: "10-Week Program",
    description:
      "A program focused on enhancing cardiovascular endurance and muscular stamina.",
    details:
      "This plan includes a mix of steady-state cardio, interval training, and high-repetition resistance exercises. Activities like running, cycling, and rowing are integrated with bodyweight and light-weight strength training to improve overall endurance.",
    image: "https://blog.muscleblaze.com/wp-content/uploads/2023/04/Stamina-1024x379.jpeg",
  },
  {
    title: "Flexibility and Mobility Routine",
    tag: "Recovery & Mobility",
    duration: "4-Week Program",
    description:
      "A routine aimed at improving joint mobility and muscle flexibility to aid recovery and prevent injuries.",
    details:
      "Sessions incorporate dynamic stretches, yoga poses, and mobility drills targeting major joints and muscle groups. Performed three times a week, this routine complements strength training by enhancing movement quality and reducing muscle tightness.",
    image: "https://www.opaortho.com/wp-content/uploads/2024/08/stretching-exercises-for-flexibility-750x462.png",
  },
];


const GymPlans = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h2 className="text-3xl font-bold mb-8">Explore Our Gym Workout Plans</h2>
      <div className="grid  md:grid-cols-3  gap-6">
        {gymPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden   hover:scale-105 w-full"
          >
            <img
              src={plan.image}
              alt={plan.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <span className="inline-block bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full mb-2">
                {plan.tag}
              </span>
              <p className="text-gray-700 mb-4">{plan.description}</p>
              <p className="font-bold">{plan.duration}</p>
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="mt-4 text-blue-600 hover:underline"
              >
                {expanded === index ? "Show Less" : "Learn More →"}
              </button>
              {expanded === index && (
                <p className="mt-4 text-gray-600">{plan.details}</p>
              )}
              {/* Enroll Button */}
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

export default GymPlans;
