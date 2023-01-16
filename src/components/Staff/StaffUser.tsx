import React, { FC } from "react";
import { UserType } from "../../../models/mainfetchtypes";
import "./staff.scss";

interface UserPropsType {
  user: UserType;
}

export const StaffUser: FC<UserPropsType> = ({ user }) => {

  // чтобы при клике на ссылку номера телефона шел вызов в формате 0999999999
  const telrep = user.phone.replace("+38", "");

  return (
    <>
      <div className="staff__item-image">
        <img className="staff__item-img" src={user.photo} alt="" />
      </div>
      <div className="staff__item-name">{user.name}</div>
      <div className="staff__item-textbox">
        <p className="staff__item-text">{user.position}</p>
        <a className="staff__item-text" href={`mailto:${user.email}`}>
          {user.email}
        </a>
        <a className="staff__item-text" href={`tel:${telrep}`}>
          {user.phone}
        </a>
      </div>
    </>
  );
};
