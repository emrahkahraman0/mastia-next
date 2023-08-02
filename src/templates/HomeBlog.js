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
    items: 1,
  },
  768: {
    items: 1,
  },
  992: {
    items: 1,
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
              <Image className="img_fluid" src={BlogImage} alt="Slider İmage" />
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
