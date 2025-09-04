import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xllg6lp",   // 🔹 Replace with EmailJS Service ID
        "template_c4fvkj8",  // 🔹 Replace with EmailJS Template ID
        form.current,
        "YFcFMhYK8wN0pN72a"    // 🔹 Replace with EmailJS Public Key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. " + error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-r from-blue-100 to-purple-100"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
      <p className="text-lg mb-8 text-gray-600 text-center">
        Feel free to reach out by filling the form below!
      </p>

      {/* EmailJS Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8"
      >
        {/* Name */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            name="message"
            placeholder="Enter Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-6 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
