import React from "react";
import "./testimonial.css";
import { FaStar, FaRegStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonial = () => {
  const Feedback = [
    {
      id: 1,
      imgSrc:
        "https://wp.getgolo.com/business-listing/wp-content/uploads/sites/2/2020/06/avatar-11.jpg",
      description:
        "   We had experienced a wonderful experience in Nepal with Peregrine Treks. Nature, historic places and jungle safari are the main attraction of the Nepal Highlights Tour.",
      name: "Sachin Basnet",
      country: "USA",
    },
    {
      id: 2,
      imgSrc:
        "https://wp.getgolo.com/business-listing/wp-content/uploads/sites/2/2020/06/avatar-11.jpg",
      description:
        "   We had experienced a wonderful experience in Nepal with Peregrine Treks. Nature, historic places and jungle safari are the main attraction of the Nepal Highlights Tour.",
      name: "Sam berry",
      country: "Australia",
    },
    {
      id: 3,
      imgSrc:
        "https://wp.getgolo.com/business-listing/wp-content/uploads/sites/2/2020/06/avatar-11.jpg",
      description:
        "   We had experienced a wonderful experience in Nepal with Peregrine Treks. Nature, historic places and jungle safari are the main attraction of the Nepal Highlights Tour.",
      name: "Sachu",
      country: "Finland",
    },
    {
      id: 4,
      imgSrc:
        "https://wp.getgolo.com/business-listing/wp-content/uploads/sites/2/2020/06/avatar-11.jpg",
      description:
        "   We had experienced a wonderful experience in Nepal with Peregrine Treks. Nature, historic places and jungle safari are the main attraction of the Nepal Highlights Tour.",
      name: "Sacxin",
      country: "Scotland",
    },
  ];

  return (
    <>
      <section className=" testimonial">
        <div className="container section">
          <div class="secTitle">
            <h3 data-aos="fade-right" class="title aos-init aos-animate">
              What Our Customer Say
            </h3>
          </div>

          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            slidesPerGroup={2}
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {Feedback.map(({ id, imgSrc, description, name, country }) => {
              return (
                <SwiperSlide>
                  {" "}
                  <div className=" testimonialContent">
                    <div
                      key={id}
                      data-aos="fade-up"
                      className="testimonial-item flex"
                    >
                      <div className="image">
                        <img src={imgSrc} />
                      </div>
                      <div className="testimonial-main-content flex">
                        <div className="content-wrap">
                          <div className="content">
                            <div className="text">{description}</div>
                          </div>
                          <div className="info">
                            <div className="cite">
                              <div className="testimonial-rating">
                                <FaStar className="icon" />
                                <FaStar className="icon" />
                                <FaStar className="icon" />
                                <FaStar className="icon" />
                                <FaRegStar className="icon" />
                              </div>
                              <h4 className="name">{name}</h4>
                              <span className="position">{country}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
