import { useRouter } from "next/router";

const ProjectsDetails = () => {
  const router = useRouter();
  const ProjectsId = router.query.ProjectsId;

  return (
    <>
      <div>ProjectsDetails {ProjectsId}</div>
    </>
  );
};

export default ProjectsDetails;
