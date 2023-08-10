import React from "react";
import image from "../../assets/happyGirl.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 pt-24 pb-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font lg:text-7xl text-4xl mb-6 font-medium text-gray-900">
            Hi there!
            <br className="hidden lg:inline-block" />
            <span className="title-font lg:text-5xl text-3xl mb-6 font-medium text-gray-900">
              Welcome To WICKS
            </span>
          </h1>
          <p className="mb-8 leading-relaxed text-lg">
            "Embark on an exceptional shopping adventure through our
            state-of-the-art online marketplace. Explore our vast selection of
            top-tier goods, effortless navigation, and a trusted checkout
            procedure. Rediscover the art of shopping with our revolutionary
            platform."
          </p>
          <div className="flex justify-center">
            <Link to="/products">
              <button className="inline-flex text-black bg-transparent border border-black py-2 px-6 focus:outline-none hover:bg-black hover:text-white rounded text-lg">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-3/4 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={image}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
