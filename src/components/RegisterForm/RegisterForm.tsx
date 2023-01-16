import React from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import "./registerForm.scss";
import "../Button/buttun.scss";

type Inputs = {
  name: string;
  email: string;
  phone: number;
  isFrontend: boolean;
  isBackend: boolean;
  isDesigner: boolean;
  isQA: boolean;
};

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="registerform">
      <div className="container">
        <h2 className="staff__title">Working with POST request</h2>
        <div className="registerform__wrapper">
          <form
            className="registerform__form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="registerform__item">
              <input
                id="name"
                className={
                  errors.name
                    ? "registerform__input registerform__input-err"
                    : "registerform__input"
                }
                placeholder="Your name"
                {...register("name", {
                  minLength: { value: 2, message: "Min length is 2" },
                  maxLength: { value: 60, message: "Max length is 60" },
                })}
              />
              <label className="registerform__label" htmlFor="name">
                Your name
              </label>
            </div>
            {errors.name ? (
              <span className="registerform__item-helper">
                {errors.name.message}
              </span>
            ) : (
              <span className="registerform__item-helper"></span>
            )}

            <div className="registerform__item">
              <input
                id="email"
                className={
                  errors.email
                    ? "registerform__input registerform__input-err"
                    : "registerform__input"
                }
                placeholder="Email"
                {...register("email", {
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  required: "Enter in the format mail@gmail.io",
                })}
              />
              <label
                className={
                  errors.email
                    ? "registerform__label registerform__label-err"
                    : "registerform__label"
                }
                htmlFor="email"
              >
                Email
              </label>
            </div>
            {errors.email ? (
              <span className="registerform__item-helper">
                {errors.email.message}
              </span>
            ) : (
              <span className="registerform__item-helper"></span>
            )}

            <div className="registerform__item">
              <input
                id="phone"
                {...register("name", {
                  minLength: 13,
                  maxLength: 13,
                  pattern: /^[A-Za-z]+$/i,
                })}
                className={
                  errors.phone
                    ? "registerform__input registerform__input-err"
                    : "registerform__input"
                }
                placeholder="phone"
              />
              <label className="registerform__label" htmlFor="phone">
                Phone
              </label>
            </div>
            {errors.phone ? (
              <span className="registerform__item-helper">
                {errors.phone.message}
              </span>
            ) : (
              <span className="registerform__item-helper"></span>
            )}

            <div className="registerform__checkbox">
              <div className="registerform__checkbox-title">
                Select your position
              </div>
              <div className="registerform__check">
                <label className="registerform__check-label">
                  <input
                    {...register("isFrontend")}
                    className="registerform__check-input"
                    type="radio"
                    name="radiorg"
                  />
                  <span className="registerform__check-span"></span>
                  Frontend developer
                </label>
              </div>
              <div className="registerform__check">
                <label className="registerform__check-label">
                  <input
                    {...register("isBackend")}
                    className="registerform__check-input"
                    type="radio"
                    name="radiorg"
                  />
                  <span className="registerform__check-span"></span>
                  Backend developer
                </label>
              </div>
              <div className="registerform__check">
                <label className="registerform__check-label">
                  <input
                    {...register("isDesigner")}
                    className="registerform__check-input"
                    type="radio"
                    name="radiorg"
                  />
                  <span className="registerform__check-span"></span>
                  Designer
                </label>
              </div>
              <div className="registerform__check">
                <label className="registerform__check-label">
                  <input
                    {...register("isQA")}
                    className="registerform__check-input"
                    type="radio"
                    name="radiorg"
                  />
                  <span className="registerform__check-span"></span>
                  QA
                </label>
              </div>
            </div>

            <div className="input__wrapper">
              <input
                type="file"
                id="file-image"
                className="registerform__file-input"
              />
              <label htmlFor="file-image" className="registerform__file-button">
                <span className="registerform__file-button-ico">Upload</span>
                <span className="registerform__file-button-text">
                  Upload your photo
                </span>
              </label>
            </div>

            <input
              style={{ marginTop: "50px" }}
              className="button  button__link button__form"
              type="submit"
              value="Sign up"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
