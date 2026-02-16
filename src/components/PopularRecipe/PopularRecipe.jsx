import React from "react";
import Food1 from '../../assets/food/food.png';
import Food2 from '../../assets/food/food2-plate.png';
import Food3 from '../../assets/food/banner.png';
import Food4 from '../../assets/food/food4.JPEG';
import Food5 from '../../assets/food/food5.JPEG';
import Food6 from '../../assets/food/food6.JPEG';
import Food7 from '../../assets/food/food7.JPEG';
import Food8 from '../../assets/food/food8.JPEG';

import { IoCarOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { section } from "framer-motion/client";
import { SlideUp } from "../Hero/Hero";


const popularRecipe = [
  { id: 1, name: "Hot Chocolate", img: Food1, price: "$5.99", delay: 0.2 },
  { id: 2, name: "Hot Chocolate", img: Food2, price: "$5.99", delay: 0.3},
  { id: 3, name: "Hot Chocolate", img: Food3, price: "$5.00", delay: 0.4 },
  { id: 4, name: "Molten Lava Cake", img: Food4, price: "$6.49", delay: 0.5 },
  { id: 5, name: "Apple Pie", img: Food5, price: "$4.99", delay: 0.6 },
  { id: 6, name: "Cinnamon Roll", img: Food6, price: "$3.99", delay: 0.7 },
  { id: 7, name: "Brownie Sundae", img: Food7, price: "$6.99", delay: 0.8 },
  { id: 8, name: "Cheesecake", img: Food8, price: "$5.49", delay: 0.9 },
];

function PopularRecipe() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.h3
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView={"show"}
          className="text-2xl sm:text-3xl md:text-4xl text-center font-league font-semibold uppercase mb-12"
        >
          Our Popular Recipe
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 place-items-center">
          {popularRecipe.map((recipe) => {
            return (
              <motion.div
                variants={SlideUp(recipe.delay)}
                initial="hidden"
                whileInView={"show"}
                key={recipe.id}
                className="group bg-white/50 rounded-xl shadow-xl p-3 text-center space-y-3 "
              >
                {" "}
                <img
                  src={recipe.img}
                  alt=""
                  className="w-44 mx-auto h-44 object-cover rounded-full"
                />{" "}
                <h4 className="text-xl font-semibold">{recipe.name}</h4>{" "}
                <p className="text-primaryColor font-bold">{recipe.price}</p>{" "}
                <button className="btn-primary  inline-flex items-center gap-2">
                  <IoCarOutline /> Buy Now
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PopularRecipe;
export { popularRecipe };
