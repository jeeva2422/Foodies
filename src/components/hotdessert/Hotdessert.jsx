import React from 'react';
import Food1 from '../../assets/food/food.png';
import Food2 from '../../assets/food/food2-plate.png';
import Food3 from '../../assets/food/banner.png';


import { IoCarOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { SlideUp } from '../Hero/Hero';

const HotDessertVariants = [
  { id: 1, name: "Hot Chocolate", img: Food1, price: "$5.99", delay: 0.4 },
  { id: 2, name: "Hot Chocolate", img: Food2, price: "$5.99", delay: 0.8 },
  { id: 3, name: "Hot Chocolate", img: Food3, price: "$5.00", delay: 1.2 },
  
];

function Hotdessert() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.h3
          variants={SlideUp(0)}
          initial="hidden"
          whileInView="show"
          className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 uppercase mb-12"
        >
          Hot Dessert
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {HotDessertVariants.map((item) => (
            <motion.div
              key={item.id}
              variants={SlideUp(item.delay)}
              initial="hidden"
              whileInView="show"
              className="group bg-white/50 shadow-md p-3 flex items-center gap-3"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-44 mx-auto img-shadow 
                           group-hover:scale-110 
                           group-hover:-translate-y-2 
                           group-hover:translate-x-2 
                           transition-all duration-700 
                           group-hover:rotate-12"
              />
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-xl text-yellow-500">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hotdessert;
