import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Made With Love by{" "}
          <strong>MANO SAI SEELAM</strong>. All Rights Reserved.
        </p>
        <div className="flex justify-center mt-2 font-serif">
          <a
            href="https://linkedin.com/in/manosaiseelam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Seelam3653"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            GitHub
          </a>
          {/* Add more social media or contact links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
