"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import HeaderLogo from "public/logo.png";
import { LiaBarsSolid } from "react-icons/lia";
import { VscClose } from "react-icons/vsc";
import TopBar from "../templates/TopBar";

function Header() {
  //Menü
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  //Scroll
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Active
  const currentRoute = usePathname();

  return (
    <>
      <TopBar />

      <div id="header" className={scroll ? "scroll" : ""}>
        <div className="container">
          <div className="header">
            <div className="header_logo">
              <Link href="/">
                <Image
                  className="img_fluid"
                  src={HeaderLogo}
                  alt="Team Image"
                />
              </Link>
            </div>
            {/*header_logo*/}

            <ul className={`header_menu ${isOpen ? "open" : ""}`}>
              <li>
                <Link className={currentRoute === "/" ? "active" : ""} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === "/about" ? "active" : ""}
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === "/pages" ? "active" : ""}
                  href="#"
                >
                  Pages
                </Link>
                <ul
                  className={`dropdown ${isOpen ? "open" : ""}`}
                  onClick={toggleMenu}
                >
                  <li>
                    <Link
                      className={currentRoute === "/teams" ? "active" : ""}
                      href="/teams"
                    >
                      Teams
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={currentRoute === "/faqs" ? "active" : ""}
                      href="/faqs"
                    >
                      Faqs
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className={currentRoute === "/services" ? "active" : ""}
                  href="/services"
                >
                  Services
                </Link>
                <ul className="dropdown">
                  <li>
                    <Link
                      className={currentRoute === "/services" ? "active" : ""}
                      href="/services/services-1"
                    >
                      Services-1
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={currentRoute === "/services" ? "active" : ""}
                      href="/services/services-2"
                    >
                      Services-2
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className={currentRoute === "/projects" ? "active" : ""}
                  href="/projects"
                >
                  Projects
                </Link>
                <ul className="dropdown">
                  <li>
                    <Link
                      className={currentRoute === "/projects" ? "active" : ""}
                      href="/projects/projects-1"
                    >
                      Projects-1
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={currentRoute === "/projects" ? "active" : ""}
                      href="/projects/projects-2"
                    >
                      Projects-2
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className={currentRoute === "/blog" ? "active" : ""}
                  href="/blog"
                >
                  Blog
                </Link>
                <ul className="dropdown">
                  <li>
                    <Link
                      className={currentRoute === "/blog" ? "active" : ""}
                      href="/blog/blog-1"
                    >
                      Blog-1
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={currentRoute === "/blog" ? "active" : ""}
                      href="/blog/blog-2"
                    >
                      Blog-2
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className={currentRoute === "/contact" ? "active" : ""}
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            {/*header_menu*/}

            <div
              className={`header_hamburger ${isOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <LiaBarsSolid className="icon bars" />
              <VscClose className="icon times" />
            </div>
            {/*header_hamburger*/}
          </div>
          {/*header*/}
        </div>
        {/*container*/}
      </div>
      {/*header#*/}
    </>
  );
}

export default Header;
