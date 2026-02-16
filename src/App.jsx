import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import Hotdessert from "./components/hotdessert/Hotdessert";
import Navbar from "./components/Navbar/Navbar";
import PopularRecipe from "./components/PopularRecipe/PopularRecipe";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Favorite from "./pages/Favorite";
import Cart from "./pages/Cart";
import OrderList from "./pages/OrderList";
import Checkout from "./pages/Checkout";

function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <Hero />
      </div>
      <Hotdessert />
      <Banner />
      <PopularRecipe />
      <Testimonial />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
