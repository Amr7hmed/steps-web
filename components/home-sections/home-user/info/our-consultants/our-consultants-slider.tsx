import CardConsultant from "@/components/card/card-consultant";
import { i18n } from "next-i18next";
import Link from "next/link";
import Slider from "react-slick";

type TypeProps = {
  OurConsultants: {
    id: number;
    Title: string;
    revew: number;
    Specialization: string;
    linkImage: string;
    time: string;
    price: string;
  }[];
};

const OurConsultantsSlider = (props: TypeProps) => {
  const { OurConsultants } = props;

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 4,
    speed: 500,
    dots: false,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
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
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="home__ourconsultants__slider">
      <div className="container">
        <Slider {...settings}>
          {OurConsultants.map((item) => (
            <CardConsultant Data={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurConsultantsSlider;

/*

<Slider {...settings}>

{Data.map(item =>
          <div className='slider-item' key={item.id}>
            <span>{item.name}</span>
            </div>
            
            )}
            </Slider>
            
            */
