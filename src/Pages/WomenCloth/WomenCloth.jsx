import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";
import Navbar from "../../Components/Navbar/Navbar";


const WomenCloth = () => {
  const [womenCloth, setWomenCloth] = useState([]);

  const fetchWomenCloth = async () => {
    try {
      const womenCloth = await axios.get(
        "https://fakestoreapi.com/products/category/women's clothing"
      );
      console.log(womenCloth.data);
      setWomenCloth(womenCloth.data)
    } catch (error) {}
  };



  useEffect(()=> {
      fetchWomenCloth();
  }, [])

  return (
    <>
    <Navbar />
      {womenCloth.map((cloth)=> {
        return (
          <Cards>
            <img src={cloth.image} alt="" />
            <div>{cloth.title}</div>
          </Cards>
        )
      })}
    </>

  )
};

export default WomenCloth;
