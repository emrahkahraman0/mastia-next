import Pages from "@/src/templates/Pages";
import Image from "next/image";
import Blogİmg from "public/400x400.png";

//Async
async function getPost(id) {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.json();
  if (!response.ok) {
    throw new Error("failed to fetch posts");
  }
}

async function BlogDetail({ params: { id } }) {
  const post = await getPost(id);

  return (
    <>
      <Pages />
      <div id="blog_detail">
        <div className="container">
          <div className="blog_detail row row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-2">
            <div className="blog_detail_image">
              <Image className="img_fluid" src={Blogİmg} alt="Blog İmage" />
            </div>
            {/*blog_detail_image*/}
            <div className="blog_detail_text">
              <h6>{post.title}</h6>
              <p>{post.body}</p>
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
