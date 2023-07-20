import styled from "styled-components";
import { device } from "../../utils/mixin";

export const LogoImage = styled.img`
  width: 36px;
  height: 36px;
  margin-top: 20px;

  ${device.tablet} {
    margin-top: 46px;
  }
`;

export const Paragraph = styled.p`
  color: #1b1c57;
  font-size: 16px;
  font-weight: 700;
  margin-top: 26px;
  margin-left: 10px;
  ${device.tablet} {
    margin-top: 56px;
    margin-left: 12px;
  }
`;

export const ContainerHeader = styled.header`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;

  ${device.tablet} {
    padding-left: 60px;
    padding-right: 60px;
  }

  ${device.desktop} {
    padding-left: 120px;
    padding-right: 120px;
  }
`;

export const BackgroundGreen = styled.img`
  display: none;

  ${device.desktop} {
    display: flex;
    position: absolute;
    width: 438px;
    height: 494px;
    left: 174px;
    top: -40px;
  }
`;

export const BackgroundGreenTwo = styled.img`
  display: none;

  ${device.desktop} {
    display: flex;
    position: absolute;
    width: 438px;
    height: 494px;
    left: 0px;
    top: 0px;
  }
`;
