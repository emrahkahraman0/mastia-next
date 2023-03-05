import { useRouter } from "next/router";

const projectsDetail = () => {
  const router = useRouter();
  const blogId = router.query.blogId;

  return (
    <>
      <div>projectsDetail {projectsId}</div>
    </>
  );
};

export default projectsDetail;
