import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "@/public/logo.png";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { RxEnvelopeClosed } from "react-icons/rx";

function Header() {
  return (
    <>
      <div id="top_header">
        <div className="container">
          <div className="top_header">
            <ul className="top_header_left">
              <li>
                <Link href="/">
                  <ImFacebook />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <BsTwitter />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <AiOutlineGooglePlus />
                </Link>
              </li>
            </ul>
            {/*top_header_left*/}
            <div className="top_header_right">
              <div className="top_header_right_item">
                <div className="icon">
                  <BiTimeFive />
                </div>
                <div className="text">
                  <h6>Mon - Sat: 7:00 - 17:00</h6>
                </div>
              </div>
              {/*top_header_right_item*/}
              <div className="top_header_right_item">
                <div className="icon">
                  <FaPhoneAlt />
                </div>
                <div className="text">
                  <Link href="/">+ 386 40 111 5555</Link>
                </div>
              </div>
              {/*top_header_right_item*/}
              <div className="top_header_right_item">
                <div className="icon">
                  <RxEnvelopeClosed />
                </div>
                <div className="text">
                  <Link href="">info@yourdomain.com</Link>
                </div>
              </div>
              {/*top_header_right_item*/}
            </div>
            {/*top_header_right*/}
          </div>
          {/*top_header*/}
        </div>
        {/*container*/}
      </div>
      {/*top_header#*/}

      <div id="header">
        <div className="container">
          <div className="header">
            <div className="header_logo">
              <Link href="/">
                <Image
                  className="img_fluid"
                  src={HeaderLogo}
                  alt="Header Logo"
                />
              </Link>
            </div>
            {/*header_logo*/}
            <ul className="header_menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Services</Link>
                <ul className="dropdown">
                  <li>
                    <Link href="/">Services - 1</Link>
                  </li>
                  <li>
                    <Link href="/">Services - 2</Link>
                  </li>
                  <li>
                    <Link href="/">Services - 3</Link>
                  </li>
                  <li>
                    <Link href="/">Services - 4</Link>
                  </li>
                </ul>
                {/*dropdown*/}
              </li>
              <li>
                <Link href="/">Projects</Link>
                <ul className="dropdown">
                  <li>
                    <Link href="/">Projects - 1</Link>
                  </li>
                  <li>
                    <Link href="/">Projects - 2</Link>
                  </li>
                  <li>
                    <Link href="/">Projects - 3</Link>
                  </li>
                  <li>
                    <Link href="/">Projects - 4</Link>
                  </li>
                </ul>
                {/*dropdown*/}
              </li>
              <li>
                <Link href="/">Blog</Link>
                <ul className="dropdown">
                  <li>
                    <Link href="/">Blog - 1</Link>
                  </li>
                  <li>
                    <Link href="/">Blog - 2</Link>
                  </li>
                  <li>
                    <Link href="/">Blog - 3</Link>
                  </li>
                  <li>
                    <Link href="/">Blog - 4</Link>
                  </li>
                </ul>
                {/*dropdown*/}
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
            {/*header_menu*/}
            <div className="header_hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            {/*header_hamburger*/}
          </div>
          {/*header*/}
        </div>
        {/*container*/}
      </div>
      {/*header#*/}
    </>
  );
}

export default Header;
