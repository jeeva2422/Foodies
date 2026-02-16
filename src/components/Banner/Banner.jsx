import React from "react";
import BannerImg from "../../assets/food/banner.png";
import { SlideUp } from "../Hero/Hero";
import { motion } from "framer-motion";

function Banner() {
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 place-items-center">
          <div className="relative order-2 md:order-1">
            <motion.img
              initial={{ opacity: 0, x: -100, y: 100 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              src={BannerImg}
              alt="Food Banner"
              className="relative z-10 w-full h-auto img-shadow rounded-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-[50%] right-[50%] transform translate-x-[50%] -translate-y-[50%] h-48 w-48 md:h-80 md:w-80 lg:h-100 lg:w-100 bg-yellow-200 rounded-full"
            ></motion.div>
          </div>
        
          <div className="space-y-5 order-1 md:order-2">
            <motion.h1 
              variants={SlideUp(0.2)}
              initial="hidden"
              whileInView="show"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase font-semibold font-league"
            >
              The Best yummy food in the town
            </motion.h1>
          <motion.p 
          variants={SlideUp(1.3)}
          initial="hidden"
          whileInView="show"
          >
            Good food is the foundation of genuine happiness. We are committed
            to
          </motion.p>
          <motion.button 
           variants={SlideUp(1.6)}
          initial="hidden"
          whileInView="show"
          className="btn-primary">Order Now</motion.button>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Banner;
