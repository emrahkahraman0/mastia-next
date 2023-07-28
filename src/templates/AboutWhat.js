import Image from "next/image";
import Aboutİmg from "@/public/555x555.png";
import Link from "next/link";

function AboutWhat() {
  return (
    <>
      <div id="about_info">
        <div className="container">
          <div className="about_info align_items row row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-sm-1">
            <div className="about_info_image">
              <Image className="img_fluid" src={Aboutİmg} alt="About İnfo" />
            </div>
            {/*about_info_image*/}
            <div className="about_info_text">
              <h6>who WE ARE?</h6>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid
              </p>
              <p>
                Eacommodi consequatur? Quis autem vel eum iure reprehenderit qui
                in ea voluptate velit esse quam nihil molestiae consequatur, vel
                illum qui dolorem eum fugiat quo voluptas nulla pariatur? At
                vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.{" "}
              </p>
              <button>
                <Link href="/">OUR SERVICES</Link>
              </button>
            </div>
            {/*about_info_text*/}
          </div>
          {/*about_info*/}
        </div>
        {/*container*/}
      </div>
      {/*about_info#*/}
    </>
  );
}

export default AboutWhat;
