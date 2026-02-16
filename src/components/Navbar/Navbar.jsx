import React, { useState } from "react";

import Logo from "../../assets/food/logo.png";
import { ImCart } from "react-icons/im";
import { FaHeart } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdMenu, MdClose } from "react-icons/md";
import { delay, motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
    delay: 0.1,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    delay: 0.2,
  },
  {
    id: 3,
    title: "Menu",
    path: "/menu",
    delay: 0.3,
  },
  {
    id: 4,
    title: "My Orders",
    path: "/orders",
    delay: 0.4,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    delay: 0.5,
  },
];

const SlideDown = (delay) => {
  return {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, delay: delay },
  };
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="container flex justify-between items-center font-league py-4">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src={Logo}
          alt="Logo"
          className="w-24 md:w-36"
        />

        <div className="hidden md:flex gap-6">
          <ul className="flex gap-4 lg:gap-6">
            {NavMenu.map((menu) => {
              return (
                <motion.li
                  variants={SlideDown(menu.delay)}
                  initial="initial"
                  animate="animate"
                  key={menu.id}
                  className="nav-menu"
                  data-delay={menu.delay}
                >
                  <Link
                    to={menu.path}
                    className="inline-block px-2 py-2 text-lg lg:text-2xl hover:text-green-500 transition"
                  >
                    {menu.title}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <motion.div 
          variants={SlideDown(1)}
          initial="initial"
          animate="animate"
          className="flex gap-4 items-center"
        >
          <Link to="/cart">
           <button className="h-10 w-10 grid place-items-center rounded-full text-white bg-black hover:bg-green-500 transition">
            <ImCart size={18} />
          </button>
          </Link>
         
              <Link to="/favorites">
          <button className="h-10 w-10 grid place-items-center rounded-full text-white bg-black hover:bg-green-500 transition">
            <FaHeart size={18} />
          </button>
           </Link>

            <Link to="/login">
          <button className="h-10 w-10 grid place-items-center rounded-full text-white bg-black hover:bg-green-500 transition">
           <IoPerson size={18}/>
          </button>
            </Link>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden h-10 w-10 grid place-items-center rounded-full text-white bg-black hover:bg-green-500 transition"
          >
            {isOpen ? <MdClose size={20} /> : <MdMenu size={20} />}
          </button>
        </motion.div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t"
        >
          <div className="container py-4">
            <ul className="flex flex-col gap-4">
              {NavMenu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.path}
                    className="inline-block px-2 py-2 text-lg hover:text-green-500 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
