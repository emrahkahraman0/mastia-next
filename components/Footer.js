import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="container">
          <div className="footer row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
            <div className="footer_item">
              <h6>About Us</h6>
              <p>
                Li Europan lingues es membres del sam familie. Lor separat
                existentie es un myth. Por scientie, musica, sport etc, litot
                Europa usa li sam vocabular. Li lingues differe solmen
              </p>
            </div>
            {/*footer_item*/}
            <div className="footer_item">
              <h6>Related Links</h6>
              <ul>
                <li>
                  <Link href="/">Official Site</Link>
                </li>
                <li>
                  <Link href="/">CreativeMarket profile</Link>
                </li>
                <li>
                  <Link href="/">Materialzer page on CM</Link>
                </li>
                <li>
                  <Link href="/">Electronic WP Theme</Link>
                </li>
                <li>
                  <Link href="/">Was favvvv</Link>
                </li>
              </ul>
            </div>
            {/*footer_item*/}
            <div className="footer_item">
              <h6>News & Mediaout</h6>
              <ul>
                <li>
                  <Link href="/">Official Site</Link>
                </li>
                <li>
                  <Link href="/">CreativeMarket profile</Link>
                </li>
                <li>
                  <Link href="/">Materialzer page on CM</Link>
                </li>
                <li>
                  <Link href="/">Electronic WP Theme</Link>
                </li>
                <li>
                  <Link href="/">Was favvvv</Link>
                </li>
              </ul>
            </div>
            {/*footer_item*/}
            <div className="footer_item">
              <h6>Get in touch</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="icon_desc">
                <div className="icon_desc_item">
                  <FaMapMarkerAlt className="icon" />
                  <h5>84 Street, City, State 24813</h5>
                </div>
                {/*icon_desc_item*/}
                <div className="icon_desc_item">
                  <BsFillTelephoneFill className="icon" />
                  <Link href="tel:+00(123)4567890">+00 (123) 456 78 90</Link>
                </div>
                {/*icon_desc_item*/}
                <div className="icon_desc_item">
                  <FaRegEnvelope className="icon" />
                  <Link href="mailto:info@yourcompany.com">
                    info@yourcompany.com
                  </Link>
                </div>
                {/*icon_desc_item*/}
              </div>
              {/*icon_desc*/}
            </div>
            {/*footer_item*/}
          </div>
          {/*footer*/}
        </div>
        {/*container*/}
      </div>
      {/*footer#*/}

      <div id="copyright">
        <div className="container text">
          Made with <AiFillHeart className="heart" /> by Revolthemes.net All
          Rights Reserved
        </div>
        {/*ctext*/}
      </div>
      {/*copyright#*/}
    </>
  );
}

export default Footer;
