import * as React from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";

const Form = () => {
  return (
    <div className="login-form col-span-12 lg:col-span-6">
      <div className="form-header">
        <h1 className="text-2xl mb-2 md:text-4xl md:mb-3">ورود کاربر</h1>
        <span>لطفا فیلد های ایمیل و رمز را پر کنید</span>
      </div>
      <div className="form mt-7 md:mt-14">
        <div className="input-group mb-4 md:mb-6">
          <MdEmail className="input-icon top-[12px]" size={25} />
          <input type="email" placeholder="ایمیل" />
        </div>
        <div className="input-group">
          <TbPasswordFingerprint className="input-icon top-[10px]" size={25} />
          <input type="password" placeholder="رمز" />
        </div>
        <div className="remember-me mb-2 mt-5 md:mb-3 md:mt-7">
          <input
            type="checkbox"
            id="remember-me-box"
            className="checkbox-input"
          />
          <label htmlFor="remember-me-box">مرا به خاطر بسپار</label>
        </div>
        <div className="form-another-details mb-7 md:mb-9">
          <div className="create-account mb-2">
            <span>
              اکانت ندارید؟
              <Link href={"/guest/register"} className="register-link">
                ساخت اکانت
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
