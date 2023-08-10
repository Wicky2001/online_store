import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(20);
  const [totalProducts, setTotalProducts] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
          (currentPage - 1) * productsPerPage
        }`
      );
      const data = await response.json();
      setProducts(data.products);
      setTotalProducts(data.total);
    };
    fetchProducts();
  }, [currentPage]);

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      return;
    }

    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchQuery}`
    );
    const data = await response.json();
    setProducts(data.products);
    setTotalProducts(data.total);
    setCurrentPage(1);
  };
  return (
    <div>
      <div className="flex items-center justify-center mt-4">
        <input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); // Prevent the default Enter behavior (form submission)
              handleSearch(); // Call the handleSearch function
            }
          }}
          className="w-3/5 px-4 py-2 border rounded-l-lg focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className=" w-1/10 px-4 py-2 bg-transparent text-gray-900 border border-gray-500 rounded-r-lg hover:bg-gray-800 hover:border-gray-800 hover:text-white focus:outline-none"
        >
          Search
        </button>
      </div>

      {products.length > 0 ? (
        <>
          <ProductCard products={products} />
          <div className="flex justify-center mt-4">
            {pageNumbers.map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={`px-3 py-2 mx-1 mb-6 ${
                  currentPage === pageNumber
                    ? "bg-black text-white"
                    : "bg-gray-300 hover:bg-gray-900 text-white"
                } rounded-lg`}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div>Loading.....</div>
      )}
    </div>
  );
};

export default Products;
