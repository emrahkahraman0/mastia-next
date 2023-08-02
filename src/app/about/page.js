import AboutClients from "@/src/templates/AboutClients";
import AboutFacts from "@/src/templates/AboutFacts";
import AboutTeams from "@/src/templates/AboutTeams";
import AboutWhat from "@/src/templates/AboutWhat";
import AboutWhy from "@/src/templates/AboutWhy";
import Pages from "@/src/templates/Pages";

function About() {
  return (
    <>
      <Pages />
      <AboutWhat />
      <AboutFacts />
      <AboutWhy />
      <AboutClients />
      <AboutTeams />
    </>
  );
}

export default About;
