import {
  ConatinerHero,
  HeroParagraph,
  DedicatedText,
  SmallParagraph,
  InputHeader,
  DivInput,
  DivIcon,
  GeoLocationIcon,
  ButtonInput,
  ParagraphPertnerShip,
  PartnerShipItem,
  LogoIcon,
  LogoIconTiket,
  LogoIconAirBnb,
  LogoIconAdvisor,
  PartnerShipItemList,
  Background,
  Triangle,
  TriangleBlue,
  TriangleYellow,
  Maininfo,
} from "./Hero.styled.jsx";
import { ReactComponent as ButtonIcon } from "../../image/ButtonIcon.svg";
import geoLocationIcon from "../../image/GeoLocationIcon.svg";
import Traveloka from "../../image/travelokalogo.svg";
import TiketCom from "../../image/tiketcomlogo.svg";
import AirBnb from "../../image/airbnblogo.svg";
import Advisor from "../../image/tripadvisorlogo.svg";
import CarouselHero from "./CarouselHero.jsx";

import redtriangle from "../../image/redtriangle.svg";
import yellowTriangle from "../../image/yellowTriangle.svg";
import blueTriangle from "../../image/blueTriangle.svg";
import BackgroundImage from "../../image/BackgroundImage.jpg";
import BackgroundImage2x from "../../image/BackgroundImage2x.png";

export const Hero = () => {
  return (
    <ConatinerHero>
      <Maininfo>
        <HeroParagraph>
          find the place to live
          <DedicatedText data-text=" your dreams" /> easily here
        </HeroParagraph>
        <SmallParagraph>
          Everything you need about finding your place to live will be here,
          where it will be easier for you
        </SmallParagraph>
        <DivInput>
          <InputHeader placeholder="Search for the location you want!" />

          <ButtonInput>
            Search <ButtonIcon />
          </ButtonInput>
          <DivIcon>
            <GeoLocationIcon src={geoLocationIcon} alt="GeoLocationIcon" />
          </DivIcon>
        </DivInput>
        <ParagraphPertnerShip>Our Partnership</ParagraphPertnerShip>
        <PartnerShipItem>
          <PartnerShipItemList>
            <LogoIcon src={Traveloka} alt="TravelokaLogo" />
          </PartnerShipItemList>
          <PartnerShipItemList>
            <LogoIconTiket src={TiketCom} alt="TiketComLogo" />
          </PartnerShipItemList>
          <PartnerShipItemList>
            <LogoIconAirBnb src={AirBnb} alt="AirBnbLogo" />
          </PartnerShipItemList>
          <PartnerShipItemList>
            <LogoIconAdvisor src={Advisor} alt="AdvisorLogo" />
          </PartnerShipItemList>
        </PartnerShipItem>
      </Maininfo>
      <Background>
        <picture>
          <source
            srcSet={`${BackgroundImage} 1x, ${BackgroundImage2x} 2x`}
            media="(max-width: 767px)"
          />
          <source
            srcSet={`${BackgroundImage} 1x, ${BackgroundImage2x} 2x`}
            media="(max-width: 1279px)"
          />
          <source
            srcSet={`${BackgroundImage} 1x, ${BackgroundImage2x} 2x`}
            media="(min-width: 1280px)"
          />
          <source
            srcSet={`${BackgroundImage} 1x, ${BackgroundImage2x} 2x`}
            media="(min-width: 1440px)"
          />
          <img src={BackgroundImage} alt="home-girl_and_dog" />
        </picture>
        <Triangle src={redtriangle} alt="redTriangle" />
        <TriangleYellow src={yellowTriangle} alt="yellowTriangle" />
        <TriangleBlue src={blueTriangle} alt="blueTriangle" />
        <CarouselHero />
      </Background>
    </ConatinerHero>
  );
};
