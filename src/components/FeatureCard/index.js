import React from "react";
import { Link } from "react-router-dom";

const FeatureCard = ({ cards = [1, 2, 3] }) => {
  return (
    <section className="text-gray-700 body-font bg-gray-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {cards?.map((card) => {
            return (
              <Link
                to={`/categories/${card}`}
                className="p-3 md:w-1/4 cursor-pointer"
                key={card}
              >
                <div className="flex rounded-lg h-full bg-gray-100  border-gray-800 p-5 flex-col  hover:shadow-lg hover:gray-300 hover:text-white hover:font-bold hover:text-2xl hover:border-gray-800 transition duration-300">
                  <div className="flex items-center mb-3 justify-center">
                    <h2 className="text-gray-800 text-lg title-font capitalize">
                      {card || "Example card"}
                    </h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
