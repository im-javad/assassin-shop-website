import { FaUserTie } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdSubject } from "react-icons/md";
import { BiSolidMessageSquareEdit } from "react-icons/bi";

const Form = () => {
  return (
    <div className="contact-us-form">
      <div className="header mb-7 text-center">
        <h1 className="text-2xl">جهت ارتباط گیری با ما</h1>
      </div>
      <div className="form grid grid-cols-1 md:grid-cols-2 gap-x-7">
        <div className="input-group mb-4 md:mb-6">
          <FaUserTie className="input-icon top-[12px]" size={25} />
          <input type="text" placeholder="نام" />
        </div>
        <div className="input-group mb-4 md:mb-6">
          <FaUserTie className="input-icon top-[12px]" size={25} />
          <input type="text" placeholder="نام خانوادگی" />
        </div>
        <div className="input-group mb-4 md:mb-6">
          <MdEmail className="input-icon top-[12px]" size={25} />
          <input type="email" placeholder="ایمیل" />
        </div>
        <div className="input-group mb-4 md:mb-6">
          <MdSubject className="input-icon top-[13px]" size={25} />
          <input type="text" placeholder="موضوع پیام" />
        </div>
        <div className="input-group mb-4 md:mb-6 md:col-span-2">
          <BiSolidMessageSquareEdit
            className="input-icon top-[12px]"
            size={25}
          />
          <textarea placeholder="پیام شما"></textarea>
        </div>
        <div className="send-btn md:col-span-2 flex justify-center">
          <button className="w-full md:w-1/2 py-[9px] rounded-md hover:bg-app_color_brown transition-all duration-300 ease-in bg-app_color_gray text-app_color_white">
            ارسال پیام
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
