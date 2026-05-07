import { brandLogo } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="header">
      <Link to={"/"}>
        <div className="logo-container">
          <img className="header-logo" src={brandLogo} />
        </div>
      </Link>

      <div className="search-bar">
        <input type="text" placeholder="Search for restaurants, cusines... " />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>{" "}
          </li>
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
