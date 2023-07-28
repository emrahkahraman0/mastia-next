"use client";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function AccordionChoose({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = index => {
    setActiveIndex(index);
  };

  return (
    <>
      <div id="accordion">
        <div className="accordion">
          <div className="accordion_item">
            {items.map((item, index) => {
              const active = index === activeIndex;
              const arrowIcon = active ? (
                <MdKeyboardArrowUp />
              ) : (
                <MdKeyboardArrowDown />
              );

              return (
                <div key={index}>
                  <div
                    className={`accordion_item_accordion_title ${
                      active ? "active" : ""
                    }`}
                    onClick={() => onTitleClick(index)}
                  >
                    {item.title}
                    <span
                      className={`accordion_item_accordion_arrow ${
                        active ? "active" : ""
                      }`}
                    >
                      {arrowIcon}
                    </span>
                  </div>
                  <div
                    className={`accordion_item_accordion_content ${
                      active ? "active" : ""
                    }`}
                  >
                    {item.content}
                  </div>
                </div>
              );
            })}
          </div>
          {/*accordion_item*/}
        </div>
        {/*accordion*/}
      </div>
      {/*accordion#*/}
    </>
  );
}

export default AccordionChoose;
