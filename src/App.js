// import ReactDOM from "react-dom/client";
// import "./App.css";
import "antd/dist/reset.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate as UseNavigate,
  Navigate
} from "react-router-dom";
import { useHistory as UseHistory } from "react-router";

import Layout from "./Layout/layout";
import MealCard from "./MealCard/mealCard";
import Shipping from "./Shipping/shipping";
import CheckOut from "./CheckOut/checkOut";
import { useEffect, useState } from "react";
// import getAllMeals from "./api/getAllMeals";
// import NoPage from "./pages/NoPage";

export default function App() {
  
  const [login,setLogin]=useState(true);
  const [count,setCount]=useState(0)
  useEffect(()=>{
    
    if (window.performance) {
      if (window.performance.navigation.type == "reload" || window.performance.navigation.type == 1) {
        setLogin(login=>!login)
        // setCount(count=>count+1)
      }
      else
      setLogin(true)
      // else
      // setLogin(login=>!login)

    }
  },[count])
  console.log(login)
  // console.log(getAllMeals)
  // const history = useHistory()
  //  const Navigate = UseNavigate();
  // const elementRoute = () => {
  //   return (
  //     <BrowserRouter>
  //         <Routes>
  //           {/* <Route path="/" element={<Layout />}> */}
  //           {/* <Navigate exact from="/" to="/mealCard" /> */}
  //           <Route index element={<MealCard />} />
  //           <Route path="shipping" element={<Shipping />} />
  //           <Route path="checkOut" element={<CheckOut />} />
  //           {/* <Route path="*" element={<NoPage />} /> */}
  //           {/* </Route> */}
  //         </Routes>
  //     </BrowserRouter>
  //     // <MealCard></MealCard>
  //   );
  // };
  

  // return { elementRoute };
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        {/* <Navigate to="/mealCard" /> */}

        <Route index element={<MealCard />} />
        {/* <Route path="shipping" element={<Shipping />} />
          <Route path="checkOut" element={<CheckOut />} /> */}
        <Route
          exact
          path="shipping"
          element={login ? <Shipping /> : <Navigate replace to={"/"} />}
        />
        <Route
          exact
          path="shipping"
          element={login ? <CheckOut /> : <Navigate replace to={"/"} />}
        />
        {/* <Route
          path={!login ? "mealCard" : "shipping"}
          element={!login ? <MealCard /> : <Shipping />}
        />
        <Route
          path={!login ? "mealCard" : "checkOut"}
          element={!login ? <MealCard /> : <CheckOut />}
        /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    // <MealCard></MealCard>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
