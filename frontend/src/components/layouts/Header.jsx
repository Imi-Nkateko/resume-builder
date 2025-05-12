import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 md:px-10 absolute top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-montserrat font-bold text-2xl text-white">
            ResumeShine
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#">Templates</NavLink>
          <NavLink href="#">Features</NavLink>
          <NavLink href="#">Pricing</NavLink>
          <NavLink href="#">Resources</NavLink>
        </div>

        <div>
          <Button
            variant="outline"
            className="font-medium border-sky-300 text-white hover:bg-sky-300 hover:text-resume-darkPurple transition-all"
          >
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

// const NavLink: React.FC<{href: string; children: React.ReactNode}> = ({ href, children }) => (
//   <a
//     href={href}
//     className="font-medium text-white opacity-80 hover:opacity-100 transition-opacity"
//   >
//     {children}
//   </a>
// );

export default Header;
