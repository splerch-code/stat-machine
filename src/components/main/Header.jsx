import { useState } from "react";
import { FaBars } from "react-icons/fa";
import SidePanel from "./SidePanel";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2 bg-prussian-blue text-alabaster z-10 h-16">
        {/* Left: Hamburger Menu */}
        <button
          className="text-2xl hover:text-alabaster-400 rounded-lg border p-2 border-alabaster-300"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>

        {/* Center: Logo and Title */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/bar-chart.png" // Replace with your logo's path
            alt="Logo"
            className="h-8 w-8"
          />
          <h1 className="text-xl font-bold font-ysabeau">Stat Machine</h1>
        </div>

        {/* Right: Contact Link */}
        <a
          href="#contact"
          className="text-sm font-medium hover:underline hover:text-alabaster-400"
        >
          Contact
        </a>
      </header>
      <SidePanel menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Header;
