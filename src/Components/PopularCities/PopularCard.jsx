import React from "react";
import "./popularcities.css";
import { BsArrowRight } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";

const CityInfo = [
  {
    id: 1,
    name: "Kathmandu",
    imgSrc: img1,
  },
  {
    id: 2,
    name: "Pokhara",
    imgSrc: img2,
  },
  {
    id: 3,
    name: "Pokhara",
    imgSrc: img3,
  },
  {
    id: 4,
    name: "Pokhara",
    imgSrc: img4,
  },
  {
    id: 5,
    name: "Pokhara",
    imgSrc: img5,
  },
  {
    id: 6,
    name: "Lumbini",
    imgSrc: img6,
  },
];
const PopularCard = () => {
  return (
    <>
      <section className="popularCities">
        <div className="container section">
          <div class="secTitle">
            <h3 data-aos="fade-right" class="title aos-init aos-animate">
              Popular Cities
            </h3>
          </div>
          <div className="secContent grid">
            {CityInfo.map(({ id, name, imgSrc }) => {
              return (
                <div key={id} data-aos="fade-up" className="singleCity ">
                  <div className="overlay">
                    <img src={imgSrc} className="cityImage" alt="" />
                    <div className="cardHeader flex">
                      <h4 className="cityName">{name}</h4>
                      <span className="bookmark">
                        <AiFillHeart className="icon" />
                      </span>
                    </div>
                    {/* <div className="cardDetails">
                  <h4 className="cardTitle">Title</h4>
                  <p className="cardInfo">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur non quia id tempora necessitatibus deserunt
                    exercitationem veniam, magnam totam perspiciatis! Omnis
                    dicta fuga iusto asperiores consectetur non, ad ipsum
                    facere.
                  </p>
                  <button className="btn flex">
                    Explore
                    <BsArrowRight className="icon" />
                  </button>
                </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularCard;
