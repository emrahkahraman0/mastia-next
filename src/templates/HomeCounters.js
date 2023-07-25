"use client";
import CountUp from "react-countup";

function HomeCounters() {
  return (
    <>
      <div id="home_counters">
        <div className="container">
          <div className="home_counters row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
            <div className="home_counters_item">
              <CountUp end={100} duration={3} className="counter" />
              <h6 className="counter_heading">HAPPY CLIENTS</h6>
            </div>
            {/*home_counters_item*/}
            <div className="home_counters_item">
              <CountUp end={100} duration={3} className="counter" />
              <h6 className="counter_heading">HAPPY CLIENTS</h6>
            </div>
            {/*home_counters_item*/}
            <div className="home_counters_item">
              <CountUp end={100} duration={3} className="counter" />
              <h6 className="counter_heading">HAPPY CLIENTS</h6>
            </div>
            {/*home_counters_item*/}
            <div className="home_counters_item">
              <CountUp end={100} duration={3} className="counter" />
              <h6 className="counter_heading">HAPPY CLIENTS</h6>
            </div>
            {/*home_counters_item*/}
          </div>
          {/*home_counters*/}
        </div>
        {/*container*/}
      </div>
      {/*home_counters#*/}
    </>
  );
}

export default HomeCounters;
