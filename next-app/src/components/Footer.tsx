import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container mx-auto px-20">
        <div className="footer-self grid grid-cols-12">
          <div className="contact-list col-span-4">
            <strong>ارتباط با ما</strong>
            <span>تهران, خیابان انقلاب , پایین تر از آزادی , کوچه نصاب</span>
            <span>info@assassinbookmail.com</span>
            <span>021-6626-9832</span>
            <div className="contact-links">
              <FaFacebookF className="contact-icon" />
              <FaTelegramPlane className="contact-icon" />
              <FaInstagram className="contact-icon" />
              <FaSkype className="contact-icon" />
            </div>
          </div>
          <div className="main-page-list col-span-2">
            <strong>صفحات دیگر</strong>
            <div className="pages">
              <ul>
                <li>صفحه یک</li>
                <li>صفحه دو</li>
                <li>صفحه سه</li>
                <li>صفحه چهار</li>
                <li>صفحه پنج</li>
              </ul>
            </div>
          </div>
          <div className="utility-page-list col-span-2">
            <strong>اهراز هویت</strong>
            <div className="pages">
              <ul>
                <li>صفحه یک</li>
                <li>صفحه دو</li>
                <li>صفحه سه</li>
                <li>صفحه چهار</li>
                <li>صفحه پنج</li>
              </ul>
            </div>
          </div>
          <div className="best-sellers-list col-span-4">
            <strong>پر فروش ها</strong>
            <div className="items">
              <div>آیتم یک</div>
              <div>آیتم دو</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
