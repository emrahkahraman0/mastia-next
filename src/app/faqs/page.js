"use client";
import { useState, useEffect } from "react";

function FaqItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faqs_item">
      <button className="faqs_item_header" onClick={() => setIsOpen(!isOpen)}>
        <span className="faqs_item_header_title">{title}</span>
        <span className="faqs_item_header_icon">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="faqs_item_content">{content}</div>}
    </div>
  );
}

function Faqs() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    async function fetchFaqs() {
      const res = await fetch("/faqs.json");
      const data = await res.json();
      setFaqs(data.questions);
    }
    fetchFaqs();
  }, []);
  return (
    <>
      <div id="faqs">
        <div className="container">
          <div className="faqs">
            {faqs.map(faq => (
              <FaqItem key={faq.id} title={faq.question} content={faq.answer} />
            ))}
          </div>
          {/*faqs*/}
        </div>
        {/*container*/}
      </div>
      {/*faqs#*/}
    </>
  );
}

export default Faqs;
