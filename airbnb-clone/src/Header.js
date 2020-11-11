import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/7/31/1406814966687/Airbnbs-new-logo-has-been-009.jpg?width=445&quality=85&auto=format&fit=max&s=2f06432e885d14a8df30740769e22505"
          alt="airbnb"
        />
      </Link>

      <div className="header__center">
        <input type="text" name="" id="" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
