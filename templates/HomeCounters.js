import CountUp from "react-countup";

function HomeCounters() {
  return (
    <>
      <div id="home_counters">
        <div className="container">
          <div className="home_counters row row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
            <div className="home_counters_item">
              <CountUp end={100} className="counter" />
              <h6>HAPPY CLIENTS</h6>
            </div>
            {/*home_couners_item*/}
            <div className="home_counters_item">
              <CountUp end={100} className="counter" />
              <h6>HAPPY CLIENTS</h6>
            </div>
            {/*home_couners_item*/}
            <div className="home_counters_item">
              <CountUp end={100} className="counter" />
              <h6>HAPPY CLIENTS</h6>
            </div>
            {/*home_couners_item*/}
            <div className="home_counters_item">
              <CountUp end={100} className="counter" />
              <h6>HAPPY CLIENTS</h6>
            </div>
            {/*home_couners_item*/}
          </div>
          {/*home_couners*/}
        </div>
        {/*container*/}
      </div>
      {/*home_couners#*/}
    </>
  );
}

export default HomeCounters;
