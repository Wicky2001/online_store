import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ products = [] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-10">
        {products.map((product) => {
          const { id, title, price, description, category, thumbnail } =
            product;
          return (
            <Link
              to={`/products/${id}`}
              className=" border border-opacity-50 px-3 rounded-lg mb-4 cursor-pointer hover:bg-gray-100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt={title}
                  className="object-contain object-center w-full h-full block"
                  src={thumbnail}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                  {category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {title}
                </h2>
                <p className="mt-1 text-md font-semibold">${price}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProductCard;
