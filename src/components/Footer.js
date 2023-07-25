import Link from "next/link";
import { FiMapPin } from "react-icons/fi";
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
                  <Link href="/">Materialzer page on CM</Link>
                </li>
                <li>
                  <Link href="/">Was favvvv</Link>
                </li>
              </ul>
            </div>
            {/*footer_item*/}
            <div className="footer_item">
              <h6>News & Media</h6>
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
                  <Link href="/">Materialzer page on CM</Link>
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
              <div className="desc">
                <div className="desc_item">
                  <div className="icon">
                    <FiMapPin />
                  </div>
                  <div className="text">
                    <p>84 Street, City, State 24813</p>
                  </div>
                </div>
                {/*desc_item*/}
                <div className="desc_item">
                  <div className="icon">
                    <BsFillTelephoneFill />
                  </div>
                  <div className="text">
                    <p>
                      <Link href="tel:+00 (123) 456 78 90">
                        +00 (123) 456 78 90
                      </Link>
                    </p>
                  </div>
                </div>
                {/*desc_item*/}
                <div className="desc_item">
                  <div className="icon">
                    <FaRegEnvelope />
                  </div>
                  <div className="text">
                    <p>
                      <Link href="mailto:info@yourcompany.com">
                        info@yourcompany.com
                      </Link>
                    </p>
                  </div>
                </div>
                {/*desc_item*/}
              </div>
              {/*desc*/}
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
          Made with <AiFillHeart className="icon" /> by Revolthemes.net All
          Rights Reserved
        </div>
      </div>
    </>
  );
}

export default Footer;
