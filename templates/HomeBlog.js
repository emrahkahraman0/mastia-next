import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaSearchPlus } from "react-icons/fa";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");

  require("owl.carousel/dist/assets/owl.carousel.min.css");
  require("owl.carousel");
}

const responsive = {
  0: {
    items: 1,
  },
  575: {
    items: 2,
  },
  768: {
    items: 2,
  },
  992: {
    items: 2,
  },
  1200: {
    items: 3,
  },
  1400: {
    items: 3,
  },
  1600: {
    items: 3,
  },
};

import Blogİmg from "@/public/225x210.png";

function HomeBlog() {
  return (
    <>
      <div id="home_blog">
        <div className="container">
          <h6 className="title">from blog</h6>
          <OwlCarousel
            className="home_blog"
            loop
            items={1}
            margin={30}
            nav={true}
            dots={false}
            autoplay={true}
            autoplayHoverPause={true}
            autoplayTimeout={5000}
            responsive={responsive}
          >
            <div className="home_blog_item">
              <Image className="img_fluid" src={Blogİmg} alt="Slider" />
              <div className="blog_text">
                <div className="date">23 oct 2015</div>
                <p>
                  Dummy text is text that is used in theublish industry or by
                  web designers to occupy the space which will later be{" "}
                </p>
                <Link href="/Blog" className="read_more">
                  read more
                </Link>
              </div>
            </div>
            {/*home_blog_item*/}
            <div className="home_blog_item">
              <Image className="img_fluid" src={Blogİmg} alt="Slider" />
              <div className="blog_text">
                <div className="date">23 oct 2015</div>
                <p>
                  Dummy text is text that is used in theublish industry or by
                  web designers to occupy the space which will later be{" "}
                </p>
                <Link href="/Blog" className="read_more">
                  read more
                </Link>
              </div>
            </div>
            {/*home_blog_item*/}
            <div className="home_blog_item">
              <Image className="img_fluid" src={Blogİmg} alt="Slider" />
              <div className="blog_text">
                <div className="date">23 oct 2015</div>
                <p>
                  Dummy text is text that is used in theublish industry or by
                  web designers to occupy the space which will later be{" "}
                </p>
                <Link href="/Blog" className="read_more">
                  read more
                </Link>
              </div>
            </div>
            {/*home_blog_item*/}
            <div className="home_blog_item">
              <Image className="img_fluid" src={Blogİmg} alt="Slider" />
              <div className="blog_text">
                <div className="date">23 oct 2015</div>
                <p>
                  Dummy text is text that is used in theublish industry or by
                  web designers to occupy the space which will later be{" "}
                </p>
                <Link href="/Blog" className="read_more">
                  read more
                </Link>
              </div>
            </div>
            {/*home_blog_item*/}
          </OwlCarousel>
        </div>
        {/*container*/}
      </div>
      {/*home_blog#*/}
    </>
  );
}

export default HomeBlog;
