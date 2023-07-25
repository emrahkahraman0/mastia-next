import Link from "next/link";

function İnfo() {
  return (
    <>
      <div id="info">
        <div className="container">
          <div className="info">
            <div className="info_text">
              <h6>GO AHEAD AND FIND OUT HOW WE CAN HELP YOU!</h6>
            </div>
            {/*info_text*/}
            <div className="info_btn">
              <button>
                <Link href="/">GET IN TOUCH</Link>
              </button>
            </div>
            {/*info_btn*/}
          </div>
          {/*info*/}
        </div>
        {/*container*/}
      </div>
      {/*info#*/}
    </>
  );
}

export default İnfo;
