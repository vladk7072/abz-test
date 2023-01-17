import React from "react";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";
import { RegisterSuccess } from "../components/RegisterForm/RegisterSuccess";
import { Staff } from "../components/Staff/Staff";
import { Top } from "../components/Top/Top";

export const Index = () => {
  return (
    <div>
      <Top />
      <Staff />
      <RegisterForm />
      <RegisterSuccess />
    </div>
  );
};
