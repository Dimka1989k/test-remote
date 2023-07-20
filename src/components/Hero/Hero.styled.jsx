import styled from "styled-components";
import { device } from "../../utils/mixin";

export const HeroParagraph = styled.h1`
  color: #1b1c57;
  font-size: clamp(20px, 2vw, 40px);
  font-weight: 900;
  text-transform: capitalize;
  font-weight: 900;
  z-index: 999;
  align-self: center;
  text-align: center;
  text-indent: 10px;

  ${device.tablet} {
    font-size: clamp(20px, 6vw, 40px);
    text-indent: 10px;
    align-self: center;
    width: 580px;
  }

  ${device.desktop} {
    font-size: clamp(20px, 8vw, 40px);
    width: 380px;
    flex-direction: column;
    margin-top: 107px;
    align-self: flex-start;
    text-align: start;
    text-indent: 0px;
  }
`;

export const Maininfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;

  ${device.tablet} {
    display: flex;
    flex-direction: column;
    padding-left: 60px;
    padding-right: 60px;
  }
  ${device.desktop} {
    display: flex;
    flex-direction: column;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const ConatinerHero = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding-left: 0px;
  padding-right: 0px;
  ${device.tablet} {
    display: flex;
    flex-direction: column-reverse;
    padding-left: 0px;
    padding-right: 0px;
  }
  ${device.desktop} {
    display: flex;
    flex-direction: row;
    padding-left: 120px;
    padding-right: 0px;
  }
`;

export const DedicatedText = styled.span`
  font-size: 20px;
  font-weight: 600;
  position: relative;
  display: inline-block;

  ${device.tablet} {
    font-size: 40px;
    margin-left: -3px;
  }

  ${device.desktop} {
    margin-left: 14px;
  }

  ::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    color: #1b1c57;
    -webkit-text-stroke: 2px #1b1c57;
  }

  ::after {
    content: attr(data-text);
    position: relative;
    color: white;
  }
`;

export const SmallParagraph = styled.p`
  color: #626687;
  font-size: clamp(12px, 2vw, 15px);
  opacity: 0.75;
  line-height: 1.75;
  margin-top: 10px;
  font-weight: lighter;
  align-self: center;
  text-align: center;

  ${device.tablet} {
    font-size: clamp(12px, 4vw, 15px);
    width: 496px;
    margin-top: 12px;
  }

  ${device.desktop} {
    color: #626687;
    font-size: clamp(12px, 8vw, 15px);
    width: 496px;
    margin-top: 24px;
    text-align: start;
    align-self: flex-start;
  }
`;

export const ParagraphPertnerShip = styled.p`
  color: #888b97;
  font-size: 20px;
  line-height: 2;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${device.tablet} {
    font-size: 26px;
    line-height: 2;
    margin-top: 18px;
  }

  ${device.desktop} {
    font-size: 16px;
    margin-top: 24px;
    display: flex;
    align-self: start;
  }
`;

export const DivIcon = styled.div`
  position: relative;
`;
export const DivInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${device.desktop} {
    position: relative;
    display: block;
    flex-direction: column;
    align-items: start;
  }
`;

export const GeoLocationIcon = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  top: -73px;
  left: -144px;

  ${device.tablet} {
    width: 24px;
    height: 24px;
    top: -85px;
    left: -225px;
  }
  ${device.desktop} {
    top: -38px;
    left: 24px;
  }
`;

export const ButtonInput = styled.button`
  position: relative;
  padding: 12px 10px;
  align-items: center;
  gap: 4px;
  border-radius: 32px;
  background: #10b981;
  border: none;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.6;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -46px;
  left: 111px;
  overflow: hidden;
  cursor: pointer;
  svg {
    width: 18px;
    height: 18px;
  }
  ${device.tablet} {
    padding: 12px 16px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.6;
    top: -51px;
    left: 191px;
    cursor: pointer;
    svg {
      width: 24px;
      height: 24px;
    }
  }
  ${device.desktop} {
    position: absolute;
    padding: 12px 16px;
    top: 35px;
    left: 385px;
    cursor: pointer;
  }
`;

export const InputHeader = styled.input`
  margin-top: 32px;
  padding: 14px 70px 14px 30px;
  align-items: center;
  border-radius: 32px;
  border: 1px solid #e0e3eb;

  ::placeholder {
    color: #888b97;
    font-size: 10px;
    font-weight: 100;
    line-height: 1.57;
  }

  :focus {
    outline: none;
  }

  ${device.tablet} {
    width: 496px;
    padding: 17px 12px 17px 64px;

    ::placeholder {
      font-size: 14px;
      font-weight: 500;
      margin-left: 16px;
    }
  }
  ${device.desktop} {
    margin-top: 32px;
  }
`;

export const PartnerShipItem = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${device.tablet} {
    justify-content: center;
    flex-direction: row;
  }

  ${device.desktop} {
    justify-content: start;
    flex-direction: row;
  }
`;

export const PartnerShipItemList = styled.li`
  ${device.desktop} {
    margin-left: 32px;

    :first-child {
      margin-left: 0px;
    }
  }
`;

export const LogoIcon = styled.img`
  width: 160px;
  height: 90px;

  ${device.desktop} {
    width: 82.75px;
    height: 64px;
  }
`;

export const LogoIconTiket = styled.img`
  width: 160px;
  height: 90px;

  ${device.desktop} {
    width: 82.75px;
    height: 64px;
  }
`;

export const LogoIconAirBnb = styled.img`
  width: 160px;
  height: 90px;

  ${device.desktop} {
    width: 82.75px;
    height: 64px;
  }
`;

export const LogoIconAdvisor = styled.img`
  width: 160px;
  height: 90px;

  ${device.desktop} {
    width: 82.75px;
    height: 64px;
  }
`;

export const Background = styled.div`
  position: relative;
  top: -90px;

  z-index: -1;
  ${device.tablet} {
    top: -152px;
  }
  ${device.desktop} {
    height: 620px;
    top: -92px;
    right: 0px;
    margin-left: auto;
  }
`;

export const Triangle = styled.img`
  position: absolute;
  width: 24px;
  height: 55px;
  right: 260px;
  top: 50px;
  ${device.mobile} {
    width: 44px;
    height: 60px;
    right: 383px;
    top: 90px;
  }
  ${device.tablet} {
    width: 66.5px;
    height: 91.5px;
    right: 615px;
    top: 145px;
  }
  ${device.desktop} {
    width: 66.5px;
    height: 91.5px;
    right: 572px;
    top: 139px;
  }
`;

export const TriangleBlue = styled.img`
  position: absolute;
  width: 22px;
  height: 35px;
  right: 48px;
  top: 180px;
  ${device.mobile} {
    width: 22px;
    height: 35px;
    right: 75px;
    top: 270px;
  }
  ${device.tablet} {
    width: 42px;
    height: 75px;
    right: 115px;
    top: 435px;
  }
  ${device.desktop} {
    right: 114px;
    top: 407px;
  }
`;

export const TriangleYellow = styled.img`
  position: absolute;
  width: 25px;
  height: 43px;
  right: 51px;
  top: 90px;

  ${device.mobile} {
    width: 25px;
    height: 63px;
    right: 81px;
    top: 130px;
  }
  ${device.tablet} {
    width: 39px;
    height: 97px;
    right: 130px;
    top: 209px;
  }
  ${device.desktop} {
    width: 39px;
    height: 97px;
    right: 125px;
    top: 197px;
  }
`;
