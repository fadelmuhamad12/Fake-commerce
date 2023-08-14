import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import axios from "axios";
import ModalSelected from "./ModalSelected";

const GetProduct = () => {
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const [SelectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");

  const searchBar = (e) => {
    setSearch(e.target.value);
  };

  const handleShow = (product) => {
    setSelectedProduct(product);
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  const fetchProduct = async () => {
    try {
      const product = await axios.get("https://fakestoreapi.com/products");
      setProducts(product.data);
    } catch (error) {
      console.log("Error di fetch product", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className=" flex justify-center mt-16">
        <input
          onChange={searchBar}
          value={search}
          type="text"
          placeholder="What Are You Looking For ?"
          className="bg-gray-200 p-2 w-full xl:w-1/3 md:w-1/2 rounded-xl placeholder:text-black mx-2"
        />
      </div>
      <h3 className="text-2xl font-bold mt-12 mx-12">*Recommendations</h3>
      <Cards>
        {products
          .filter((product) => {
            return search.toLowerCase() === ""
              ? product
              : product.title.toLowerCase().includes(search);
          })

          .map((product) => {
            return (
              <div
                key={product.id}
                className="cursor-pointer"
                onClick={() => handleShow(product)}
              >
                <h5>{product.title}</h5>

                <div>
                  <img
                    src={product.image}
                    alt="img"
                    style={{ width: "150px" }}
                  />
                </div>
                <p className="flex ml-5 xl:ml-12 md:ml-12 mt-2 font-bold">
                  $ {product.price}
                </p>
                <div className="flex flex-row gap-4 mt-2">
                  <div className="bg-blue-500 rounded-lg p-1 text-center hover:bg-blue-400 mt-2">
                    <button>Buy</button>
                  </div>

                  <div className="bg-blue-500 rounded-lg p-1 text-center hover:bg-blue-400 mt-2">
                    <button>Details</button>
                  </div>
                </div>
              </div>
            );
          })}
      </Cards>

      <ModalSelected
        handleClose={handleClose}
        SelectedProduct={SelectedProduct}
        modal={modal}
      />
    </>
  );
};

export default GetProduct;
