import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bgm.jpg";
import profileImage from "../assets/3N6A7704.jpg";

const HeroSection = () => {
  return (
    <div className="container mx-auto">
      <div
        className="hero max-w-screen-2xl mx-auto relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
        style={{ height: "300px", width: "100%" }}
      >
        <div
          className="absolute inset-0 bg-center bg-no-repeat rounded-lg"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover", // Use cover for a full background image
          }}
        ></div>
      </div>
      <div className="text-center mt-6">
        <h1 className="text-3xl font-serif">
          Welcome to my Personal Portfolio
        </h1>
      </div>
    </div>
  );
};

const ProfileSection = () => (
  <div className="profile flex flex-col md:flex-row items-center my-12 md:my-24 relative">
    <img
      src={profileImage}
      alt="Profile"
      className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full shadow-lg mb-4 md:mb-0 md:mr-8 transform hover:scale-105 transition duration-300"
      style={{ maxWidth: "100%", height: "auto" }}
    />
    <div className="max-w-lg relative flex-grow">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-gray-800">
        About Me
      </h2>
      <p className="text-base sm:text-lg leading-relaxed text-gray-600">
        I am a React and Python full-stack developer with a passion for creating
        beautiful and responsive web applications. Explore my work and feel free
        to reach out!
      </p>
      <div className="absolute right-0">
        <Link
          to="/about"
          className="inline-block bg-primary hover:bg-accent text-white font-bold py-3 px-4 rounded-md text-sm shadow-lg transition duration-300"
        >
          To Know More About Me
        </Link>
      </div>
    </div>
  </div>
);

const ContactSection = () => (
  <div className="contact text-center mb-12 md:mb-24">
    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
      Get in Touch
    </h2>
    <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-8">
      Feel free to connect with me on LinkedIn, GitHub, or via email.
    </p>
    <div className="flex justify-center">
      <Link
        to="/contact"
        className="inline-block bg-primary hover:bg-accent text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition duration-300"
      >
        Contact Me
      </Link>
    </div>
  </div>
);

const Home = () => (
  <div className="container mx-auto p-4 sm:p-8">
    <HeroSection />
    <ProfileSection />
    <ContactSection />
    <footer />
  </div>
);

export default Home;
