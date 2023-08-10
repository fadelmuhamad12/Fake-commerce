import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";

const Electronics = () => {
  const [electronics, setElectronics] = useState([]);

  const fetchElectronics = async () => {
    try {
      const electronics = await axios.get(
        "https://fakestoreapi.com/products/category/electronics"
      );
      setElectronics(electronics.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchElectronics();
  }, []);

  return (
    <>
      {electronics.map((electronic) => {
        return (
          <Cards >
            <img src={electronic.image} alt="" />
            <h5 className="font-bold tex-2xl">{electronic.title}</h5>
            
          </Cards>
        );
      })}
    </>
  );
};

export default Electronics;
