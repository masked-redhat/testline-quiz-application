import React from "react";
import logo from "../assets/quiz.svg";

const Header = () => {
  return (
    <header className="py-4 border-bottom">
      <div className="container mx-auto flex items-center justify-center space-x-2">
        <img src={logo} alt={"testline"} className="h-8 w-8" />
        <h1 className="text-3xl font-medium font-sen">
          Quiz Master - Testline
        </h1>
      </div>
    </header>
  );
};

export default Header;
