import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import {ImSearch} from "react-icons/im";
import { ShoppingBasket } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{basket},dispatch]=useStateValue();
  console.log(basket);
  return (
    <nav className="header">
      {/* logo on left */}
      <Link to="/login">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      {/* serch bar */}
      <div className="header_search">
        <input type="text" className="header_searchInput"></input>
        <ImSearch className="header_searchicon"/>
      </div>
      {/* sign in link */}{/* return and orders */}{/* your prime */}
      <div className="headerNav">
        <div className="header_link">
        <Link to="/login" className="header_option"><p className="para">Hello!</p>Sign In</Link>
        </div>
        <div className="header_link">
        <Link to="/" className="header_option"><p className="para">Returns</p>& Orders</Link>
        </div>
        <div className="header_link">
        <Link to="/prime" className="header_option"><p className="para">Try</p>Prime</Link>
        </div>
        <div className="header_link">
        <Link to="/checkout" className="header_optionbasket"><ShoppingBasket className="basket"/><p className="parabasket">{basket?.length}</p></Link>
        </div>
      </div>
      {/* basket icon with number*/}
    </nav>
  );
}

export default Header;
