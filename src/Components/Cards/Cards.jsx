import React from "react";

const Cards = (props) => {
  return (
    <div className="grid grid-cols-2 gap-16 w-auto mt-5 mx-auto xl:grid-cols-4 md:grid-cols-4 w-3/4">
      {props.children}
    </div>
  );
};

export default Cards;
