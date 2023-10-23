import React, { useState } from "react";
import AuthBox from "../../shared/component/AuthBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";

const LoginPage = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs
        mail={mail}
        setmail={setMail}
        password={password}
        setpassword={setPassword}
      />
    </AuthBox>
  );
};

export default LoginPage;
