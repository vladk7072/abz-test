import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import "./registerForm.scss";
import "../Button/buttun.scss";
import { usePostFormMutation } from "../../redux/api/mainRtk";
import InputMask from "react-input-mask";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  photo: any;
};

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [postForm] = usePostFormMutation();

  const checkBox = [
    { id: 1, title: "Frontend developer" },
    { id: 2, title: "Backend developer " },
    { id: 3, title: "Designer " },
    { id: 4, title: "QA" },
  ];
  const [radioErr, serRadioErr] = useState(false);
  const [radioId, setRadioId] = useState(0);
  const changeRadio = (id: number) => {
    setRadioId(id);
  };
  const [photoFile, setPhotoFile] = useState<any>();
  const handlePhoto = (e: any) => {
    setPhotoFile(e.target.files[0]);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData();
    formData.append("photo", data.photo);
    if (radioId > 0) {
      serRadioErr(false);
      postForm({
        name: data.name,
        email: data.email,
        phone: data.phone,
        position_id: radioId,
        photo: formData,
      });
    } else {
      serRadioErr(true);
    }
  };

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
                {...register("name", {
                  required: true,
                  minLength: { value: 2, message: "Min length is 2" },
                  maxLength: { value: 60, message: "Max length is 60" },
                })}
                id="name"
                className={
                  errors.name
                    ? "registerform__input registerform__input-err"
                    : "registerform__input"
                }
                placeholder="Your name"
              />
              <label
                className={
                  errors.name
                    ? "registerform__label registerform__label-err"
                    : "registerform__label"
                }
              >
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
                {...register("email", {
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  required: "Enter in the format mail@gmail.io",
                })}
                className={
                  errors.email
                    ? "registerform__input registerform__input-err"
                    : "registerform__input"
                }
                placeholder="Email"
              />
              <label
                className={
                  errors.email
                    ? "registerform__label registerform__label-err"
                    : "registerform__label"
                }
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
              <InputMask
                mask="+38(999)-999-99-99"
                {...register("phone", {
                  required: true,
                })}
                className={
                  errors.phone
                    ? "registerform__input registerform__input-err"
                    : "registerform__input"
                }
                placeholder="phone"
              />
              <label
                className={
                  errors.phone
                    ? "registerform__label registerform__label-err"
                    : "registerform__label"
                }
              >
                Phone
              </label>
            </div>
            {errors.phone ? (
              <span className="registerform__item-helper">
                Required
              </span>
            ) : (
              <span className="registerform__item-helper"></span>
            )}

            <div className="registerform__checkbox">
              <div className="registerform__checkbox-title">
                Select your position
              </div>
              {checkBox.map((item) => (
                <div className="registerform__check" key={item.id}>
                  <label
                    className="registerform__check-label"
                    onClick={() => changeRadio(item.id)}
                  >
                    <input
                      className="registerform__check-input"
                      type="radio"
                      name="radiorg"
                    />
                    <span className="registerform__check-span"></span>
                    {item.title}
                  </label>
                </div>
              ))}
              {radioErr && (
                <div className="registerform__item-helper">
                  Please select your specialty
                </div>
              )}
            </div>

            <div className="input__wrapper">
              <input
                className="registerform__file-input"
                {...register("photo", {
                  required: true,
                })}
                type="file"
                id="file-image"
                accept=".jpg, .jpeg"
                onChange={handlePhoto}
              />
              <label className="registerform__file-button" htmlFor="file-image">
                <span
                  className={
                    errors.photo
                      ? "registerform__file-button-ico registerform__file-button-ico-err"
                      : "registerform__file-button-ico"
                  }
                >
                  Upload
                </span>
                <span
                  className={
                    errors.photo
                      ? "registerform__file-button-text registerform__file-button-text-err"
                      : "registerform__file-button-text"
                  }
                >
                  Upload your photo
                </span>
              </label>
              {errors.phone ? (
                <span className="registerform__item-helper">Required</span>
              ) : (
                <span className="registerform__item-helper"></span>
              )}
              {photoFile ? (
                <span
                  style={{ color: "#000" }}
                  className="registerform__item-helper"
                >
                  {photoFile && photoFile.name}
                </span>
              ) : (
                <span className="registerform__item-helper"></span>
              )}
            </div>

            <input
              style={{ marginTop: "40px" }}
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
