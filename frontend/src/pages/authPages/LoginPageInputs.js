import React from "react";
import InputWithLabel from "../../shared/component/InputWithLabel";

const LoginPageInputs = ({ mail, setMail, password, setPassword }) => {
  return (
    <>
      <InputWithLabel
        value
        setValue
        label="Email"
        type="text"
        placeholder="Enter Email address"
      />
    </>
  );
};

export default LoginPageInputs;
