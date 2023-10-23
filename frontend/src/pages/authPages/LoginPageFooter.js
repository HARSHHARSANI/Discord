import React from "react";
import CustomPrimaryButton from "../../shared/component/CustomPrimaryButton";
import RedirectInfo from "../../shared/component/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    navigate("/register");
  };

  const getFormNotValidMessage = () => {
    return "Enter Correct Credentials where password should be greater then 6 characters";
  };
  const getFormValidMessage = () => {
    return "Press to Log In";
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Login"
            additionalStyle={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text={"Need a account "}
        redirectText={"Create a account"}
        additionalStyles={{ marginTop: "5px" }}
        redirecthandler={handlePushToRegisterPage}
      />
    </>
  );
};

export default LoginPageFooter;
