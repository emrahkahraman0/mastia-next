"use client";
import Image from "next/image";
import Link from "next/link";
import ProjectImage from "public/360x240.png";
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
    items: 3,
  },
  1400: {
    items: 3,
  },
  1600: {
    items: 3,
  },
  2000: {
    items: 3,
  },
};

function HomeProjects() {
  return (
    <>
      <div id="home_projects">
        <div className="container">
          <h6 className="title">recent proejcts</h6>
          <OwlCarousel
            className="home_projects"
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
            <div className="home_projects_item">
              <Image
                className="img_fluid"
                src={ProjectImage}
                alt="Slider İmage"
              />
            </div>
            {/*home_projects_item*/}
          </OwlCarousel>
          {/*home_projects*/}
        </div>
        {/*container*/}
      </div>
      {/*home_projects#*/}
    </>
  );
}

export default HomeProjects;
