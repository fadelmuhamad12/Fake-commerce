import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import axios from "axios";
import ModalSelected from "./ModalSelected";

const GetProduct = () => {
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const [SelectedProduct, setSelectedProduct] = useState(null);

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
      <h3 className="text-2xl font-bold mt-12 mx-12">*Recommendations</h3>
      <Cards>
        {products.slice(0, 12).map((product) => {
          return (
            <div
              key={product.id}
              className="cursor-pointer"
              onClick={() => handleShow(product)}
            >
              <h5>{product.title}</h5>

              <div>
                <img src={product.image} alt="img" style={{ width: "150px" }} />
              </div>
              <p className="flex ml-5 xl:ml-12 md:ml-12 mt-2 font-bold">
                $ {product.price}
              </p>
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
