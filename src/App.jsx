import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Exercises from "./pages/Exercises";
import QandA from "./pages/QandA";
import HomePlan from "./pages/HomePlan";
import GymPlan from "./pages/GymPlan";
import DashboardLayout from "./components/DashboardLayout";
import EditG from "./pages/EditG";
import EditMemberShip from "./pages/EditMemberShip";
import EditExercise from "./pages/EditExercise";
import Dashboard from "./pages/Dashboard";
import Supplements from "./pages/Supplements";
import Membership from "./pages/Membership";

aymannnnnnnnnnnnnn;
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/exercises/home-plan" element={<HomePlan />} />
            <Route path="/exercises/gym-plan" element={<GymPlan />} />
            <Route path="/qanda" element={<QandA />} />
            <Route path="/editG" element={<EditG />} />
            <Route path="/dashboardLayout" element={<DashboardLayout />} />
            <Route path="/editMemberShip" element={<EditMemberShip />} />
            <Route path="/editExercise" element={<EditExercise />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/supplements" element={<Supplements />} />
            <Route path="/membership" element={<Membership />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
