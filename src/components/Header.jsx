import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-8 left-1/2 -translate-x-1/2 w-[96%] max-w-7xl transition-all duration-500 ease-out z-50 
      ${
        scrolled
          ? "bg-white/90 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.06)] translate-y-0"
          : "bg-gray-50 backdrop-blur-sm -translate-y-1"
      }
      rounded-3xl border border-white`}
    >
      <div className="px-4 py-3">
        <div className="flex items-center gap-6">
          {/* Logo - Left Edge */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="/mun1.png"
                alt="MUN AUI Logo"
                className="h-12 w-auto transition-all duration-300  ml-1"
              />
            </Link>
          </div>
          {/* Spacer */}
          <div className="flex-grow" />

          {/* Main Navigation - Center */}
          <div className="flex justify-center">
            <nav className="flex items-center">
              <div className="flex gap-1.5 bg-black/5 p-1.5 rounded-2xl">
                {[
                  { name: "Home", path: "/" },
                  { name: "Events", path: "/events" },
                  { name: "Board Members", path: "/board-members" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setActiveLink(item.path)}
                    className={`px-5 py-2.5 rounded-xl transition-all duration-300 relative
                      font-medium text-sm whitespace-nowrap
                      ${
                        activeLink === item.path
                          ? "text-white bg-black shadow-md"
                          : "text-gray-600 hover:text-black hover:bg-black/5"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          {/* Spacer */}
          <div className="flex-grow" />

          {/* Action Items - Right Edge */}
          <div className="flex gap-3 flex-shrink-0 mr-2">
            <Link
              to="/apply"
              className={`px-5 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap
                bg-black text-white hover:bg-black/90
                transition-all duration-300 hover:scale-105 hover:shadow-lg
                ${scrolled ? "shadow-md" : "shadow-sm"}`}
            >
              Apply
            </Link>
            <Link
              to="/join"
              className={`px-5 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap
                bg-black/10 hover:bg-black/15
                transition-all duration-300 hover:scale-105
                ${scrolled ? "shadow-sm" : ""}`}
            >
              Join
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

