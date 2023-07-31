import React, { useEffect, useState } from "react";
import ImageCat from "./ImageCat";
import axios from "axios";

const GetCategories = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategory = async () => {
    const categories= await axios.get(
      "https://fakestoreapi.com/products/categories"
    );

    setCategories(categories.data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div>
      <div className="flex flex-row justify-center w-full mx-auto p-4 mt-4 gap-4 text-center bg-gray-400 xl:w-4/5 md:w-4/5 rounded-lg">
        {categories.map((category) => {
          return (
            <div key={category}>
              <div className="flex justify-center ">
                <ImageCat />
              </div>

              <h5 className="p-1 text-white font-bold">{category}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetCategories;
