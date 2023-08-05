import Pages from "@/src/templates/Pages";
import Link from "next/link";
import Image from "next/image";
import SliderImage from "public/300x300.png";

function Services() {
  return (
    <>
      <Pages />
      <div id="services">
        <div className="container">
          <div className="services row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
            <div className="services_item">
              <Image
                className="img_fluid"
                src={SliderImage}
                alt="Services İmage"
              />
              <h6>
                <Link href="/services/services-1">services - 1</Link>
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                tenetur a reiciendis optio nobis magnam eveniet dignissimos
                asperiores, alias esse iste ab quis ad natus accusantium,
                similique unde doloribus. Soluta!
              </p>
              <Link className="read_more" href="/services/services-1">
                read more
              </Link>
            </div>
            {/*services_item*/}
            <div className="services_item">
              <Image
                className="img_fluid"
                src={SliderImage}
                alt="Services İmage"
              />
              <h6>
                <Link href="/services/services-2">services - 2</Link>
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                tenetur a reiciendis optio nobis magnam eveniet dignissimos
                asperiores, alias esse iste ab quis ad natus accusantium,
                similique unde doloribus. Soluta!
              </p>
              <Link className="read_more" href="/services/services-2">
                read more
              </Link>
            </div>
            {/*services_item*/}
            <div className="services_item">
              <Image
                className="img_fluid"
                src={SliderImage}
                alt="Services İmage"
              />
              <h6>
                <Link href="/services/services-3">services - 3</Link>
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                tenetur a reiciendis optio nobis magnam eveniet dignissimos
                asperiores, alias esse iste ab quis ad natus accusantium,
                similique unde doloribus. Soluta!
              </p>
              <Link className="read_more" href="/services/services-3">
                read more
              </Link>
            </div>
            {/*services_item*/}
            <div className="services_item">
              <Image
                className="img_fluid"
                src={SliderImage}
                alt="Services İmage"
              />
              <h6>
                <Link href="/services/services-4">services - 4</Link>
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                tenetur a reiciendis optio nobis magnam eveniet dignissimos
                asperiores, alias esse iste ab quis ad natus accusantium,
                similique unde doloribus. Soluta!
              </p>
              <Link className="read_more" href="/services/services-4">
                read more
              </Link>
            </div>
            {/*services_item*/}
            <div className="services_item">
              <Image
                className="img_fluid"
                src={SliderImage}
                alt="Services İmage"
              />
              <h6>
                <Link href="/services/services-5">services - 5</Link>
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                tenetur a reiciendis optio nobis magnam eveniet dignissimos
                asperiores, alias esse iste ab quis ad natus accusantium,
                similique unde doloribus. Soluta!
              </p>
              <Link className="read_more" href="/services/services-5">
                read more
              </Link>
            </div>
            {/*services_item*/}
          </div>
          {/*services*/}
        </div>
        {/*container*/}
      </div>
      {/*services#*/}
    </>
  );
}

export default Services;
