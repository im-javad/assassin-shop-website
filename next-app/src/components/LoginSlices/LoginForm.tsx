import * as React from "react";
import Img from "./Img";
import Form from "./Form";

const LoginForm = () => {
  return (
    <div className="login-form-self grid grid-cols-12">
      <Img />
      <Form />
    </div>
  );
};

export default LoginForm;
