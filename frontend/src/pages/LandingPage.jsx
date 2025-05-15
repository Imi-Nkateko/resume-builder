import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Modal from "../components/Modal";

const LandingPage = () => {
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(true);
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

      <Modal
        isOpen={openAuthModal}
        onChange={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      />

      <div className="">
        {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
        {currentPage === "signUp" && <Signup setCurrentPage={setCurrentPage} />}
      </div>
    </div>
  );
};

export default LandingPage;
