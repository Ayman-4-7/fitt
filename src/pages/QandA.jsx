import { useState } from "react"

const QandA = () => {
  const [activeQuestion, setActiveQuestion] = useState(null)

  const toggleQuestion = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null)
    } else {
      setActiveQuestion(index)
    }
  }

  const faqs = [
    {
      question: "How often should I work out as a beginner?",
      answer:
        "For beginners, we recommend starting with 3 workouts per week with at least one day of rest between sessions. This allows your body to adapt to the new stress and recover properly. As you build consistency and your fitness improves, you can gradually increase to 4-5 sessions per week.",
    },
    {
      question: "Should I do cardio before or after weight training?",
      answer:
        "If your primary goal is to build strength or muscle, it's generally better to do cardio after weight training or on separate days. This ensures you have maximum energy for lifting. If your main goal is cardiovascular endurance, you might prioritize cardio first. For general fitness, either approach can work—just be consistent with your routine.",
    },
    {
      question: "How long should my workouts be?",
      answer:
        "Effective workouts don't need to be extremely long. For most people, 45-60 minutes of focused training is ideal. Beginners might start with 30-minute sessions and gradually increase duration. Workouts lasting longer than 60-90 minutes may lead to diminishing returns and increased risk of overtraining for most people.",
    },
    {
      question: "How long will it take to see results?",
      answer:
        "You may begin to feel the benefits of regular exercise (improved energy, mood, and sleep) within 1-2 weeks. Physical changes typically become noticeable after 4-6 weeks of consistent training. More significant transformations usually take 8-12 weeks or longer, depending on your starting point, consistency, nutrition, and genetic factors.",
    },
    {
      question: "Do I need supplements to build muscle?",
      answer:
        "No, supplements are not necessary to build muscle. A well-balanced diet with adequate protein (1.6-2.2g per kg of bodyweight) can provide all the nutrients needed for muscle growth. That said, some supplements like protein powder can be convenient for meeting protein goals, and creatine monohydrate is well-researched for improving strength and performance.",
    },
    {
      question: "How do I know if I'm using the right weight?",
      answer:
        "The right weight should challenge you to complete your target rep range with proper form. For example, if your program calls for 10-12 reps, the weight should be heavy enough that the last 2-3 reps are challenging but not so heavy that you can't maintain good form. If you can easily do more than the prescribed reps, increase the weight.",
    },
    {
      question: "Should I train if I'm sore?",
      answer:
        "Mild to moderate soreness (DOMS - Delayed Onset Muscle Soreness) is normal and generally safe to train through. However, if you're experiencing severe soreness that affects your movement patterns or joint pain (rather than muscle soreness), it's better to rest or do light recovery activities like walking or stretching until the pain subsides.",
    },
    {
      question: "Is it better to work out in the morning or evening?",
      answer:
        "The best time to work out is whenever you can do so consistently. Some research suggests that strength and power output might be slightly higher in the afternoon or evening, while morning workouts may help establish a consistent routine and improve sleep. Choose a time that fits your schedule and energy levels.",
    },
    {
      question: "How important is nutrition for fitness results?",
      answer:
        "Nutrition is extremely important—many fitness professionals consider it to account for 70-80% of your results. You can't out-train a poor diet. For muscle gain, you need a slight caloric surplus with adequate protein. For fat loss, you need a caloric deficit while maintaining protein intake. Regardless of your goal, focus on whole, nutrient-dense foods for optimal health and performance.",
    },
    {
      question: "What should I do if I hit a plateau?",
      answer:
        "Plateaus are normal in any fitness journey. To break through, try: 1) Changing your workout variables (sets, reps, exercises, rest periods), 2) Increasing intensity through progressive overload, 3) Evaluating your nutrition and sleep, 4) Taking a deload week to allow full recovery, or 5) Seeking guidance from a fitness professional who can identify weaknesses in your program.",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl mx-auto">Get answers to the most common fitness questions.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('./src/asd3.jpg')" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                    onClick={() => toggleQuestion(index)}
                  >
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 transition-transform ${activeQuestion === index ? "transform rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {activeQuestion === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Ask a Question */}
            <div className="mt-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Have a Question?</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-[#E8E8E8] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-[#E8E8E8] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Question
                  </label>
                  <textarea
                    id="question"
                    name="question"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-[#E8E8E8] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit Question
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default QandA
