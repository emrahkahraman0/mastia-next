import Pages from "@/src/templates/Pages";
import Image from "next/image";
import Blogİmg from "public/400x400.png";

function BlogDetail() {
  return (
    <>
      <Pages />
      <div id="blog_detail">
        <div className="container">
          <div className="blog_detail align_items row row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
            <div className="blog_detail_image">
              <Image className="img_fluid" src={Blogİmg} alt="Blog İmage" />
            </div>
            {/*blog_detail_image*/}
            <div className="blog_detail_text">
              <h6>blog detail one</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda consequatur quaerat aut quas ipsa placeat doloremque
                architecto praesentium maxime nesciunt. Ullam quia maiores
                voluptatibus accusamus, expedita perspiciatis earum repellendus
                error.
              </p>
            </div>
            {/*blog_detail_text">
              <Image className="img_fluid*/}
          </div>
          {/*blog_detail*/}
        </div>
        {/*container*/}
      </div>
      {/*blog_detail#*/}
    </>
  );
}

export default BlogDetail;
