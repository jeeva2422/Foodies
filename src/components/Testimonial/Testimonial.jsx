import React from "react";
import BannerImg from "../../assets/food/banner.png";
import { SlideUp } from "../Hero/Hero";
import { motion } from "framer-motion";
import pic from "../../assets/edit4.png";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Jeeva",
    role: "Food Enthusiast",
    rating: 5,
    text: "The best food experience I've had! Fresh ingredients, amazing flavors, and excellent service. Highly recommended!",
    avatar: pic,
  },
  {
    id: 2,
    name: "Jeeva",
    role: "Business Owner",
    rating: 5,
    text: "Fast delivery and consistently delicious food. We order from Foodies weekly now. Never disappointed!",
    avatar: pic,
  },
  {
    id: 3,
    name: "Jeeva",
    role: "Chef",
    rating: 5,
    text: "As a chef, I appreciate quality. Your plating and taste profiles are exceptional. Keep it up!",
    avatar: pic,
  },
];

function Testimonial() {
  return (
    <section className="py-20 bg-linear-to-b from-transparent via-yellow-50 to-transparent">
      <div className="container">
        <motion.div
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold uppercase mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Foodies for delicious
            food and exceptional service
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            variants={SlideUp(0.4)}
            initial="hidden"
            whileInView="show"
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-4xl font-bold">
                Best Food in Town and Fast Delivery
              </h3>
              
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-2xl" />
                ))}
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Good food is the foundation of genuine happiness. We are committed
              to delivering the best taste and quality with every order. Our team
              works tirelessly to ensure your dining experience is exceptional.
            </p>

            <motion.button
              variants={SlideUp(0.6)}
              initial="hidden"
              whileInView="show"
              className="btn-primary text-lg py-3 px-8"
            >
              Order Now
            </motion.button>
          </motion.div>
          <motion.div
            variants={SlideUp(0.6)}
            initial="hidden"
            whileInView="show"
            className="relative h-96"
          >
            <motion.img
              initial={{ opacity: 0, x: -100, y: 100 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              src={BannerImg}
              alt="Food"
              className="relative z-10 w-full h-full object-cover rounded-xl img-shadow"
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -top-10 -right-10 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-60 z-0"
            />
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={SlideUp(0.2 + index * 0.2)}
              initial="hidden"
              whileInView="show"
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 space-y-4"
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 pt-4 border-t">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={SlideUp(0.8)}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 p-8 bg-yellow-100 rounded-xl"
        >
          <div className="text-center">
            <h3 className="text-4xl font-bold text-green-600 mb-2">10K+</h3>
            <p className="text-gray-700 font-semibold">Happy Customers</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-green-600 mb-2">4.9★</h3>
            <p className="text-gray-700 font-semibold">Average Rating</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-green-600 mb-2">500+</h3>
            <p className="text-gray-700 font-semibold">Menu Items</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonial;
