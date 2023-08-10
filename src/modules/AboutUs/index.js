import React from 'react';
import image from "../../assets/image2.png";

const AboutUs = () => {
  return (
    <div className="bg-white-100 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-semibold mb-8 text-center text-blue-500">About Us</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-8 mb-8">
            <img
              src={image}
              alt="About Us"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-blue-400 leading-relaxed mb-6 text-center text-lg">
              Welcome to our online store! We are dedicated to providing you with the best products and shopping experience.
              we believe in providing more than just products; we're dedicated to creating moments of joy, inspiration, and satisfaction for every customer.Our journey began with a passion for exceptional products and a commitment to outstanding service
              Since 2023, we have grown into a platform that offers a wide range of products across various categories, carefully curated to cater to your needs and desires.
            </p><br/>
            <p className="text-blue-400 leading-relaxed mb-6 text-center text-lg">
            We invite you to explore our wide array of products and experience the convenience of online shopping like never before. Join our growing community of satisfied customers and be a part of the [Your Website Name] family. Feel free to contact our dedicated customer support team for any assistance or inquiries. we're here to help!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
