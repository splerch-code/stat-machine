import React from "react";
import { FaX } from "react-icons/fa6";

const SidePanel = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
      {/* Side Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-indigo-dye text-ash-gray-700 z-20 transform font-ysabeau ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <button
          className="absolute top-4 right-4 text-xl hover:text-ash-gray-500"
          onClick={() => setMenuOpen(false)}
        >
          <FaX />{" "}
        </button>

        {/* Menu Items */}
        <nav className="mt-16 space-y-3 px-4">
          <a href="/" className="block text-lg hover:text-ash-gray-500">
            Home
          </a>
          <a href="/about" className="block text-lg hover:text-ash-gray-500">
            About
          </a>
          <div className="">
            <a
              href="/analysis"
              className="block text-lg hover:text-ash-gray-500"
            >
              Analysis
            </a>
            <div className="ml-4 mt-2 space-y-2">
              <a
                href="/analysis/nfl"
                className="block text-sm hover:text-ash-gray-500"
              >
                NFL
              </a>
              <a
                href="/analysis/nba"
                className="block  text-sm hover:text-ash-gray-500"
              >
                NBA
              </a>
            </div>
          </div>
          <a href="/contact" className="block text-lg hover:text-ash-gray-500">
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};

export default SidePanel;
