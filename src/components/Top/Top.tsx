import React from "react";
import "./top.scss";
import bg from "../../assets/images/top-bg.jpg";
import { Button } from "../Button/Button";

export const Top = () => {
  return (
    <div className="top">
      <div className="top__image">
        <img className="top__img" src={bg} alt="backgroundImage" />
      </div>
      <div className="top__wrapper">
        <h1 className="top__title">Test assignment for front-end developer</h1>
        <p className="top__text">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Button title={"Sign up"} />
      </div>
    </div>
  );
};
