import React from "react";
import Slider from "react-slick";
import CardRating from "../card/card-rating";

type TypeProps = {
  DataPersonaRatings: {
    id: number;
    Name: string;
    Image: string;
    revew: number;
    Content: string;
  }[];
};
const RatingsList = (props: TypeProps) => {
  const { DataPersonaRatings } = props;

  const settings = {
    dots: true,
    className: "center",
    autoplaySpeed: 5000,
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    cssEase: "linear",
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="ratingslist">
      <Slider {...settings}>
        {DataPersonaRatings.map((item) => (
          <CardRating Data={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
};

export default RatingsList;
