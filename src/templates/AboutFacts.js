import { AiOutlineLike } from "react-icons/ai";
import { MdGroups } from "react-icons/md";

function AboutFacts() {
  return (
    <>
      <div id="about_facts">
        <div className="container">
          <div className="about_facts row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
            <div className="about_facts_item">
              <div className="icon">
                <AiOutlineLike />
              </div>
              <h6>WITHIN BUDGET</h6>
              <p>
                Work with us involve a carefully planned series of steps,
                centered around a schedule we stick daily communication.
              </p>
            </div>
            {/*about_facts_item*/}
            <div className="about_facts_item">
              <div className="icon">
                <MdGroups />
              </div>
              <h6>WITHIN BUDGET</h6>
              <p>
                Work with us involve a carefully planned series of steps,
                centered around a schedule we stick daily communication.
              </p>
            </div>
            {/*about_facts_item*/}
            <div className="about_facts_item">
              <div className="icon">
                <AiOutlineLike />
              </div>
              <h6>WITHIN BUDGET</h6>
              <p>
                Work with us involve a carefully planned series of steps,
                centered around a schedule we stick daily communication.
              </p>
            </div>
            {/*about_facts_item*/}
          </div>
          {/*about_facts*/}
        </div>
        {/*container*/}
      </div>
      {/*about_facts#*/}
    </>
  );
}

export default AboutFacts;
