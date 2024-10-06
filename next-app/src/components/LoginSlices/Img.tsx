import Image from "next/image";
import * as React from "react";

const Img = () => {
  return (
    <div className="login-img col-span-12 lg:col-span-6">
      <Image
        height={1000}
        width={1000}
        src="/imgs/login.svg"
        alt="Login Img"
      ></Image>
    </div>
  );
};

export default Img;
