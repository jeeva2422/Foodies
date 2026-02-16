import React from "react";
import { motion } from "framer-motion";
import { FaOpencart } from "react-icons/fa";
import FoodPng from "../../assets/food/food.png";
import Spoon from "../../assets/food/spoon.png";
import Banana from "../../assets/food/banana2.png";
import Leaf from "../../assets/food/leaf.png";

export const SlideUp = (delay) => {
  return {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1 },
    transition: { duration: 0.6, delay: delay },
  };
};

function Hero() {
  return (
    <main className="py-20">
      <div className="container min-h-screen flex justify-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-24 place-items-center justify-between items-center">
          <div className="space-y-3 mt-8 text-center md:text-left">
            <motion.h1
              variants={SlideUp(0.5)}
              initial="hidden"
              animate="show"
              className="relative text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase text-outline text-transparent"
            >
              Yummy
              <img
                src={Leaf}
                alt=""
                className="absolute w-8 sm:w-10 md:w-12 top-0 right-0 md:right-24"
              />
            </motion.h1>
            <motion.h1
              variants={SlideUp(1)}
              initial="hidden"
              animate="show"
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase"
            >
              BREAKFAST
            </motion.h1>
            <motion.p
              variants={SlideUp(1.5)}
              initial="hidden"
              animate="show"
              className="text-xs sm:text-sm md:text-base"
            >
              Delicious food made with love and the freshest ingredients to
              start
            </motion.p>
            <motion.button
              variants={SlideUp(2)}
              initial="hidden"
              animate="show"
              className="btn-primary inline-block mt-10!"
            >
              <FaOpencart className="inline mr-2" /> Order Now
            </motion.button>
          </div>
          <div className="relative z-10">
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={FoodPng}
              alt=""
              className="w-[450] img-shadow"
            />
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={Spoon}
              alt=""
              className="w-87.5 absolute -bottom-30 -left-16 rotate-75 img-shadow"
            />
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={Banana}
              alt=""
              className="w-100 absolute -top-7.5 -right-32.5 md:-right-40 img-shadow"
            />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, rotate: 60, x: 200, y: 100 }}
          whileInView={{ opacity: 1, rotate: 40, x: 0, y: 0 }}
          className="w-625 h-625 rounded-3xl bg-yellow-200 absolute -top-[30%] left-[70%] z-0 "
        ></motion.div>
      </div>
    </main>
  );
}

export default Hero;
