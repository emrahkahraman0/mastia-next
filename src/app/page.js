import HomeBlog from "../templates/HomeBlog";
import HomeCounters from "../templates/HomeCounters";
import HomeProjects from "../templates/HomeProjects";
import HomeServices from "../templates/HomeServices";
import HomeSlider from "../templates/HomeSlider";

function Home() {
  return (
    <>
      <HomeSlider />
      <HomeServices />
      <HomeProjects />
      <HomeCounters />
      <HomeBlog />
    </>
  );
}

export default Home;
