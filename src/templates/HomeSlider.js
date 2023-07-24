"use client";
import Image from "next/image";
import Link from 'next/link'
import SliderImage from "public/1920x750.png";
import dynamic from "next/dynamic";
import React from "react";

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
        items: 1,
    },
    1400: {
        items: 1,
    },
    1600: {
        items: 1,
    },
    2000: {
        items: 1,
    },
};

function HomeSlider() {

  return (

    <>

        <div id="home_slider">

            <OwlCarousel
                className="home_slider"
                loop
                items={1}
                margin={0}
                nav={true}
                dots={false}
                autoplay={true}
                autoplayHoverPause={true}
                autoplayTimeout={5000}
                responsive={responsive}
            >

                <div className="home_slider_item">
                    <Image
                        className="img_fluid"
                        src={SliderImage}
                        alt="Slider İmage"
                    />
                    <div className="slider_caption">
                        <h6>We care about your business </h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum consectetur egestas. Nulla nisi nisi, rutrum vitae nunc non, bibendum euismod nulla</p>
                        <button>
                            <Link href="/">About US</Link>
                        </button>
                    </div>
                    {/*slider_caption*/}
                </div>
                {/*home_slider_item*/}
                <div className="home_slider_item">
                    <Image
                        className="img_fluid"
                        src={SliderImage}
                        alt="Slider İmage"
                    />
                    <div className="slider_caption">
                        <h6>We care about your business </h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum consectetur egestas. Nulla nisi nisi, rutrum vitae nunc non, bibendum euismod nulla</p>
                        <button>
                            <Link href="/">About US</Link>
                        </button>
                    </div>
                    {/*slider_caption*/}
                </div>
                {/*home_slider_item*/}
                <div className="home_slider_item">
                    <Image
                        className="img_fluid"
                        src={SliderImage}
                        alt="Slider İmage"
                    />
                    <div className="slider_caption">
                        <h6>We care about your business </h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum consectetur egestas. Nulla nisi nisi, rutrum vitae nunc non, bibendum euismod nulla</p>
                        <button>
                            <Link href="/">About US</Link>
                        </button>
                    </div>
                    {/*slider_caption*/}
                </div>
                {/*home_slider_item*/}

            </OwlCarousel>
            {/*home_slider*/}

        </div>
        {/*home_slider#*/}

    </>

  );

}

export default HomeSlider;