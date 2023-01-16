import React from "react";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";
import { Staff } from "../components/Staff/Staff";
import { Top } from "../components/Top/Top";

export const Index = () => {
  return (
    <div>
      <Top />
      <Staff />
      <RegisterForm />
    </div>
  );
};
