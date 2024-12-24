import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-prussian-blue text-alabaster">
      {/* Left: Hamburger Menu */}
      <button className="text-2xl">
        <FaBars />
      </button>

      {/* Center: Logo and Title */}
      <div className="flex items-center space-x-2">
        <img
          src="/path-to-logo.png" // Replace with your logo's path
          alt="Logo"
          className="h-8 w-8"
        />
        <h1 className="text-xl font-bold font-ysabeau">Stat Machine</h1>
      </div>

      {/* Right: Contact Link */}
      <a
        href="#contact"
        className="text-sm font-medium hover:underline hover:text-gray-300"
      >
        Contact
      </a>
    </header>
  );
};

export default Header;
