import React from "react";
import { motion } from "framer-motion";
import BannerImg from "../assets/food/banner.png";

const SlideUp = (delay) => {
  return {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, delay: delay },
  };
};

function About() {
  return (
    <main className="py-12 md:py-20">
      <div className="container">
        <motion.div
          variants={SlideUp(0.2)}
          initial="initial"
          animate="animate"
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4 md:mb-6">
            About Our Foodies
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to Foodies, where culinary passion meets exceptional taste.
            We believe in serving the freshest, most delicious food to our
            valued customers.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.img
            variants={SlideUp(0.4)}
            initial="initial"
            animate="animate"
            src={BannerImg}
            alt="about"
            className="w-full rounded-xl img-shadow"
          />
          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Our Story</h2>
            <p className="text-gray-600 leading-8">
              Founded in 2020, Foodies started with a simple mission: to bring
              the highest quality food to your table. What began as a small
              kitchen with big dreams has grown into a beloved restaurant
              serving thousands of happy customers.
            </p>
            <p className="text-gray-600 leading-8">
              Our team of experienced chefs work tirelessly to craft dishes that
              not only taste amazing but are made with love and the freshest
              ingredients sourced locally whenever possible.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Our Mission</h2>
            <p className="text-gray-600 leading-8">
              Our mission is simple yet powerful: to provide exceptional dining
              experiences that create lasting memories. We're committed to
              sustainability, quality, and customer satisfaction.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-lg mb-2">🍽️ Quality First</h4>
                <p className="text-gray-600">
                  Every ingredient is carefully selected for freshness and
                  quality.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">♻️ Sustainability</h4>
                <p className="text-gray-600">
                  We care about our environment and use eco-friendly practices.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">👥 Customer First</h4>
                <p className="text-gray-600">
                  Your satisfaction is our top priority in every interaction.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.img
            variants={SlideUp(0.4)}
            initial="initial"
            animate="animate"
            src={BannerImg}
            alt="mission"
            className="w-full rounded-xl img-shadow"
          />
        </div>
      </div>
    </main>
  );
}

export default About;
