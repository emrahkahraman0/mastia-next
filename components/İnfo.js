import Link from "next/link";

function İnfo() {
  return (
    <>
      <div id="informations">
        <div className="container">
          <div className="informations">
            <div className="informations_text">
              GO AHEAD AND FIND OUT HOW WE CAN HELP YOU!
            </div>
            {/*informations_text*/}
            <div className="informations_btn">
              <button>
                <Link href="/">GET IN TOUCH</Link>
              </button>
            </div>
            {/*informations_btn*/}
          </div>
          {/*informations*/}
        </div>
        {/*container*/}
      </div>
      {/*informations#*/}
    </>
  );
}

export default İnfo;
