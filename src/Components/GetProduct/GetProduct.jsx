import React, { useEffect, useState } from "react";

const GetProduct = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchProductsData = async () => {
      const productsData = await fetchProducts();
      if (products) {
        setProducts(productsData);
      }
    };

    fetchProductsData();
  }, []);

  return (
    <div className=" grid grid-cols-2 gap-10 w-auto mt-12 mx-auto xl:grid-cols-4 md:grid-cols-4">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h5>{product.title}</h5>

            <div>
              <img src={product.image} alt="" />
            </div>
            <p>$ {product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GetProduct;
