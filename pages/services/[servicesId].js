import { useRouter } from "next/router";

const servicesDetail = () => {
  const router = useRouter();
  const blogId = router.query.blogId;

  return (
    <>
      <div>servicesDetail {blogId}</div>
    </>
  );
};

export default servicesDetail;
