import Pages from "@/src/templates/Pages";
import Link from "next/link";
import Image from "next/image";
import Blogİmg from "public/400x400.png";

function Blog() {
  return (
    <>
      <Pages />
      <div id="blog">
        <div className="container">
          <div className="blog row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
            <div className="blog_item">
              <Image className="img_fluid" src={Blogİmg} alt="Blog İmage" />
              <h6>
                <Link href="/">Blog One</Link>
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio nobis neque, corporis minima nisi, nostrum, impedit
                ullam laboriosam laborum deserunt quo doloribus officia
                voluptatem dignissimos exercitationem in possimus maiores
                incidunt.
              </p>
              <Link className="read_more" href="/">
                read more
              </Link>
            </div>
            {/*blog_item*/}
          </div>
          {/*blog*/}
        </div>
        {/*container*/}
      </div>
      {/*blog#*/}
    </>
  );
}

export default Blog;
