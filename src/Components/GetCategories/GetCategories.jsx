import React, { useEffect, useState } from "react";

const GetCategories = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchCategoriesData = async () => {
      const categoriesData = await fetchCategories();
      if (categoriesData) {
        setCategories(categoriesData);
      }
    };

    fetchCategoriesData();
  }, []);

  return (
    <div className="flex w-full flex-row justify-center mt-4 gap-2 text-center">
      {categories.map((category) => {
        return (
          <div key={category} className="bg-gray-200 rounded-xl">
            <h5 className="p-1">{category}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default GetCategories;
