import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import emailjs from "emailjs-com";

const Popup = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return; // Stop submission if email is invalid
    }

    const templateParams = {
      name,
      email,
      subject,
      message,
    };

    emailjs
      .send(
        "service_2dumhc5", // Replace with your EmailJS service ID
        "template_d2iuzyb", // Replace with your EmailJS template ID
        templateParams,
        "Tw1Hbm-M-8LxgMywA" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          setSuccessMessage("Your message has been sent successfully!");
          // Clear form fields after successful submission
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.error("Failed to send the message:", error);
        }
      );
  };

  return (
    <>
      <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-lg flex justify-center items-center">
        <div className="bg-purple-200 fixed rounded-md p-4 top-[41%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[450px] w-[350px]  lg:h-[450px] duration-200">
          <div className="flex justify-between">
            <h2 className="font-bold">Send me a message</h2>
            <IoCloseOutline onClick={onClose} className="cursor-pointer" />
          </div>
          {successMessage && (
            <div className="text-green-600 font-bold text-center mb-4">
              {successMessage}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="pl-5 pt-3">
              <div className="mb-2">
                <label className=" pb-1">Name</label> <br />
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Your Name"
                  required
                  className="border-2 outline-none w-[270px]  lg:w-[350px] h-10 rounded-lg pl-2"
                />
              </div>
              <div className="mb-2">
                <label className=" pb-1">Email</label> <br />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  required
                  className="border-2 outline-none w-[270px] lg:w-[350px]  h-10 rounded-lg pl-2"
                />
              </div>
              <div className="mb-2">
                <label className=" pb-1">Subject</label>
                <br />
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  required
                  placeholder="I need a landing page"
                  className="border-2 outline-none w-[270px] lg:w-[350px] h-10 rounded-lg pl-2"
                />
              </div>
              <div>
                <label className=" pb-1">Message</label>
                <br />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className=" w-[270px] lg:w-[350px] h-20 pl-1 rounded-lg border-2 outline-none"
                  placeholder="Your Message ...."
                ></textarea>
              </div>
              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="px-5 py-2 bg-yellow-600 font-bold rounded-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Popup;
