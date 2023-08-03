"use client";
import Image from "next/image";
import Link from "next/link";
import BlogImage from "public/225x210.png";
import dynamic from "next/dynamic";

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
    items: 2,
  },
  1400: {
    items: 2,
  },
  1600: {
    items: 2,
  },
  2000: {
    items: 2,
  },
};

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
              <div className="blog_image">
                <Image className="img_fluid" src={BlogImage} alt="Blog İmage" />
              </div>
              <div className="blog_desc">
                <div className="date">23 oct 2015</div>
                <p>
                  Dummy text is text that is used in theublish industry or by
                  web designers to occupy the space which will later be
                </p>
                <Link className="read_more" href="/">
                  read more
                </Link>
              </div>
            </div>
            {/*home_blog_item*/}
            <div className="home_blog_item">
              <div className="blog_image">
                <Image className="img_fluid" src={BlogImage} alt="Blog İmage" />
              </div>
              <div className="blog_desc">
                <div className="date">23 oct 2015</div>
                <p>
                  Dummy text is text that is used in theublish industry or by
                  web designers to occupy the space which will later be
                </p>
                <Link className="read_more" href="/">
                  read more
                </Link>
              </div>
            </div>
            {/*home_blog_item*/}
            <div className="home_blog_item">
              <div className="blog_image">
                <Image className="img_fluid" src={BlogImage} alt="Blog İmage" />
              </div>
              <div className="blog_desc">
                <div className="date">23 oct 2015</div>
                <p>
                  Dummy text is text that is used in theublish industry or by
                  web designers to occupy the space which will later be
                </p>
                <Link className="read_more" href="/">
                  read more
                </Link>
              </div>
            </div>
            {/*home_blog_item*/}
          </OwlCarousel>
          {/*home_blog*/}
        </div>
        {/*container*/}
      </div>
      {/*home_blog#*/}
    </>
  );
}

export default HomeBlog;
