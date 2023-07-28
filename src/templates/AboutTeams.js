import Image from "next/image";
import Teamİmg from "@/public/265x355.png";

function AboutTeams() {
  return (
    <>
      <div id="about_team">
        <div className="container">
          <h6 className="title">OUR CRAZY TEAM</h6>
          <div className="about_team row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
            <div className="about_team_item">
              <Image className="img_fluid" src={Teamİmg} alt="Team İmage" />
              <h5>Shila Khondoker</h5>
              <h6>Chief technical officer</h6>
            </div>
            {/*about_team_item*/}
            <div className="about_team_item">
              <Image className="img_fluid" src={Teamİmg} alt="Team İmage" />
              <h5>Shila Khondoker</h5>
              <h6>Chief technical officer</h6>
            </div>
            {/*about_team_item*/}
            <div className="about_team_item">
              <Image className="img_fluid" src={Teamİmg} alt="Team İmage" />
              <h5>Shila Khondoker</h5>
              <h6>Chief technical officer</h6>
            </div>
            {/*about_team_item*/}
            <div className="about_team_item">
              <Image className="img_fluid" src={Teamİmg} alt="Team İmage" />
              <h5>Shila Khondoker</h5>
              <h6>Chief technical officer</h6>
            </div>
            {/*about_team_item*/}
          </div>
          {/*about_team*/}
        </div>
        {/*container*/}
      </div>
      {/*about_team#*/}
    </>
  );
}

export default AboutTeams;
