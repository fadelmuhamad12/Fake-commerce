import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ImageCat = () => {
  const [img, setImg] = useState([]);
  const fetchImgCategory = async (id) => {
    const imgCategory = await axios.get("https://fakestoreapi.com/products/9");
    setImg(imgCategory.data.image);
  };

  useEffect(() => {
    fetchImgCategory();
  }, []);
  return (
    <div>
      <img src={img} alt="Image" style={{width: "150px"}}/>
    </div>
  );
};

export default ImageCat;
