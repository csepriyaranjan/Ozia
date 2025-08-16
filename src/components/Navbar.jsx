import React from "react";
import { Link } from "react-router-dom";
import { FiUser, FiShoppingBag, FiSearch } from "react-icons/fi";
import { FaTags } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="bg-[#edf3f3] shadow-sm">
      <header className="flex items-center justify-between px-6 md:px-20 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="sm:text-9xl text-8xl tracking-wide font-brownsugar hover:opacity-80 transition"
        >
          OZIA
        </Link>

        {/* Nav (always inline, no mobile menu) */}
        <nav className="flex items-center gap-6 text-gray-700">
          <Link to="/sale" className="hover:text-black transition">
            <FaTags size={22} />
          </Link>
          <Link to="/search" className="hover:text-black transition">
            <FiSearch size={22} />
          </Link>
          <Link to="/user" className="hover:text-black transition">
            <FiUser size={22} />
          </Link>
          <Link to="/cart" className="hover:text-black transition">
            <FiShoppingBag size={22} />
          </Link>
        </nav>
      </header>
    </div>
  );
}
