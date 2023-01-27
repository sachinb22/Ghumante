import React, { useEffect } from "react";
import "./footer.css";
import video from "../../Assets/video.mp4";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  //lets create a react hook to add a scroll animation..
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className="footer">
        <div className="videoDiv">
          <video src={video} muted autoPlay loop type="video/mp4"></video>
        </div>
        <div className="secContent container">
          <div className="contactDiv flex">
            <div className="text">
              <small data-aos="fade-up">KEEP IN TOUCH</small>
              <h2 data-aos="fade-up">Travel with us</h2>
            </div>
            <div className="inputDiv flex">
              <input
                data-aos="fade-up"
                type="text"
                placeholder="Enter Email Address"
              />
              <button data-aos="fade-up" className="btn flex" type="submit">
                SEND <FiSend className="icon" />
              </button>
            </div>
          </div>
          <div data-aos="fade-up" className="footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href="" className="logo flex">
                  <MdOutlineTravelExplore className="icon" /> Ghumnate.
                </a>
              </div>
              <div data-aos="fade-up" className="footerParagraph">
                Ghumante showcases the unique beauty and diversity of the
                country, Nepal and provide visitors with the information they
                need to have a safe and enjoyable trip.
              </div>
              <div data-aos="fade-up" className="footerSocials flex">
                <FaFacebookF className="icon" />
                <AiFillInstagram className="icon" />
                <FaYoutube className="icon" />
              </div>
            </div>

            <div className="footerLinks grid">
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="linkGroup"
              >
                <span className="groupTitle">OUR AGENCY</span>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> Services
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> Agency
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> Tourism
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> Payment
                </li>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="4000"
                className="linkGroup"
              >
                <span className="groupTitle">OUR AGENCY</span>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> Services
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> Agency
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> Tourism
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> Payment
                </li>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="5000"
                className="linkGroup"
              >
                <span className="groupTitle">OUR AGENCY</span>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> Services
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> Agency
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> Tourism
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> Payment
                </li>
              </div>
            </div>

            <div className="footerDiv flex">
              <small>BEST TRAVEL WEBSITE</small>
              <a href="https://www.hitwebcounter.com" target="_blank">
                <img
                  src="https://hitwebcounter.com/counter/counter.php?page=8155910&style=0005&nbdigits=5&type=page&initCount=0"
                  title="Free Counter"
                  Alt="web counter"
                  border="0"
                />
              </a>
              <small>Copyright Ghumante. 2023 All right Reserved. </small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
