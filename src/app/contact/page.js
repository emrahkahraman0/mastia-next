"use client";
import Link from "next/link";
import { FaMapMarkedAlt, FaMapSigns } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdShare } from "react-icons/md";
import Pages from "@/src/templates/Pages";

function Contact() {
  return (
    <>
      <Pages />
      <div id="contact_form">
        <div className="container">
          <h6 className="title">contact us</h6>

          <div className="contact_form row row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-sm-1">
            <form className="contact_form_left">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="E-Mail" />
              <textarea placeholder="Messages" rows={10} />
              <button type="submit">send</button>
            </form>
            {/*contact_form_left*/}
            <div className="contact_form_right">
              <div className="right_icon">
                <div className="right_icon_item">
                  <div className="icon">
                    <FaMapMarkedAlt />
                  </div>
                  <div className="text">
                    <p>1000 5th Ave to Central Park, New York, US</p>
                  </div>
                </div>
                {/*right_icon_item*/}
                <div className="right_icon_item">
                  <div className="icon">
                    <FiMail />
                  </div>
                  <div className="text">
                    <Link href="mailto:info_statum@example.com">
                      info_statum@example.com
                    </Link>
                    <Link href="mailto:info_statum@example.com">
                      info_statum@example.com
                    </Link>
                  </div>
                </div>
                {/*right_icon_item*/}
                <div className="right_icon_item">
                  <div className="icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="text">
                    <Link href="tel:(123)0988754">(123) 098 - 87 - 54</Link>
                    <Link href="tel:(123)0988754">(123) 098 - 87 - 54</Link>
                  </div>
                </div>
                {/*right_icon_item*/}
                <div className="right_icon_item">
                  <div className="icon">
                    <MdShare />
                  </div>
                  <div className="text">
                    <p>Lorem ipsum door is amet</p>
                  </div>
                </div>
                {/*right_icon_item*/}
              </div>
              {/*right_icon*/}
            </div>
            {/*contact_form_right*/}
          </div>
          {/*contact_form*/}
        </div>
        {/*container*/}
      </div>
      {/*contact_form#*/}

      <div id="contact_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6150137.699169834!2d7.429070878417965!3d41.17823430644224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe82448dd203%3A0xe22cf55c24635e6f!2zxLB0YWx5YQ!5e0!3m2!1str!2str!4v1679786992310!5m2!1str!2str"
          width="100%"
          height="450"
        ></iframe>
      </div>
      {/*contact_map#*/}
    </>
  );
}

export default Contact;
