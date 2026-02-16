import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const SlideUp = (delay) => {
  return {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, delay: delay },
  };
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <main className="py-20">
      <div className="container">
        <motion.div
          variants={SlideUp(0.2)}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold uppercase mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you. Get in touch with us today!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <div className="flex items-start gap-4">
              <div className="bg-green-500 text-white p-3 rounded-lg">
                <FaPhone className="text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Phone</h3>
                <p className="text-gray-600">(555) 123-4567</p>
                <p className="text-gray-600">(555) 123-4568</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-500 text-white p-3 rounded-lg">
                <FaEnvelope className="text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Email</h3>
                <p className="text-gray-600">info@foodies.com</p>
                <p className="text-gray-600">support@foodies.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-500 text-white p-3 rounded-lg">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Address</h3>
                <p className="text-gray-600">123 Food Street</p>
                <p className="text-gray-600">New York, NY 10001</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-500 text-white p-3 rounded-lg">
                <FaClock className="text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 10:00 AM - 11:00 PM</p>
                <p className="text-gray-600">Saturday - Sunday: 11:00 AM - 12:00 AM</p>
              </div>
            </div>
            <div className="pt-6">
              <h3 className="font-bold text-xl mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition"
                >
                  <FaFacebook className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition"
                >
                  <FaTwitter className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition"
                >
                  <FaInstagram className="text-2xl" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            animate="animate"
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  placeholder="Tell us what you think..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
