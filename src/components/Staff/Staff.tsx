import React, { useEffect, useState } from "react";
import { useLazyGetUsersQuery } from "../../redux/api/mainRtk";
import { StaffUser } from "./StaffUser";
import "./staff.scss";
import { Button } from "../Button/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { cardSlice } from "../../redux/reducers/mainSlice";
import { Preloader } from "../Preloader/Preloader";

export const Staff = () => {
  const { setUsers } = cardSlice.actions;
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.homeTopSliderSlice);

  const [
    getUsers,
    {
      data: usersData,
      isSuccess: usersSeccess,
      isLoading: usersLoading,
      isFetching: usersFetching,
    },
  ] = useLazyGetUsersQuery();

  const [countUsers, setUsersCount] = useState(6);

  useEffect(() => {
    getUsers({
      page: 1,
      count: 6,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getUsers({
      page: 1,
      count: countUsers,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countUsers]);

  const getMoreUsers = () => {
    if (countUsers >= 100) {
      setUsersCount(100);
    } else {
      if (countUsers + 25 >= 100) {
        setUsersCount(100);
      } else {
        setUsersCount(countUsers + 25);
      }
    }
  };

  if (usersSeccess && usersData) {
    dispatch(setUsers(usersData));
  }

  return (
    <div className="staff">
      <div className="container">
        <div className="staff__wrapper">
          <h2 className="staff__title">Working with GET request</h2>
          {!usersLoading && (
            <div className="staff__items">
              {usersSeccess &&
                users.users.map((user) => (
                  <div className="staff__item" key={user.id}>
                    <StaffUser user={user} />
                  </div>
                ))}
            </div>
          )}
          {countUsers >= 100 ? (
            <></>
          ) : (
            <>
              {usersFetching && (
                <div style={{ marginBottom: "50px" }}>
                  <Preloader />
                </div>
              )}
              <div onClick={() => getMoreUsers()}>
                <Button title={"Show more"} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
