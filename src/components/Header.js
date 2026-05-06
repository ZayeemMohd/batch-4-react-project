import { brandLogo } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="header-logo" src={brandLogo} />
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search for restaurants, cusines... " />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <Link to={"/about"}><li>About Us</li></Link> 
          <li>Contact Us</li>
          <li>Cart</li>
          {isLogin ? (
            <li
              onClick={() => {
                setIsLogin(!isLogin);
              }}
            >
              Logout
            </li>
          ) : (
            <li
              onClick={() => {
                setIsLogin(!isLogin);
              }}
            >
              Login
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
