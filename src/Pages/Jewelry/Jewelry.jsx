import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";
import Navbar from "../../Components/Navbar/Navbar";

const Jewelry = () => {
  const [jewelrys, setJewelrys] = useState([]);

  const fetchJewelrys = async () => {
    try {
      const jewelrys = await axios.get(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      console.log(jewelrys.data);
      setJewelrys(jewelrys.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJewelrys();
  }, []);

  return (
    <>
    <Navbar />
      {jewelrys.map((jewelry) => {
        return (
          <Cards>
            <img src={jewelry.image} />
            <div>{jewelry.title}</div>
          </Cards>
        );
      })}
    </>
  );
};

export default Jewelry;
