"use client";
import dynamic from "next/dynamic";
import Clientİmg from "@/public/140x140.png";
import Image from "next/image";

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

function AboutClients() {
  return (
    <>
      <div id="about_clients">
        <div className="container">
          <h6 className="title">What Our Clients say</h6>
          <OwlCarousel
            className="about_clients"
            loop
            items={1}
            margin={0}
            nav={false}
            dots={true}
            autoplay={true}
            autoplayHoverPause={true}
            autoplayTimeout={5000}
            responsive={responsive}
          >
            <div className="about_clients_item">
              <div className="clients_image">
                <Image className="img_fluid" src={Clientİmg} alt="Clients" />
              </div>
              <div className="clients_text">
                <p>
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exerci
                </p>
                <h4>Hary Sunio</h4>
                <h5>CEO</h5>
              </div>
            </div>
            {/*about_clients_item*/}
            <div className="about_clients_item">
              <div className="clients_image">
                <Image className="img_fluid" src={Clientİmg} alt="Clients" />
              </div>
              <div className="clients_text">
                <p>
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exerci
                </p>
                <h4>Hary Sunio</h4>
                <h5>CEO</h5>
              </div>
            </div>
            {/*about_clients_item*/}
          </OwlCarousel>
        </div>
        {/*container*/}
      </div>
      {/*about_clients#*/}
    </>
  );
}

export default AboutClients;
