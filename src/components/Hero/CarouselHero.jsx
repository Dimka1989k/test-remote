import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { device } from "../../utils/mixin";

import imageSlider1 from "../../image/sliderheroimage/Ellipse1.svg";
import imageSlider2 from "../../image/sliderheroimage/Ellipse2.svg";
import imageSlider3 from "../../image/sliderheroimage/Ellipse3.svg";
import imageSlider4 from "../../image/sliderheroimage/Rectangle.svg";
import imageSlider5 from "../../image/sliderheroimage/Ellipse5.svg";

const Container = styled.div`
  width: 90vw;
  position: absolute;
  top: -90px;
  right: 0px;
  overflow: hidden;

  ${device.tablet} {
    width: 75vw;
    position: absolute;
    top: -160px;
    right: 0px;
    overflow: hidden;
  }

  ${device.desktop} {
    width: 100%;
    max-width: 672px;
    margin: 0 auto;
    position: relative;
    top: -168px;
    right: -23px;
  }
`;

const Slide = styled.div`
  position: relative;
  max-width: 327px;
  height: 64px;
  background-color: #fff;
  border-radius: 32px;
  padding: 10px 16px;
  box-shadow: 0px 11px 48px 0px rgba(51, 51, 51, 0.06);

  ${device.tablet} {
    height: 104px;
    padding: 24px;
  }
`;

const SlideTwo = styled.div`
  width: 100%;
  max-width: 204px;
  height: 64px;
  background-color: #fff;
  border-radius: 32px;
  padding: 10px 16px;
  box-shadow: 0px 11px 48px 0px rgba(51, 51, 51, 0.06);

  ${device.tablet} {
    height: 104px;
    padding: 24px;
  }
`;

const SlideThree = styled.div`
  width: 100%;
  max-width: 306px;
  height: 64px;
  background-color: #fff;
  border-radius: 32px;
  align-items: flex-end;
  padding: 10px 16px;
  box-shadow: 0px 11px 48px 0px rgba(51, 51, 51, 0.06);
  ${device.tablet} {
    height: 104px;
    padding: 24px;
  }
`;

const Icon = styled.img`
  position: relative;
  left: 0px;
  width: 36px;
  height: 36px;
  ${device.tablet} {
    width: 56px;
    height: 56px;
  }
`;

const IconPositionStart = styled.img`
  position: relative;
  left: 0px;
  width: 36px;
  height: 36px;
  ${device.tablet} {
    left: 28px;
    width: 56px;
    height: 56px;
  }
`;

const IconPosition = styled.img`
  position: relative;
  left: -14px;
  width: 36px;
  height: 36px;
  ${device.tablet} {
    left: 0px;
    width: 56px;
    height: 56px;
  }
`;
const IconPositionLeft = styled.img`
  position: relative;
  left: -29px;
  width: 36px;
  height: 36px;
  ${device.tablet} {
    left: -29px;
    width: 56px;
    height: 56px;
  }
`;

const TextTopFirst = styled.p`
  position: relative;
  left: -28px;
  top: 0px;
  align-items: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  opacity: 0.75;
`;
const TextBottomFirst = styled.p`
  position: relative;
  left: -28px;
  bottom: 0px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.7;
  opacity: 0.75;
  width: 159px;
`;

const TextTop = styled.p`
  align-items: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
`;

const TextBottom = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.7;
  opacity: 0.75;
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    margin-right: 16px;
  }
`;

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ContainerSlider = styled.div`
  position: relative;
`;

const TextContainer = styled.div`
  margin-left: 16px;
`;
const SliderCarousel = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    waitForAnimate: false,
    useTransform: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  };

  return (
    <ContainerSlider>
      <Container>
        <StyledSlider {...settings}>
          <Slide>
            <SlideContainer>
              <IconPositionStart src={imageSlider3} alt="Icon1" />
              <IconPosition src={imageSlider2} alt="Icon2" />
              <IconPositionLeft src={imageSlider1} alt="Icon3" />
              <TextContainer>
                <TextTopFirst>1K+ People</TextTopFirst>
                <TextBottomFirst>Successfully Getting Home</TextBottomFirst>
              </TextContainer>
            </SlideContainer>
          </Slide>
          <SlideTwo>
            <SlideContainer>
              <Icon src={imageSlider4} alt="Icon4" />
              <TextContainer>
                <TextTop>56 Houses</TextTop>
                <TextBottom>Sold Monthly</TextBottom>
              </TextContainer>
            </SlideContainer>
          </SlideTwo>
          <SlideThree>
            <SlideContainer>
              <Icon src={imageSlider5} alt="Icon5" />
              <TextContainer>
                <TextTop>4K+</TextTop>
                <TextBottom>People Looking for New Homes</TextBottom>
              </TextContainer>
            </SlideContainer>
          </SlideThree>
        </StyledSlider>
      </Container>
    </ContainerSlider>
  );
};

export default SliderCarousel;
