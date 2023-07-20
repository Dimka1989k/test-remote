import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { device } from "../../utils/mixin";

import ImageHouseBest from "../../image/AboutUs/ImageHouseBest.png";
import ImageHouseBest2x from "../../image/AboutUs/ImageHouseBest2x.png";
import ImageHouseRe from "../../image/AboutUs/ImageHouseRe.png";
import ImageHouseRe2x from "../../image/AboutUs/ImageHouseRe2x.png";
import ImageVilla from "../../image/AboutUs/ImageVilla.png";
import ImageVilla2x from "../../image/AboutUs/ImageVilla2x.png";

import iconDirector from "../../image/sliderheroimage/Ellipse1.svg";
import iconStar from "../../image/AboutUs/star.svg";
import iconHenry from "../../image/AboutUs/IconHenry.svg";
import imageSlider3 from "../../image/sliderheroimage/Ellipse3.svg";

const SliderStyled = styled(Slider)`
  /* height: 568px; */

  .slick-slide {
    position: relative;
    margin-left: 18px;
    margin-right: 18px;
    ${device.tablet} {
      height: 540px;
      margin-left: 12px;
      margin-right: 12px;
    }
    ${device.desktop} {
      height: 540px;
      margin-left: 28px;
      margin-right: 28px;
    }
  }

  .slick-dots {
    position: relative;
    top: 0px;

    ${device.desktop} {
      top: 32px;
    }
  }

  .slick-dots li button {
    color: #3c4563;
    padding: 4px;
  }

  .slick-dots li button:before {
    font-size: 6px;
    ${device.tablet} {
      font-size: 8px;
    }
    ${device.desktop} {
      font-size: 10px;
    }
  }
`;
const Title = styled.p`
  color: #1b1c57;
  font-size: clamp(11px, 4vw, 16px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  margin-bottom: 16px;
  text-align: center;
  ${device.tablet} {
    font-size: clamp(12px, 6vw, 18px);
  }
  ${device.desktop} {
    text-align: start;
    font-size: clamp(14px, 8vw, 20px);
  }
`;

const TitleSmall = styled.p`
  color: #626687;
  font-size: clamp(10px, 4vw, 11px);
  font-style: normal;
  font-weight: 100;
  line-height: 24px;
  opacity: 0.75;
  margin-bottom: 10px;
  ${device.tablet} {
    font-size: clamp(11px, 4vw, 12px);
    margin-bottom: 12px;
  }
  ${device.desktop} {
    font-size: clamp(12px, 8vw, 14px);
    margin-bottom: 24px;
  }
`;

const ContainerSlide = styled.div`
  position: relative;
  top: -15px;
  left: 0px;
  ${device.mobile} {
    top: 0px;
    left: 0px;
  }
  ${device.tablet} {
    left: 130px;
    top: 3px;
  }
  ${device.desktop} {
    left: 200px;
    top: 3px;
  }
`;

const ConatinerInfo = styled.div`
  position: relative;
  top: -32px;
  width: 90%;
  left: 5px;
  align-self: center;
  max-width: 612px;
  height: auto;
  padding: 24px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 9px 32px 0px rgba(89, 92, 219, 0.05);
  ${device.mobile} {
    width: 90%;
    left: 12px;
    max-width: 612px;
  }
  ${device.tablet} {
    position: relative;
    top: -68px;
    left: 40px;
    width: 80%;
    max-width: 360px;
  }

  ${device.desktop} {
    width: 100%;
    top: -125px;
    padding: 32px;
    left: 55px;
    max-width: 612px;
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const ContainerName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0px;
  margin-top: 10px;

  ${device.tablet} {
    margin-top: 12px;
  }
  ${device.desktop} {
    display: flex;
    align-items: start;
    margin-left: 24px;
    margin-top: 0px;
  }
`;

const ConatinerDirector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${device.desktop} {
    flex-direction: row;
    align-items: end;
  }
`;

const FirstName = styled.p`
  color: #0e1735;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.57;
  text-align: center;
`;

const LastName = styled.p`
  color: #888b97;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.57;
  text-align: center;
`;

const IconStar = styled.img`
  width: 28px;
  height: 28px;
`;

const Raiting = styled.p`
  display: flex;
  color: #3c4563;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4;
  margin-left: 8px;
  margin-top: 8px;

  ${device.tablet} {
    margin-left: 8px;
    margin-top: 0px;
  }
  ${device.desktop} {
    margin-left: 16px;
    margin-top: 0px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  ${device.tablet} {
    margin-top: 10px;
  }
  ${device.desktop} {
    align-items: end;
    margin-left: auto;
    margin-top: 0px;
  }
`;

const SliderAboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    draggable: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    vertical: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          draggable: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          vertical: true,
        },
      },
    ],
  };

  return (
    <SliderStyled {...settings}>
      <ContainerSlide>
        <picture>
          <source
            srcSet={`${ImageHouseRe} 1x, ${ImageHouseRe2x} 2x`}
            media="(max-width: 767px)"
          />
          <source
            srcSet={`${ImageHouseRe} 1x, ${ImageHouseRe2x} 2x`}
            media="(max-width: 1279px)"
          />
          <source
            srcSet={`${ImageHouseRe} 1x, ${ImageHouseRe2x} 2x`}
            media="(min-width: 1280px)"
          />
          <source
            srcSet={`${ImageHouseRe} 1x, ${ImageHouseRe2x} 2x`}
            media="(min-width: 1440px)"
          />
          <img src={ImageHouseRe} alt="home-girl_and_dog" />
        </picture>
        <ConatinerInfo>
          <Title>My house sold out fast!</Title>
          <TitleSmall>
            I was finally able to sell my house quickly through Hounter by
            immediately setting me up with people who wanted my house. I also do
            not get a discount from the sale of my house. Awesome!
          </TitleSmall>
          <ConatinerDirector>
            <Icon src={iconHenry} alt={iconHenry} />
            <ContainerName>
              <FirstName>Courtney Henry</FirstName>
              <LastName>CEO Andarafish</LastName>
            </ContainerName>
            <Container>
              <IconStar src={iconStar} alt={iconStar} />
              <Raiting>4.3</Raiting>
            </Container>
          </ConatinerDirector>
        </ConatinerInfo>
      </ContainerSlide>
      <ContainerSlide>
        <picture>
          <source
            srcSet={`${ImageHouseBest} 1x, ${ImageHouseBest2x} 2x`}
            media="(max-width: 767px)"
          />
          <source
            srcSet={`${ImageHouseBest} 1x, ${ImageHouseBest2x} 2x`}
            media="(max-width: 1279px)"
          />
          <source
            srcSet={`${ImageHouseBest} 1x, ${ImageHouseBest2x} 2x`}
            media="(min-width: 1280px)"
          />
          <source
            srcSet={`${ImageHouseBest} 1x, ${ImageHouseBest2x} 2x`}
            media="(min-width: 1440px)"
          />
          <img src={ImageHouseBest} alt="home-girl_and_dog" />
        </picture>
        <ConatinerInfo>
          <Title>Best! I got the house I wanted through Hounter</Title>
          <TitleSmall>
            Through this website I can get a house with the type and
            specifications I want very easily, without a complicated process to
            be able to find information on the house we want.
          </TitleSmall>
          <ConatinerDirector>
            <Icon src={iconDirector} alt={iconDirector} />
            <ContainerName>
              <FirstName>Dianne Russell</FirstName>
              <LastName>Manager Director</LastName>
            </ContainerName>
            <Container>
              <IconStar src={iconStar} alt={iconStar} />
              <Raiting>4.6</Raiting>
            </Container>
          </ConatinerDirector>
        </ConatinerInfo>
      </ContainerSlide>
      <ContainerSlide>
        <picture>
          <source
            srcSet={`${ImageVilla} 1x, ${ImageVilla2x} 2x`}
            media="(max-width: 767px)"
          />
          <source
            srcSet={`${ImageVilla} 1x, ${ImageVilla2x} 2x`}
            media="(max-width: 1279px)"
          />
          <source
            srcSet={`${ImageVilla} 1x, ${ImageVilla2x} 2x`}
            media="(min-width: 1280px)"
          />
          <source
            srcSet={`${ImageVilla} 1x, ${ImageVilla2x} 2x`}
            media="(min-width: 1440px)"
          />
          <img src={ImageVilla} alt="home-girl_and_dog" />
        </picture>
        <ConatinerInfo>
          <Title>Through the Hounter, I can get a house for my self</Title>
          <TitleSmall>
            By looking for information about what kind of house we want, we
            managed to get the house we wanted very quickly, and directly
            connected with the seller to be able to ask about the details, very
            helpful!
          </TitleSmall>
          <ConatinerDirector>
            <Icon src={imageSlider3} alt={imageSlider3} />
            <ContainerName>
              <FirstName>Esther Howard</FirstName>
              <LastName>Head of Marketing</LastName>
            </ContainerName>
            <Container>
              <IconStar src={iconStar} alt={iconStar} />
              <Raiting>4.6</Raiting>
            </Container>
          </ConatinerDirector>
        </ConatinerInfo>
      </ContainerSlide>
    </SliderStyled>
  );
};

export default SliderAboutUs;
