import AccordionChoose from "@/src/templates/AccordionChoose";

function AboutWhy() {
  const menuItems = [
    {
      title: "Item 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Item 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Item 3",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <>
      <div id="about_choose">
        <div className="container">
          <div className="about_choose row row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-sm-1">
            <div className="about_choose_left">
              <h6>WHY CHOOSE US</h6>
              <AccordionChoose items={menuItems} />
            </div>
            {/*about_choose_left*/}
            <div className="about_choose_right">
              <h6>WHAT WE DO</h6>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.Minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <p>
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugia\.
              </p>
            </div>
            {/*about_choose_right*/}
          </div>
          {/*about_choose*/}
        </div>
        {/*container*/}
      </div>
      {/*about_choose#*/}
    </>
  );
}

export default AboutWhy;
