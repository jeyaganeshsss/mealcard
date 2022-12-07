import React from "react";
import { useLocation as UseLocation,useNavigate as UseNavigate } from "react-router-dom";
import "./Styleshipping.css";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;

const shipping = () => {
  const location = UseLocation();
  //   console.log(location);
  const Navigate = UseNavigate();

  function onNextClick(event,items)
  {
    Navigate("/checkOut",{ state: items })
  }
  return (
    <div className="centered">
      <Card
        style={{
          width: 300,
        }}
        cover={<img alt="example" src={location.state.strMealThumb} />}
        actions={[<CloseOutlined key="Cancel" />, <CheckOutlined key="Next" onClick={event=>onNextClick(event,location.state)} />]}
      >
        <Meta
          avatar={
            <Avatar src="https://static.vecteezy.com/system/resources/previews/004/642/046/original/red-kitchen-chef-design-logo-template-chef-restaurant-logo-stock-illustrations-free-vector.jpg" />
          }
          title={location.state.strMeal}
          description="Price:₹150"
        />
        {/* <p>
   
    </p> */}
      </Card>
    </div>
  );
};
export default shipping;
