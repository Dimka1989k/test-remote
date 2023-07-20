import React, { useState, useRef, useEffect, useCallback } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { device } from "../../utils/mixin";

import imageSofa from "../../image/ReadyToSell/ImageSofa.svg";
import imageSofaSmall from "../../image/ReadyToSell/ImageSofaSmall.svg";
import imageFlowers from "../../image/ReadyToSell/imageFlowers.svg";
import imageFlowersSmall from "../../image/ReadyToSell/imageFlowersSmall.svg";
import imageChair from "../../image/ReadyToSell/imageChair.svg";
import imageChairSmall from "../../image/ReadyToSell/imageChairSmall.svg";

const Container = styled.div`
  width: 85vw;
  margin: 0 auto;
  position: absolute;
  bottom: -15px;
  right: 0px;
  cursor: pointer;
  ${device.mobile} {
    width: 85vw;
    margin: 0 auto;
    position: absolute;
    bottom: -15px;
    right: 20px;
    cursor: pointer;
  }

  ${device.tablet} {
    width: 68vw;
    margin: 0 auto;
    position: absolute;
    bottom: -15px;
    right: 80px;
    cursor: pointer;
  }

  ${device.smalldesktop} {
    width: 68vw;
    position: absolute;
    bottom: -15px;
    right: 190px;
    cursor: pointer;
  }

  ${device.desktop} {
    width: 100%;
    min-width: 512px;
    margin: 0 auto;
    position: absolute;
    bottom: -50px;
    right: 20px;
    cursor: pointer;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    margin-right: 12px;
  }
`;

const Icon = styled.img`
  width: 100%;
  height: auto;
`;

const SliderCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let slickSlider = sliderRef.current; // Копируем значение sliderRef.current в локальную переменную
    slickSlider.slickPlay(); // Запустить автопрокрутку при монтировании компонента

    return () => {
      slickSlider.slickPause(); // При размонтировании компонента остановить автопрокрутку
    };
  }, []);

  const handleSlideImageLoad = useCallback(() => {
    sliderRef.current.slickGoTo(activeSlide, true);
  }, [activeSlide]);

  const handleSlideImageFocus = (index) => {
    sliderRef.current.slickPause(); // При фокусе остановить автопрокрутку
    setActiveSlide(index);
  };

  const handleSlideChange = (index) => {
    setActiveSlide(index); // Устанавливаем activeSlide при смене слайда
  };

  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    waitForAnimate: false,
    afterChange: handleSlideChange,
  };

  const getSlideSize = (index) => {
    const isSmallScreen = windowWidth < 480;

    if (index === activeSlide) {
      return {
        width: isSmallScreen ? "148px" : "296px",
        height: isSmallScreen ? "84px" : "168px",
      };
    } else {
      return {
        width: isSmallScreen ? "48px" : "96px",
        height: isSmallScreen ? "40px" : "80px",
        position: "relative",
        bottom: isSmallScreen ? "-44px" : "-88px",
      };
    }
  };

  return (
    <Container>
      <StyledSlider {...settings} ref={sliderRef}>
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            onFocus={() => handleSlideImageFocus(index)} // Изменение фокуса для каждого слайда
          >
            <Icon
              src={
                index === 0
                  ? activeSlide === 0
                    ? imageSofa
                    : imageSofaSmall
                  : index === 1
                  ? activeSlide === 1
                    ? imageFlowers
                    : imageFlowersSmall
                  : activeSlide === 2
                  ? imageChair
                  : imageChairSmall
              }
              alt={`image${index}`}
              onLoad={handleSlideImageLoad}
              style={getSlideSize(index)}
            />
          </div>
        ))}
      </StyledSlider>
    </Container>
  );
};

export default SliderCarousel;
