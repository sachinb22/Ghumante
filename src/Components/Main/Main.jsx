import React, { useEffect } from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";

import img from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    desTitle: "Swoyambhunath Stupa",
    location: "Pokhara",
    fees: "Rs. 2500",
    description:
      "Pokhara Grande is the five-star hotel of Pokhara, Nepal providing the right blend of service, luxury, and quiet efficiency.",
  },
  {
    id: 2,
    imgSrc: img2,
    desTitle: "Phewa Lake",
    location: "Pokhara, Nepal",
    fees: "Rs. 2500",
    description:
      "Lumbini Grande is the five-star hotel of Pokhara, Nepal providing the right blend of service, luxury, and quiet efficiency.",
  },
  {
    id: 3,
    imgSrc: img3,
    desTitle: "Hotel Lumbini Grande",
    location: "Gosaikunda, Nepal",
    fees: "Rs. 2500",
    description:
      "Lumbini Grande is the five-star hotel of Pokhara, Nepal providing the right blend of service, luxury, and quiet efficiency.",
  },
  {
    id: 4,
    imgSrc: img4,
    desTitle: "Manang",
    location: "Mustang, Nepal",
    fees: "Rs. 2500",
    description:
      "Lumbini Grande is the five-star hotel of Pokhara, Nepal providing the right blend of service, luxury, and quiet efficiency.",
  },
  {
    id: 5,
    imgSrc: img,
    desTitle: "Hotel Lumbini Grande",
    location: "Pokhara",
    fees: "Rs. 2500",
    description:
      "Lumbini Grande is the five-star hotel of Pokhara, Nepal providing the right blend of service, luxury, and quiet efficiency.",
  },
  {
    id: 6,
    imgSrc: img,
    desTitle: "Hotel Lumbini Grande",
    location: "Pokhara",
    fees: "Rs. 2500",
    description:
      "Lumbini Grande is the five-star hotel of Pokhara, Nepal providing the right blend of service, luxury, and quiet efficiency.",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {Data.map(({ id, imgSrc, desTitle, location, fees, description }) => {
          return (
            <div key={id} data-aos="fade-up" className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={desTitle} />
              </div>
              <div className="cardInfo">
                <h4 className="desTitle">{desTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{location}</span>
                </span>
                <div className="fees flex">
                  <span>per day/-</span>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>
                <div className="desc">{description}</div>

                <button className="btn flex">
                  Explore
                  <BsArrowRight className="icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
