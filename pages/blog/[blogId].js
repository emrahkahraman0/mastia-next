import { useRouter } from "next/router";

const blogDetails = () => {
  const router = useRouter();
  const blogId = router.query.blogId;

  return (
    <>
      <div>blogDetails {blogId}</div>
    </>
  );
};

export default blogDetails;
