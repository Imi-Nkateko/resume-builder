import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/auth/Login";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/home/Dashboard";
import EditResume from "./pages/ResumeUpdate/EditResume";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume/:resumeId" element={<EditResume />} />
      </Routes>
    </Router>
  );
};

export default App;
