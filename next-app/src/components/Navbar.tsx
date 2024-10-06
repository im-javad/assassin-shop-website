import Link from "next/link";
import { GiHoodedAssassin } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShopify } from "react-icons/fa6";

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="container mx-auto px-20">
        <div className="navbar-self grid grid-cols-12">
          <div className="logo col-span-1">
            <Link href={"/"}>
              <GiHoodedAssassin size={45} className="assassin-icon" />
            </Link>
          </div>
          <div className="items col-span-7">
            <ul>
              <li>خانه</li>
              <li>فروشگاه</li>
              <li>بلاگ</li>
              <li>کاربری</li>
              <li>ارتباط</li>
            </ul>
          </div>
          <div className="search-box col-span-3">
            <input type="text" placeholder="جست و جو" />
            <FaSearch
              size={28}
              className="search-icon"
            />
          </div>
          <div className="icons col-span-1">
            <div>
              <FaUser size={25} className="user-icon" />
              <FaShopify size={25} className="shop-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
