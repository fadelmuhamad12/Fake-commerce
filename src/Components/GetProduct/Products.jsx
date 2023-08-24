import React from "react";
import Cards from "../Cards/Cards";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-Slice";

const Products = (props) => {
  const { id, title, img, price, handleShow } = props;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart)
  }

  return (
    <Cards>
      <div className="border-solid border-2 border-sky-300">
        <div key={id} className="cursor-pointer">
          <h5>{title}</h5>

          <div className="lg:w-1/2 m-auto w-3/4">
            <img src={img} alt="img" />
          </div>
          <p className="flex ml-5 xl:ml-12 md:ml-12 mt-2 font-bold">
            $ {price}
          </p>
          <div className="flex flex-row lg:gap-4 mx-0.5 mt-2 gap-2">
            <div className="flex bg-blue-500 rounded-lg p-1 text-center hover:bg-blue-400 mt-2 text-white  ">
              <button onClick={addToCartHandler}>Add</button>
            </div> 

             <div className="bg-blue-500 rounded-lg p-1 text-center hover:bg-blue-400 mt-2 text-white">
              <button onClick={() => handleShow(product)}>Details</button>
            </div> 
          </div>
        </div>
      </div>
    </Cards>
  );
};

export default Products;
