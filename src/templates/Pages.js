"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Pages() {
  const pathname = usePathname();
  return (
    <>
      <div id="page">
        <div className="container">
          <div className="page">
            <div className="page_heading">
              <h6>{pathname}</h6>
            </div>
            {/*page_heading*/}
            <ul className="page_links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">{pathname}</Link>
              </li>
            </ul>
            {/*page_links*/}
          </div>
          {/*page*/}
        </div>
        {/*container*/}
      </div>
      {/*page#*/}
    </>
  );
}

export default Pages;
