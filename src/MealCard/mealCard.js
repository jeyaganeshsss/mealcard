import React, { useState, useEffect } from "react";
import axiosInstance from "../api/axiosConfig";
import Card from "./Card";
import localStorage from "../Hooks/useLocalStorage";
import "./StyleMealCard.css";
import { Input, Space } from 'antd';
const { Search } = Input;
const MealCard = () => {
  const [mealsData, setMealsData] = useState([{}]);
  const [mealText,setMealText]=useState("");

  const onSearch = (value) => {
    setMealText(value)
  };
  
  useEffect(() => {
    fetchData();
  }, [mealText]);

  const fetchData = async (val) => {
    try {
      await axiosInstance.get("/search.php?s="+mealText).then((response) => {
        //console.log(response.data.meals);
        setMealsData(response.data.meals);
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>  
    <section className="cards-list">
    <Search
      id="txtSearch"
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
      <Card somProp={mealsData} />
    </section>
    </>
  );
};
export default MealCard;
