import React from "react";
import Pages from "@/src/templates/Pages";

function Blog() {
  return (
    <>
      <Pages />
      <div id="blog">
        <div className="container">
          <div className="blog row row-cols-xl-1 row-cols-lg-1 row-cols-md-1 row-cols-sm-1">
            <div className="blog_item"></div>
            {/*blog_posts*/}
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
