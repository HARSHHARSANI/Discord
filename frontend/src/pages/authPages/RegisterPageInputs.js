import React from "react";
import InputWithLabel from "../../shared/component/InputWithLabel";

const RegisterPageInputs = (props) => {
  const { mail, setMail, username, setUsername, password, setPassword } = props;

  console.log(mail);
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="Email Address"
        type="email"
        placeholder="Please Enter Your Email Address"
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Please Enter a Username"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter Password"
      />
    </>
  );
};

export default RegisterPageInputs;
