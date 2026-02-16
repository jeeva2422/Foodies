import React, { useState } from "react";
import { motion } from "framer-motion";
import Food1 from "../assets/food/food.png";
import Food2 from "../assets/food/food2-plate.png";
import Food3 from "../assets/food/banner.png";

const SlideUp = (delay) => {
  return {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, delay: delay },
  };
};

const menuItems = [
  {
    id: 1,
    name: "Grilled Chicken Sandwich",
    category: "burgers",
    price: "$8.99",
    description: "Tender grilled chicken with fresh lettuce and tomato",
    img: Food1,
  },
  {
    id: 2,
    name: "Classic Hamburger",
    category: "burgers",
    price: "$7.99",
    description: "Juicy beef patty with all the toppings",
    img: Food2,
  },
  {
    id: 3,
    name: "Margherita Pizza",
    category: "pizza",
    price: "$12.99",
    description: "Classic pizza with fresh mozzarella and basil",
    img: Food3,
  },
  {
    id: 4,
    name: "Pepperoni Pizza",
    category: "pizza",
    price: "$13.99",
    description: "Loaded with pepperoni and cheese",
    img: Food1,
  },
  {
    id: 5,
    name: "Caesar Salad",
    category: "salads",
    price: "$9.99",
    description: "Fresh romaine with parmesan and croutons",
    img: Food2,
  },
  {
    id: 6,
    name: "House Salad",
    category: "salads",
    price: "$8.99",
    description: "Mixed greens with seasonal vegetables",
    img: Food3,
  },
  {
    id: 7,
    name: "Chocolate Cake",
    category: "desserts",
    price: "$5.99",
    description: "Rich and decadent chocolate cake",
    img: Food1,
  },
  {
    id: 8,
    name: "Vanilla Cheesecake",
    category: "desserts",
    price: "$6.99",
    description: "Smooth and creamy cheesecake",
    img: Food2,
  },
];

const categories = ["all", "burgers", "pizza", "salads", "desserts"];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

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
            Our Menu
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Explore our delicious selection of fresh and tasty dishes
          </p>
        </motion.div>
        <motion.div
          variants={SlideUp(0.4)}
          initial="initial"
          animate="animate"
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 md:px-6 py-2 rounded-full font-semibold capitalize text-sm md:text-base transition-all ${
                selectedCategory === category
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={SlideUp(0.2 + index * 0.1)}
              initial="initial"
              animate="animate"
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-green-500 font-bold text-xl">
                    {item.price}
                  </span>
                  <button className="btn-primary py-1 px-3 text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Menu;
