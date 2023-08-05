import Pages from "@/src/templates/Pages";
import Image from "next/image";
import SliderImage from "public/300x300.png";

function ServicesDetail({ params }) {
  return (
    <>
      <Pages />
      <div id="services_details">
        <div className="container">
          <div className="services_details align_items row row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
            <div className="services_details_image">
              <Image
                className="img_fluid"
                src={SliderImage}
                alt="Services İmage"
              />
            </div>
            {/*services_details_image*/}
            <div className="services_details_text">
              <h6>{params.slug}</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                tenetur a reiciendis optio nobis magnam eveniet dignissimos
                asperiores, alias esse iste ab quis ad natus accusantium,
                similique unde doloribus. Soluta!
              </p>
            </div>
            {/*services_details_text*/}
          </div>
          {/*services_details*/}
        </div>
        {/*container*/}
      </div>
      {/*services_details3*/}
    </>
  );
}

export default ServicesDetail;
