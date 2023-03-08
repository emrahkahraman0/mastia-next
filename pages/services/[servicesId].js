import { useRouter } from "next/router";

const ServicesDetails = () => {
  const router = useRouter();
  const ServicesId = router.query.ServicesId;

  return (
    <>
      <div>ServicesDetails {ServicesId}</div>
    </>
  );
};

export default ServicesDetails;
