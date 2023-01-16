import React from "react";
import logo from "../../assets/images/logo.svg";
import { Button } from "../Button/Button";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <a className="header__logo-link" href="/">
            <img src={logo} alt="logo" />
          </a>
          <nav className="header__nav">
            <ul className="header__items">
              <li className="header__item">
                <Button title={"Users"} />
              </li>
              <li className="header__item">
                <Button title={"Sign up"} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
