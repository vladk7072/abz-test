import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./buttun.scss";

interface ButtonPropsType {
  title: string;
  link?: string;
}

export const Button: FC<ButtonPropsType> = ({ title, link = "/" }) => {
  return (
    <div className="button">
      <Link className="button__link" to={link}>
        {title}
      </Link>
    </div>
  );
};
