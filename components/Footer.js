import Link from "next/link";

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="container">
          <div className="footer row row-cols-xl-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-2">
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
                  <Link href="/" Official Site></Link>
                </li>
                <li>
                  <Link href="/" CreativeMarket profile></Link>
                </li>
                <li>
                  <Link href="/" Materialzer page on CM></Link>
                </li>
                <li>
                  <Link href="/" Electronic WP Theme></Link>
                </li>
                <li>
                  <Link href="/" Was favvvv></Link>
                </li>
              </ul>
            </div>
            {/*footer_item*/}
            <div className="footer_item">
              <h6>News & Mediaout</h6>
              <ul>
                <li>
                  <Link href="/" Official Site></Link>
                </li>
                <li>
                  <Link href="/" CreativeMarket profile></Link>
                </li>
                <li>
                  <Link href="/" Materialzer page on CM></Link>
                </li>
                <li>
                  <Link href="/" Electronic WP Theme></Link>
                </li>
                <li>
                  <Link href="/" Was favvvv></Link>
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
          Made with  by Revolthemes.net All Rights Reserved
        </div>
        {/*ctext*/}
      </div>
      {/*copyright#*/}
    </>
  );
}

export default Footer;
