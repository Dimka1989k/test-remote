import styled from "styled-components";
import { device } from "../../utils/mixin";

export const SectionRecommendation = styled.section`
  padding: 30px 20px 30px 20px;
  overflow: hidden;
  ${device.tablet} {
    padding: 70px 60px 30px 60px;
    overflow: hidden;
  }
  ${device.desktop} {
    padding: 120px 120px 60px 120px;
    overflow: hidden;
  }
`;

export const RecommendationParagraph = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f59e0b;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  margin-top: 0px;
  cursor: pointer;
  margin-bottom: 12px;

  ::before {
    content: "";
    display: flex;
    flex-direction: column;
    width: 32px;
    height: 1px;
    background-color: #f59e0b;
    margin-right: 0px;
    margin-bottom: 8px;
  }

  ${device.desktop} {
    flex-direction: row;
    margin-top: 30px;
    margin-bottom: 0px;

    ::before {
      content: "";
      display: flex;
      align-items: center;
      width: 32px;
      height: 1px;
      background-color: #f59e0b;
      margin-right: 8px;
      margin-bottom: 0px;
    }
  }
`;

export const RecomendTitle = styled.h2`
  color: #1b1c57;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  margin-top: 12px;
  text-align: center;

  ${device.desktop} {
    margin-left: 40px;
  }
`;

export const IconDiv = styled.div`
  position: relative;
  margin-right: 8px;
`;

export const ButtonDiv = styled.div`
  position: relative;
`;

export const IconHouse = styled.img`
  width: 24px;
  height: 24px;
`;

export const ButtonHouse = styled.button`
  position: relative;
  display: flex;
  padding: 12px 24px;
  align-items: center;
  border-radius: 32px;
  border: 1px solid #e0e3eb;
  background-color: rgba(255, 255, 255, 0.1);
  margin-left: 0px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    border: none;
    background-color: #D1FAE5;
    color: #10B981;
  `};

  svg {
    fill: ${({ active }) => (active ? "#10B981" : "currentColor")};
  }
  ${device.desktop} {
    margin-left: 133px;
  }
`;

export const ButtonVilla = styled.button`
  position: relative;
  display: flex;
  padding: 12px 24px;
  align-items: center;
  border-radius: 32px;
  border: 1px solid #e0e3eb;
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  margin-top: 10px;
  ${({ active }) =>
    active &&
    `
    border: none;
    background-color: #D1FAE5;
    color: #10B981;
  `};

  svg {
    fill: ${({ active }) => (active ? "#10B981" : "currentColor")};
  }
  ${device.tablet} {
    margin-top: 0px;
    margin-left: 20px;
  }
`;

export const ButtonApartment = styled.button`
  position: relative;
  display: flex;
  padding: 12px 24px;
  align-items: center;
  border-radius: 32px;
  border: 1px solid #e0e3eb;
  background-color: rgba(255, 255, 255, 0.1);
  margin-left: 0px;
  margin-top: 10px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    border: none;
    background-color: #D1FAE5;
    color: #10B981;
  `};
  svg {
    fill: ${({ active }) => (active ? "#10B981" : "currentColor")};
  }
  ${device.tablet} {
    margin-left: 28px;
    margin-top: 0px;
    cursor: pointer;
  }
`;

export const ContainerButton = styled.div`
  display: block;
  align-items: center;
  margin-top: 20px;
  ${device.tablet} {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
  ${device.desktop} {
    margin-top: 0px;
  }
`;

export const Container = styled.div`
  display: block;

  ${device.desktop} {
    display: flex;
  }
`;

export const ContainerArrowButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0px;
  margin-top: 10px;
  ${device.tablet} {
    margin-left: 0px;
    margin-top: 20px;
  }
  ${device.desktop} {
    margin-left: auto;
    margin-top: 0px;
  }
`;

export const ButtonArrowLeft = styled.button`
  display: flex;
  padding: 12px 16px;
  align-items: center;
  border-radius: 32px;
  border: none;
  background-color: #e0e3eb;
  margin-left: 0px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `    
    background-color: #10B981;    
  `};
  svg {
    fill: ${({ active }) => (active ? "#FFFFFF" : "currentColor")};
  }
`;

export const ButtonArrowRight = styled.button`
  display: flex;
  padding: 12px 16px;
  align-items: center;
  border-radius: 32px;
  border: none;
  background-color: #e0e3eb;
  margin-left: 16px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `    
    background-color: #10B981;    
  `};
  svg {
    fill: ${({ active }) => (active ? "#FFFFFF" : "currentColor")};
  }
`;

export const IconArrow = styled.img`
  width: 28px;
  height: 28px;
`;

export const NoResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 552px;
`;

export const NoResultsText = styled.p`
  font-size: 40px;
  color: black;
`;

export const ContainerSlide = styled.div`
  transition: transform 0.3s ease;
`;

export const SliderContainer = styled.div`
  display: flex;
  width: 90vw;
  margin-top: 10px;
  overflow: hidden;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  ${device.tablet} {
    width: 100vw;
    margin-top: 20px;
  }
  ${device.desktop} {
    width: 1359px;
    margin-top: 40px;
    margin-left: 40px;
  }
`;

export const ImageSlide = styled.img`
  width: 280px;
  height: 320px;
  ${device.tablet} {
    width: 340px;
    height: 382px;
  }
`;

export const ContainerImage = styled.div`
  position: relative;
  svg {
    border-radius: 32px;
    position: absolute;
    left: 16px;
    bottom: 16px;
    width: 112px;
    height: 34px;
  }
`;

export const ContainerImageBestDetails = styled.div`
  position: relative;
  svg {
    position: absolute;
    left: 16px;
    bottom: 16px;
    width: 130px;
    height: 34px;
  }
`;

export const SlideTitle = styled.p`
  color: #0e1735;
  font-size: 18px;
  font-style: normal;
  font-weight: 200;
  line-height: 1.3;
  margin-top: 12px;
  margin-bottom: 5px;

  ${device.tablet} {
    font-size: 24px;   
    font-weight: 500;   
    margin-top: 24px;
    margin-bottom: 8px;
  }
`;

export const SlideTitleSmall = styled.p`
  color: #3c4563;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;

  ${device.tablet} {
    font-size: 20px;
    font-weight: 500;
  }

  ${device.desktop} {
    font-size: 20px;
  }
`;

export const ContainerInformRealtor = styled.div`
  display: flex;
  margin-top: 12px;
  ${device.tablet} {
    display: flex;
    margin-top: 24px;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageRealtor = styled.img`
  width: 32px;
  height: 32px;
  ${device.tablet} {
    width: 40px;
    height: 40px;
  }
`;

export const ContainerNameRealtor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
`;

export const NameRealtor = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 2;

  ${device.tablet} {
    font-size: 18px;
    font-weight: 500;
  }

  ${device.desktop} {
    font-size: 18px;
  }
`;

export const AdressRealtor = styled.p`
  color: #888b97;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  ${device.tablet} {
    font-size: 14px;
    font-weight: 500;
  }
`;
