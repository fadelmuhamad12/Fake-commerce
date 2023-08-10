import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Categories from "../Components/GetCategories/Categories";
import GetProduct from "../Components/GetProduct/GetProduct";
import Electronics from "./Electronics/Electronics";

const Home = () => {
  return (
    <div>
     <Navbar />
      <Hero /> {/*SEARCHBAR SAMA FOTO SEPATU */}
      <Categories />
      {/*KATEGORI */}
      <GetProduct />
    </div>
  );
};

export default Home;
