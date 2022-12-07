import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">MealCard</Link>
          </li>
          <li>
            <Link to="/shipping">Shipping</Link>
          </li>
          <li>
            <Link to="/checkOut">CheckOut</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;