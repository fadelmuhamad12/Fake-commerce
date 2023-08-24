import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import airmax from "../../assets/airmax.png";

const Cart = () => {
  const [addCart, setAddCart] = useState(0);

  const sizeImg = {
    width: "100px",
  };

  const addCartHandler = () => {
    setAddCart(addCart + 1);
  };

  const removeItemHandler = () => {
    setAddCart(addCart - 1);
  };

  return (
    <>
      <Navbar />
      <div className="bg-ceria-400 h-screen flex">
        <div className="bg-ceria-600 h-1/2 w-72 rounded-lg mt-2 mx-auto h-screen">
          <div className="text-3xl font-bold text-center  text-white">Cart</div>
          <div className="text-1xl font-bold py-2 ml-5 text-white">
            <div className="flex gap-4 ">
              <div className="bg-white rounded-md">
                <img src={airmax} style={sizeImg} alt="" />
              </div>
              <div>
                <p>AirMax 97</p>
                <p>42</p>
                <p>$ 100</p>
                <div className="flex ml-20 gap-1">
                  <button
                    className="pointer bg-ceria-500 px-1"
                    onClick={removeItemHandler}
                  >
                    -
                  </button>
                  <p>{addCart}</p>
                  <button
                    className="pointer bg-ceria-500 px-1"
                    onClick={addCartHandler}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-4 ">
              <div className="bg-white rounded-md">
                <img src={airmax} style={sizeImg} alt="" />
              </div>
              <div>
                <p>AirMax 97</p>
                <p>42</p>
                <p>$ 100</p>
                <div className="flex ml-20 gap-1">
                  <button className="pointer bg-ceria-500 px-1">-</button>
                  <p>1</p>
                  <button className="pointer bg-ceria-500 px-1">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
