import React from "react";
import CustomPrimaryButton from "../../shared/component/CustomPrimaryButton";
import RedirectInfo from "../../shared/component/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToLoginPage = () => {
    navigate("/login");
  };

  const getFormNotValidMessage = () => {
    return "Username should contains between 3 and 12 characters and password should contains between 6 and 12 characters";
  };
  const getFormValidMessage = () => {
    return "Press to Register";
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyle={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        redirectText={"Already Have an account ?"}
        additionalStyles={{ marginTop: "5px" }}
        redirecthandler={handlePushToLoginPage}
      />
    </>
  );
};

export default RegisterPageFooter;
