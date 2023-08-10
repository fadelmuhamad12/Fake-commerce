import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";
import Navbar from "../../Components/Navbar/Navbar";

const MensCloth = () => {
  const [mensCloth, setMensCloth] = useState([]);

  const fetchMensCloth = async () => {
    try {
      const mensCloth = await axios.get(
        "https://fakestoreapi.com/products/category/men's clothing"
      );
      console.log(mensCloth.data);
      setMensCloth(mensCloth.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMensCloth();
  }, []);

  return (
    <>
    <Navbar />
      {mensCloth.map((cloth) => {
        return (
          <Cards key={cloth.id}>
            <img src={cloth.image} alt="" />
              <div>{cloth.title}</div>
          </Cards>
      
        
        ) 
      })}
    </>
  );
};

export default MensCloth;
