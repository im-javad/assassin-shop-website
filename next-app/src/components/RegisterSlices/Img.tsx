import Image from "next/image";
import * as React from "react";

const Img = () => {
  return (
    <div className="register-img col-span-12 lg:col-span-6">
      <Image
        height={1000}
        width={1000}
        src="/imgs/register.svg"
        alt="Register Img"
      ></Image>
    </div>
  );
};

export default Img;
