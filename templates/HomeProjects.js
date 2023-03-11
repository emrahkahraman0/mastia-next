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
    items: 3,
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

import Projectİmg from "@/public/360x240.png";

function HomeProjects() {
  return (
    <>
      <div id="home_projects">
        <div className="container">
          <h6 className="title">Recent projects</h6>
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
                src={Projectİmg}
                alt="Home Project"
              />
              <Link href="/Projects" className="project_caption">
                <FaSearchPlus className="icon" />
              </Link>
              {/*project_caption*/}
            </div>
            {/*home_projects_item*/}
            <div className="home_projects_item">
              <Image
                className="img_fluid"
                src={Projectİmg}
                alt="Home Project"
              />
              <Link href="/Projects" className="project_caption">
                <FaSearchPlus className="icon" />
              </Link>
              {/*project_caption*/}
            </div>
            {/*home_projects_item*/}
            <div className="home_projects_item">
              <Image
                className="img_fluid"
                src={Projectİmg}
                alt="Home Project"
              />
              <Link href="/Projects" className="project_caption">
                <FaSearchPlus className="icon" />
              </Link>
              {/*project_caption*/}
            </div>
            {/*home_projects_item*/}
            <div className="home_projects_item">
              <Image
                className="img_fluid"
                src={Projectİmg}
                alt="Home Project"
              />
              <Link href="/Projects" className="project_caption">
                <FaSearchPlus className="icon" />
              </Link>
              {/*project_caption*/}
            </div>
            {/*home_projects_item*/}
          </OwlCarousel>
        </div>
        {/*container*/}
      </div>
      {/*home_projects#*/}
    </>
  );
}

export default HomeProjects;
