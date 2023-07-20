import styled from "styled-components";
import { device } from "../../utils/mixin";

export const SectionPartnership = styled.section`
  position: relative;
  padding: 20px 30px;

  ${device.tablet} {
    padding: 60px;
  }
  ${device.desktop} {
    padding: 60px 120px 120px;
  }
`;

export const IconSVG = styled.img`
  position: absolute;
  left: 0px;
  top: 110px;
  width: 238px;
  height: 294px;
  ${device.mobile} {
    top: 115px;
  }

  z-index: -1;
  ${device.tablet} {
    top: 125px;
    width: 338px;
    height: 394px;
  }

  ${device.desktop} {
    top: -5px;
    width: 438px;
    height: 494px;
  }
`;
export const IconSVG2 = styled.img`
  position: absolute;
  left: 0px;
  bottom: 1330px;
  width: 238px;
  height: 294px;
  z-index: -1;

  ${device.tablet} {
    bottom: 630px;
    width: 338px;
    height: 394px;
  }

  ${device.desktop} {
    bottom: 130px;
    width: 438px;
    height: 494px;
  }
`;

export const ContainerParagraph = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #f59e0b;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;

  ::before {
    display: flex;
    align-self: center;
    content: "";
    width: 32px;
    height: 1px;
    background-color: #f59e0b;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
  }

  ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

export const ParagraphTitle = styled.p`
  color: #1b1c57;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  margin-top: 12px;
  margin-bottom: 22px;
  max-width: 424px;

  ${device.tablet} {
    font-size: 32px;
    margin-bottom: 40px;
  }
`;

export const Button = styled.button`
  padding: 12px 16px;
  align-items: center;
  border-radius: 32px;
  background: #10b981;
  border: none;
  color: #ffffff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.57;
  margin-bottom: 42px;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConatinerHouseImage = styled.div`
  display: flex;
  flex-direction: column;

  ${device.tablet} {
    justify-content: center;
    align-items: center;
  }

  ${device.desktop} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const HouseSmall = styled.div`
  display: block;
`;

export const ContainerInfoPartnership = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 22px;

  ${device.tablet} {
    flex-direction: row;
    margin-bottom: 44px;
    :last-child {
      margin-bottom: 0px;
    }
  }
`;

export const HouseBiger = styled.div`
  margin-top: 12px;
  margin-left: 0px;

  ${device.tablet} {
    margin-top: 44px;
    margin-left: 0px;
  }
  ${device.desktop} {
    margin-left: auto;
    margin-top: 0px;
  }
`;

export const Container = styled.div`
  display: block;
  margin-left: 0px;

  ${device.tablet} {
    margin-left: 32px;
  }
`;

export const ConatinerDirector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 12px;

  ${device.tablet} {
    justify-content: start;
    margin-bottom: 12px;
    margin-top: 0px;
  }
  ${device.desktop} {
    margin-bottom: 12px;
    margin-top: 0px;
  }
`;

export const ConatinerDirectorCameron = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
  ${device.tablet} {
    justify-content: start;
    margin-bottom: 12px;
    margin-top: 24px;
  }
  ${device.desktop} {
    justify-content: start;
    margin-bottom: 12px;
    margin-top: 24px;
  }
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;
`;
export const NameDirector = styled.p`
  color: #3c4563;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.57;
  margin-left: 16px;
`;

export const Title = styled.p`
  color: #1b1c57;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  text-transform: capitalize;
  max-width: 340px;

  ${device.tablet} {
    text-align: start;
    font-size: 18px;
  }
  ${device.desktop} {
    font-size: 18px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  ${device.tablet} {
    justify-content: start;
    margin-top: 16px;
  }
  ${device.desktop} {
    justify-content: start;
    margin-top: 16px;
  }
`;

export const IconTime = styled.img`
  width: 24px;
  height: 24px;
`;

export const TextTime = styled.p`
  color: #888b97;
  font-size: 14px;
  align-items: center;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  line-height: 1.7;
  margin-left: 12px;
`;

export const TitleBig = styled.p`
  color: #1b1c57;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  text-transform: capitalize;
  margin-top: 12px;
  margin-bottom: 12px;

  ${device.tablet} {
    text-align: start;
    font-size: 18px;
  }
  ${device.desktop} {
    justify-content: start;
    text-align: 24px;
  }
`;

export const Text = styled.p`
  color: #626687;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  opacity: 0.75;
  max-width: 563px;
`;
