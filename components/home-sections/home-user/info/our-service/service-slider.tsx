import { i18n } from "next-i18next";
import Link from "next/link";
import Slider from "react-slick";

const ServiceSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3,
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
          slidesToShow: 1,
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
    <div className="home__user__service__slider">
      <div className="container">
        <Slider {...settings}>
          <div className="slider-item">
            <div className="item-two">
              <div className="image">
                <img src={"/assets/images/slider-item-three.png"} alt="" />
              </div>
              <div className="contenet">
                <h6>{i18n?.t("common:SliderOneTitle")}</h6>
                <p>{i18n?.t("common:SliderDescription")}</p>
                <Link href={"/study/buy"}>
                  {i18n?.t("common:SliderOneButton")}
                </Link>
              </div>
            </div>

            <div className="item-two">
              <div className="image">
                <img src={"/assets/images/slider-item-four.png"} alt="" />
              </div>
              <div className="contenet">
                <h6>{i18n?.t("common:SliderTwoTitle")}</h6>
                <p>{i18n?.t("common:SliderDescription")}</p>
                <Link href={"/study/resale"}>
                  {i18n?.t("common:SliderTwoButton")}
                </Link>
              </div>
            </div>
          </div>

          <div className="slider-item">
            <div className="item-one">
              <div className="image">
                <img src={"/assets/images/slider-item-one.png"} alt="" />
              </div>
              <div className="contenet">
                <h6>{i18n?.t("common:SliderThreeTitle")}</h6>
                <p>{i18n?.t("common:SliderDescription")}</p>
                <Link href={"/study/create/form-one"}>
                  {i18n?.t("common:SliderThreeButton")}
                </Link>
              </div>
            </div>
          </div>

          <div className="slider-item">
            <div className="item-one">
              <div className="image">
                <img src={"/assets/images/slider-item-two.png"} alt="" />
              </div>
              <div className="contenet">
                <h6>{i18n?.t("common:SliderFourTitle")}</h6>
                <p>{i18n?.t("common:SliderDescription")}</p>
                <Link href={"/study/ask/specialties"}>
                  {i18n?.t("common:SliderFourButton")}
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ServiceSlider;

/*

<Slider {...settings}>

{Data.map(item =>
          <div className='slider-item' key={item.id}>
            <span>{item.name}</span>
            </div>
            
            )}
            </Slider>
            
            */
