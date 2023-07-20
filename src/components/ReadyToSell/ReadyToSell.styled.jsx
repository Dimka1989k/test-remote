import styled from "styled-components";
import { device } from "../../utils/mixin";

export const SectionReadyToSell = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;

  ${device.tablet} {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 60px;
    padding-right: 60px;
  }
  ${device.desktop} {
    padding-top: 60px;
    padding-bottom: 100px;
    padding-left: 120px;
    padding-right: 120px;
  }
`;

export const ReadyParagraph = styled.p`
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

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 0px;
  margin-top: 16px;
  ${device.tablet} {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-left: 0px;
    margin-top: 16px;
  }
  ${device.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-direction: row;
    margin-left: 40px;
    margin-top: 16px;
  }
`;

export const ContainerLine = styled.div`
  content: "";
  align-self: center;
  width: 100%;
  height: 2px;
  background-color: #f0f3fd;
  margin-top: 38px;
  margin-left: 0px;
  margin-bottom: 32px;
  ${device.tablet} {
    content: "";
    align-self: center;
    width: 100%;
    height: 2px;
    background-color: #f0f3fd;
    margin-top: 38px;
    margin-left: 0px;
    margin-bottom: 32px;
  }
  ${device.desktop} {
    content: "";
    width: 440px;
    height: 2px;
    background-color: #f0f3fd;
    margin-top: 38px;
    margin-left: 40px;
    margin-bottom: 32px;
  }
`;

export const ContainerBedCar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContainerBathStairs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 0px;
  margin-top: 16px;

  ${device.tablet} {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-left: 40px;
    margin-top: 0px;
  }
  ${device.desktop} {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-left: 53px;
    margin-top: 0px;
  }
`;

export const Title = styled.h2`
  color: #1b1c57;
  text-align: center;
  font-size: clamp(12px, 4vw, 32px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  margin-top: 28px;
  margin-bottom: 16px;

  ${device.tablet} {
    margin-top: 24px;
    text-align: center;
    color: #1b1c57;
    font-size: clamp(12px, 4vw, 32px);
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
    margin-bottom: 16px;
  }

  ${device.desktop} {
    color: #1b1c57;
    font-size: clamp(12px, 8vw, 32px);
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
    margin-top: 12px;
    margin-bottom: 16px;
    margin-left: 40px;
  }
`;

export const TitleSmall = styled.p`
  text-align: center;
  color: #626687;
  font-size: clamp(10px, 4vw, 16px);
  font-style: normal;
  font-weight: 400;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;

  ${device.tablet} {
    text-align: center;
    color: #626687;
    font-size: clamp(10px, 4vw, 16px);
    font-style: normal;
    font-weight: 400;
    line-height: 1.75;
    opacity: 0.75;
    margin-bottom: 16px;
    margin-left: 0px;
  }
  ${device.desktop} {
    text-align: start;
    color: #626687;
    font-size: clamp(10px, 8vw, 16px);
    font-style: normal;
    font-weight: 400;
    line-height: 1.75;
    opacity: 0.75;
    margin-left: 40px;
    width: 427px;
    margin-bottom: 16px;
  }
`;

export const TitleDetail = styled.p`
  text-align: center;
  color: #1b1c57;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.75;
  opacity: 0.75;
  margin-left: 0px;
  ${device.tablet} {
    text-align: center;
    color: #1b1c57;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.75;
    opacity: 0.75;
    margin-left: 0px;
  }
  ${device.desktop} {
    text-align: start;
    color: #1b1c57;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.75;
    opacity: 0.75;
    margin-left: 40px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const TitleInfo = styled.p`
  color: #3c4563;
  font-size: 14px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  text-transform: capitalize;
  margin-left: 8px;

  ${device.tablet} {
    color: #3c4563;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
    margin-left: 16px;
  }
  ${device.desktop} {
    color: #3c4563;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
    margin-left: 16px;
  }
`;

export const ContainerDirector = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0px;
  ${device.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
  }
  ${device.desktop} {
    flex-direction: row;
    display: flex;
    margin-left: 0px;
  }
`;

export const IconDirector = styled.img`
  width: 56px;
  height: 56px;
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerInfoDirector = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0px;

  ${device.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-left: 24px;
  }
  ${device.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin-left: 24px;
  }
`;

export const DirectorName = styled.p`
  color: #0e1735;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 4px;
`;

export const DirectorJob = styled.p`
  color: #888b97;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;

export const ContainerButton = styled.div``;

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.6;
  border: none;
  border-radius: 32px;
  background: #10b981;
  padding: 12px 16px;
  margin-left: 0px;
  margin-top: 20px;

  svg {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }

  ${device.tablet} {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.6;
    border: none;
    border-radius: 32px;
    background: #10b981;
    padding: 12px 16px;
    margin-left: 30px;
    margin-top: 0px;

    svg {
      width: 24px;
      height: 24px;
      margin-right: 16px;
    }
  }
  ${device.tablet} {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.6;
    border: none;
    border-radius: 32px;
    background: #10b981;
    padding: 12px 16px;
    margin-left: 59px;
    margin-top: 0px;

    svg {
      width: 24px;
      height: 24px;
      margin-right: 16px;
    }
  }
`;

export const ContainerSlider = styled.div`
  margin-left: 0px;
  position: relative;

  ${device.tablet} {
    margin-left: 0px;
    position: relative;
  }
  ${device.desktop} {
    margin-left: auto;
    position: relative;
  }
`;

export const ContainerInfoImage = styled.div`
  display: flex;
  flex-direction: column-reverse;

  ${device.tablet} {
    display: flex;
    flex-direction: column-reverse;
  }

  ${device.desktop} {
    display: flex;
    flex-direction: row;
  }
`;

export const OrangeImage = styled.img`
  position: absolute;
  right: -20px;
  bottom: 160px;
  width: 138px;
  height: 194px;
  z-index: -1;
  ${device.mobile} {
    right: -20px;
    bottom: 260px;
    width: 238px;
    height: 294px;
    z-index: -1;
  }

  ${device.tablet} {
    right: -60px;
    bottom: 200px;
    width: 338px;
    height: 394px;
  }

  ${device.desktop} {
    right: -120px;
    bottom: 200px;
    width: 438px;
    height: 494px;
  }
`;

export const YellowImage = styled.img`
  position: absolute;
  right: -20px;
  bottom: 139px;
  width: 138px;
  height: 194px;
  z-index: -1;
  ${device.mobile} {
    right: -20px;
    bottom: 239px;
    width: 238px;
    height: 294px;
  }

  ${device.tablet} {
    right: -60px;
    bottom: 69px;
    width: 338px;
    height: 394px;
  }
  ${device.desktop} {
    right: -120px;
    bottom: 69px;
    width: 438px;
    height: 494px;
  }
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  svg {
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 48px;
    height: 48px;
  }

  ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    svg {
      display: flex;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 48px;
      height: 48px;
    }
  }

  ${device.desktop} {
    display: flex;
    position: relative;

    svg {
      display: flex;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 48px;
      height: 48px;
    }
  }
`;

export const Picture = styled.picture`
  display: flex;
  justify-content: end;

  ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ${device.desktop} {
    display: flex;
    justify-content: end;
  }
`;
