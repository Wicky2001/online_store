import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Products from "../../components/ProductCard";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=12");
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Hero />

      <div className="flex flex-col text-center w-full mt-5">
        <h1 className="title-font lg:text-3xl text-4xl mb-3 font-medium text-gray-900">
          CYBER DEALS!
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading......</div>
      )}
      <Products />
    </>
  );
};

export default Home;
