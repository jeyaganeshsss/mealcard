import React from "react";
// import { Card } from "antd";
import "./StyleMealCard.css";
import { useNavigate as UseNavigate } from 'react-router-dom';
function viewCard(props) {
  const Navigate = UseNavigate();
  function onMealClick(event,items)
  {
    Navigate("/shipping",{ state: items });
  }
  
  return props.somProp.map((items) => {
    return (
      <div className="card" key={items.idMeal} onClick={event=>onMealClick(event,items)}>
        <img src={items.strMealThumb} className="card--image"></img>
        <div className="card--stats">
          <span className="bold">{items.strMeal}</span>
        </div>
        <p className="card--title">{items.strTags}</p>
      </div>
    );
  });
}

export default viewCard;
