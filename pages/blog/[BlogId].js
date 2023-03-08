import { useRouter } from "next/router";

const BlogDetails = () => {
  const router = useRouter();
  const BlogId = router.query.BlogId;

  return (
    <>
      <div>BlogDetails {BlogId}</div>
    </>
  );
};

export default BlogDetails;
