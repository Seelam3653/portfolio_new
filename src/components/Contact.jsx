import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
    to_name: "MANO SAI SEELAM",
  });

  const [errors, setErrors] = useState({
    from_name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let formValid = true;
    let newErrors = { from_name: "", email: "", message: "" };

    if (!formData.from_name) {
      formValid = false;
      newErrors.from_name = "Name is required.";
    }
    if (!formData.email) {
      formValid = false;
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formValid = false;
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.message) {
      formValid = false;
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return formValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop form submission if validation fails
    }

    emailjs
      .send(
        "service_juvk5rq", // Replace with your EmailJS Service ID
        "template_9ygwk0r", // Replace with your EmailJS Template ID
        formData,
        "C385u_BZg_Woiuw9f" // Replace with your EmailJS User ID
      )
      .then((response) => {
        alert("Your message has been sent successfully!");
        setFormData({
          from_name: "",
          email: "",
          message: "",
          to_name: "MANO SAI SEELAM",
        });
      })
      .catch((error) => {
        alert("Failed to send your message. Please try again.");
      });
  };

  return (
    <div className="container mx-auto p-9">
      <div className="mt-4 mb-10">
        <h2 className="text-5xl font-serif mb-8">Follow Me</h2>
        <p>
          <a
            href="https://www.instagram.com/_.sai.__._/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline font-mono font-extrabold text-2xl"
            aria-label="Instagram"
          >
            <AiFillInstagram className="inline-block mr-2" />
            Instagram
          </a>{" "}
          |
          <a
            href="https://linkedin.com/in/manosaiseelam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline font-mono font-extrabold text-2xl"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin className="inline-block mr-2" />
            LinkedIn
          </a>{" "}
          |
          <a
            href="https://github.com/Seelam3653"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline font-mono font-extrabold text-2xl"
            aria-label="GitHub"
          >
            <AiFillGithub className="inline-block mr-2" />
            GitHub
          </a>
        </p>
      </div>

      <h1 className="text-4xl font-bold mb-10">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="from_name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="from_name"
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            aria-describedby="from_name-error"
          />
          {errors.from_name && (
            <p id="from_name-error" className="text-red-500 text-sm">
              {errors.from_name}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            aria-describedby="email-error"
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-sm">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            rows="4"
            aria-describedby="message-error"
          />
          {errors.message && (
            <p id="message-error" className="text-red-500 text-sm">
              {errors.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
