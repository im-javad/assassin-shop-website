import * as React from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import { FaUserTie } from "react-icons/fa";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";

const Form = () => {
  return (
    <div className="register-form col-span-12 lg:col-span-6">
      <div className="form-header">
        <h1 className="text-2xl mb-2 md:text-4xl md:mb-3">ثبت نام کاربر</h1>
        <span>لطفا فیلد های مورد نظر را پر کنید</span>
      </div>
      <div className="form mt-7 md:mt-14">
        <div className="input-group mb-4 md:mb-6">
          <FaUserTie className="input-icon top-[12px]" size={25} />
          <input type="text" placeholder="نام کاربری" />
        </div>
        <div className="input-group mb-4 md:mb-6">
          <MdEmail className="input-icon top-[12px]" size={25} />
          <input type="email" placeholder="ایمیل" />
        </div>
        <div className="input-group mb-4 md:mb-6">
          <FaPersonCircleQuestion className="input-icon top-[12px]" size={25} />
          <TiArrowSortedDown className="select-icon top-[15px]" size={23} />
          <select className="">
            <option disabled selected>
              انتخاب نقش کاربری
            </option>
            <option>مشتری</option>
            <option>فروشنده</option>
          </select>
        </div>
        <div className="input-group mb-4 md:mb-6">
          <TbPasswordFingerprint className="input-icon top-[12px]" size={25} />
          <input type="password" placeholder="رمز" />
        </div>
        <div className="input-group">
          <TbPasswordFingerprint className="input-icon top-[12px]" size={25} />
          <input type="password" placeholder="تایید رمز" />
        </div>
        <div className="form-another-details mb-7 mt-7 md:mb-10 md:mt-10">
          <div className="create-account mb-2">
            <span>
              اکانت دارید؟
              <Link href={"/guest/login"} className="register-link">
                ورود به اکانت
              </Link>
            </span>
          </div>
          <div className="forgot-password">
            <Link href={"/"} className="recovery-password">
              فراموشی رمز عبور
            </Link>
          </div>
        </div>
        <div className="click-btn mb-7 md:mb-14">
          <button className="w-full text-lg md:w-1/2 md:text-xl">ورود</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
