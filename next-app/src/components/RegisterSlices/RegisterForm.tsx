import * as React from "react";
import Img from "./Img";
import Form from "./Form";

const RegisterForm = () => {
  return (
    <div className="register-form-self grid grid-cols-12">
      <Img />
      <Form />
    </div>
  );
};

export default RegisterForm;
