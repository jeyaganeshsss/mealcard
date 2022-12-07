import React from "react";
import { useLocation as UseLocation } from "react-router-dom";

const checkOut = () => {
  const location = UseLocation();
  return (<div><h1>
    {location.state.strMeal}</h1>
    </div>)
};
export default checkOut;
