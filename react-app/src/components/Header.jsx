import React from "react";

const Header = () => {
  return (
    <header className="py-4 border-bottom">
      <div className="container mx-auto flex items-center justify-center space-x-2">
        <svg
          className="h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11V6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h16c.55 0 1-.45 1-1zM3 15c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-2z"></path>
        </svg>
        <h1 className="text-3xl font-bold font-sen">Quiz Master - Testline</h1>
      </div>
    </header>
  );
};

export default Header;
