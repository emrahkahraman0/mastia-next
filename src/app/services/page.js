import Pages from "@/src/templates/Pages";
import Image from "next/image";
import Link from "next/link";
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
                <Link href="/">services - 1</Link>
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                tenetur a reiciendis optio nobis magnam eveniet dignissimos
                asperiores, alias esse iste ab quis ad natus accusantium,
                similique unde doloribus. Soluta!
              </p>
              <button>
                <Link href="/">read more</Link>
              </button>
            </div>
            {/*services_item*/}
            <div className="services_item">
              <Image
                className="img_fluid"
                src={SliderImage}
                alt="Services İmage"
              />
              <h6>
                <Link href="/">services - 1</Link>
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                tenetur a reiciendis optio nobis magnam eveniet dignissimos
                asperiores, alias esse iste ab quis ad natus accusantium,
                similique unde doloribus. Soluta!
              </p>
              <button>
                <Link href="/">read more</Link>
              </button>
            </div>
            {/*services_item*/}
            <div className="services_item">
              <Image
                className="img_fluid"
                src={SliderImage}
                alt="Services İmage"
              />
              <h6>
                <Link href="/">services - 1</Link>
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                tenetur a reiciendis optio nobis magnam eveniet dignissimos
                asperiores, alias esse iste ab quis ad natus accusantium,
                similique unde doloribus. Soluta!
              </p>
              <button>
                <Link href="/">read more</Link>
              </button>
            </div>
            {/*services_item*/}
            <div className="services_item">
              <Image
                className="img_fluid"
                src={SliderImage}
                alt="Services İmage"
              />
              <h6>
                <Link href="/">services - 1</Link>
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                tenetur a reiciendis optio nobis magnam eveniet dignissimos
                asperiores, alias esse iste ab quis ad natus accusantium,
                similique unde doloribus. Soluta!
              </p>
              <button>
                <Link href="/">read more</Link>
              </button>
            </div>
            {/*services_item*/}
            <div className="services_item">
              <Image
                className="img_fluid"
                src={SliderImage}
                alt="Services İmage"
              />
              <h6>
                <Link href="/">services - 1</Link>
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                tenetur a reiciendis optio nobis magnam eveniet dignissimos
                asperiores, alias esse iste ab quis ad natus accusantium,
                similique unde doloribus. Soluta!
              </p>
              <button>
                <Link href="/">read more</Link>
              </button>
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
