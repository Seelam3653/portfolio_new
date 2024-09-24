import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon, UserIcon, BriefcaseIcon, MailIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header className="bg-teal-500 text-white font-semibold shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 md:px-8">
        {/* Logo or Site Name */}
        <Link to="/" className="flex items-center space-x-2">
          {/* <img 
            src="/M S LOGO.svg" 
            alt="My Portfolio Logo" 
            className="h-10 w-auto" 
          /> */}
          <h1 className="text-2xl font-bold hidden md:block">My Portfolio</h1>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/"
              className="flex items-center hover:text-gray-300 transition duration-300 ease-in-out"
              aria-label="Home"
            >
              <HomeIcon className="h-5 w-5 mr-2" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center hover:text-gray-300 transition duration-300 ease-in-out"
              aria-label="About"
            >
              <UserIcon className="h-5 w-5 mr-2" />
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="flex items-center hover:text-gray-300 transition duration-300 ease-in-out"
              aria-label="Projects"
            >
              <BriefcaseIcon className="h-5 w-5 mr-2" />
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center hover:text-gray-300 transition duration-300 ease-in-out"
              aria-label="Contact"
            >
              <MailIcon className="h-5 w-5 mr-2" />
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden flex items-center p-2 text-white hover:text-gray-300 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          <svg 
            className="h-6 w-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
    </header>
  );
}

export default Header;
