import React from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/food/logo.png";
import { Link } from "react-router-dom";

const SlideUp = (delay) => {
  return {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, delay: delay },
  };
};

const quickLinks = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Contact", path: "/contact" },
  { id: 4, title: "Food", path: "/menu" },
];

function Footer() {
  return (
    <footer className="bg-yellow-200 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="space-y-4"
          >
            <img src={Logo} alt="Foodies Logo" className="w-24 h-24" />
            <p className="text-gray-800 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              nihil in eveniet explicabo
            </p>
            <a
              href="mailto:Contact@food.com"
              className="block text-gray-800 font-semibold hover:text-green-600 transition"
            >
              Contact@food.com
            </a>
          </motion.div>
          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className="text-gray-800 hover:text-green-600 font-semibold transition"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className="text-gray-800 hover:text-green-600 font-semibold transition"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={SlideUp(0.8)}
            initial="initial"
            whileInView="animate"
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className="text-gray-800 hover:text-green-600 font-semibold transition"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.div
          variants={SlideUp(1)}
          initial="initial"
          whileInView="animate"
          className="border-t border-yellow-300 mt-12 pt-8 text-center text-gray-800"
        >
          <p>&copy; 2024 Foodies. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
