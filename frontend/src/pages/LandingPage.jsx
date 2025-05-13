import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LandingPage = () => {
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  // const [currentPage, setCurrentPage] = useState("login");

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <button onClick={() => setOpenAuthModal(true)} className="btn btn-outline btn-secondary">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
