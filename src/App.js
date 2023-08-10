import "./App.css";
import Header from "./components/Header";
import Home from "./modules/Home";
import Footer from "./components/Footer";
import Product from "./modules/Product";
import Products from "./modules/Products";
import AboutUs from "./modules/AboutUs";
import { Routes, Route } from "react-router-dom";
import CategoryProducts from "./modules/CategoryProduct";
import Categories from "./components/Categories";
import Cart from "./modules/Cart";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:name" element={<CategoryProducts />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/categories" element={<Categories />} />

        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
