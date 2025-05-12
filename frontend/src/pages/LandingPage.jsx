import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "../components/layouts/Button";
import ResumeCard from "../components/layouts/ResumeCard";
import Header from "../components/layouts/Header";
import { GraduationCap, Briefcase, Award, CheckCircle } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  // const [currentPage, setCurrentPage] = useState("login");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="hero-gradient min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>

        <Header />

        <div className="container mx-auto px-4 pt-28 pb-16 relative z-0 h-full flex flex-col md:flex-row items-center">
          {/* Left Column - Text Content */}
          <div className="w-full md:w-1/2 text-white z-10 opacity-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight mb-6">
              Create a <span className="text-sky-400">professional</span> resume
              in minutes
            </h1>

            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl">
              Stand out from the crowd with expertly designed resume templates
              that make building your perfect resume simple and fast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="cta-button-gradient px-8 py-6 text-lg font-medium hover:opacity-90 transition-opacity">
                Create My Resume
              </Button>
              <Button
                variant="outline"
                className="border-sky-300 text-white hover:bg-sky-300 hover:text-resume-darkPurple transition-all px-8 py-6 text-lg font-medium"
              >
                View Templates
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 max-w-lg opacity-0 animate-fade-in-delay-2">
              <div className="flex items-start">
                <CheckCircle className="text-sky-400 mr-2 h-5 w-5 mt-1 flex-shrink-0" />
                <span>ATS-friendly templates</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-sky-400 mr-2 h-5 w-5 mt-1 flex-shrink-0" />
                <span>Expert-approved designs</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-sky-400 mr-2 h-5 w-5 mt-1 flex-shrink-0" />
                <span>Built-in content suggestions</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-sky-400 mr-2 h-5 w-5 mt-1 flex-shrink-0" />
                <span>Export to PDF, Word & more</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0 relative">
            <div className="relative">
              {/* Main Resume */}
              <div className="opacity-0 animate-fade-in-delay-1">
                <ResumeCard className="relative z-30" />
              </div>

              {/* Background Resume Cards */}
              <ResumeCard className="absolute top-8 -left-16 z-20 scale-75 opacity-0 animate-fade-in-delay-2" />
              <ResumeCard className="absolute -top-6 -right-16 z-10 scale-90 rotate-[-5deg] opacity-0 animate-fade-in-delay-3" />

              {/* Floating Icons */}
              <div className="absolute -top-2 -left-4 bg-white p-2 rounded-full shadow-lg z-40 opacity-0 animate-fade-in-delay-2">
                <GraduationCap className="h-6 w-6 text-sky-600" />
              </div>
              <div className="absolute bottom-20 -right-5 bg-white p-2 rounded-full shadow-lg z-40 opacity-0 animate-fade-in-delay-3">
                <Briefcase className="h-6 w-6 text-sky-500" />
              </div>
              <div className="absolute top-20 right-4 bg-white p-2 rounded-full shadow-lg z-40 opacity-0 animate-fade-in-delay-1">
                <Award className="h-6 w-6 text-sky-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Background Circles */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-sky-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-sky-700/30 blur-3xl"></div>
      </div>
    </div>
  );
};

export default LandingPage;
