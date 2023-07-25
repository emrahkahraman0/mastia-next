import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { LiaTwitter } from "react-icons/lia";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { BiTime } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";

function TopBar() {

  return (

    <>

      <div id="topbar">

        <div className="container">

          <div className="topbar">

            <ul className="topbar_left">
              <li>
                <Link href="/">
                  <FaFacebookF className="icon" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <LiaTwitter className="icon" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaLinkedinIn className="icon" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <TiSocialGooglePlus className="icon" />
                </Link>
              </li>
            </ul>
            {/*topbar_left*/}

            <div className="topbar_right">
              <div className="topbar_right_item">
                <div className="icon">
                  <BiTime />
                </div>
                <div className="text">Mon - Sat: 7:00 - 17:00</div>
              </div>
              {/*topbar_right_item*/}
              <div className="topbar_right_item">
                <div className="icon">
                  <BsFillTelephoneFill />
                </div>
                <div className="text">
                  <Link href="tel:+ 386 40 111 5555">+ 386 40 111 5555</Link>
                </div>
              </div>
              {/*topbar_right_item*/}
              <div className="topbar_right_item">
                <div className="icon">
                  <BsEnvelope />
                </div>
                <div className="text">
                  <Link href="mailto:info@yourdomain.com">info@yourdomain.com</Link>
                </div>
              </div>
              {/*topbar_right_item*/}
            </div>
            {/*topbar_right*/}

          </div>
          {/*topbar*/}

        </div>
        {/*container*/}

      </div>
      {/*topbar#*/}

    </>

  );

}

export default TopBar;