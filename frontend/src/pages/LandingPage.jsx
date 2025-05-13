import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LandingPage = () => {
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {};

  return (
    <div className="w-full min-h-full">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <button
            onClick={() => setOpenAuthModal(true)}
            className="btn btn-outline btn-secondary"
          >
            Login
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <button onClick={handleCTA} className="btn btn-outline btn-secondary">
        Create Resume
      </button>
    </div>
  );
};

export default LandingPage;
