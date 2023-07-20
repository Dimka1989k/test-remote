import styled from "styled-components";
import { device } from "../../utils/mixin";

import BackgroundImage from "../../image/MoreInfo/Background.png";

export const Icon = styled.img`
  position: absolute;
  top: 28px;
  left: 38px;
  width: 44px;
  height: 44px;
  ${device.mobile} {
    width: 40px;
    height: 40px;
  }
  ${device.tablet} {
    width: 60px;
    height: 60px;
    top: 38px;
    left: 38px;
  }

  ${device.desktop} {
    width: 81px;
    height: 81px;
    top: 38px;
    left: 38px;
  }
`;

export const IconDianna = styled.img`
  position: absolute;
  top: 73px;
  left: 77px;
  width: 40px;
  height: 40px;
  ${device.mobile} {
    top: 73px;
    left: 97px;
    width: 36px;
    height: 36px;
  }
  ${device.tablet} {
    top: 153px;
    left: 27px;
    width: 36px;
    height: 36px;
  }

  ${device.desktop} {
    top: 173px;
    left: 57px;
  }
`;

export const IconRonald = styled.img`
  position: absolute;
  top: 305px;
  left: 30px;
  width: 40px;
  height: 40px;

  ${device.mobile} {
    top: 351px;
    left: 104px;
    width: 36px;
    height: 36px;
  }
  ${device.tablet} {
    top: 125px;
    left: 110px;
    width: 36px;
    height: 36px;
  }

  ${device.desktop} {
    top: 71px;
    left: 204px;
  }
`;

export const IconHouse = styled.img`
  position: absolute;
  bottom: 21px;
  left: 104px;
  width: 40px;
  height: 40px;
  ${device.mobile} {
    bottom: 30px;
    left: 195px;
    width: 54px;
    height: 54px;
  }
  ${device.tablet} {
    bottom: 70px;
    left: 95px;
    width: 46px;
    height: 46px;
  }

  ${device.desktop} {
    bottom: 80px;
    left: 195px;
    width: 54px;
    height: 54px;
  }
`;

export const IconVilla = styled.img`
  position: absolute;
  top: 44px;
  right: 90px;
  width: 40px;
  height: 40px;
  ${device.mobile} {
    top: 44px;
    right: 120px;
    width: 40px;
    height: 40px;
  }
  ${device.tablet} {
    top: 34px;
    right: 90px;
    width: 50px;
    height: 50px;
  }

  ${device.desktop} {
    top: 44px;
    right: 200px;
    width: 70px;
    height: 70px;
  }
`;

export const IconHenry = styled.img`
  position: absolute;
  top: 74px;
  right: 20px;
  width: 40px;
  height: 40px;
  ${device.mobile} {
    top: 73px;
    right: 60px;
    width: 40px;
    height: 40px;
  }
  ${device.tablet} {
    top: 133px;
    right: 120px;
    width: 36px;
    height: 36px;
  }

  ${device.desktop} {
    top: 143px;
    right: 200px;
    width: 36px;
    height: 36px;
  }
`;

export const IconChair = styled.img`
  position: absolute;
  bottom: 60px;
  right: 73px;
  width: 55px;
  height: 55px;
  ${device.mobile} {
    bottom: 60px;
    right: 73px;
    width: 55px;
    height: 55px;
  }
  ${device.tablet} {
    bottom: 40px;
    right: 83px;
    width: 44px;
    height: 44px;
  }

  ${device.desktop} {
    bottom: 60px;
    right: 73px;
    width: 55px;
    height: 55px;
  }
`;

export const IconRed = styled.img`
  position: absolute;
  top: 320px;
  right: 152px;
  width: 36px;
  height: 36px;
  ${device.mobile} {
    top: 297px;
    right: 182px;
    width: 36px;
    height: 36px;
  }
  ${device.tablet} {
    top: 148px;
    right: 42px;
    width: 36px;
    height: 36px;
  }

  ${device.desktop} {
    top: 107px;
    right: 82px;
    width: 36px;
    height: 36px;
  }
`;
export const SectionMoreInfo = styled.section`
  position: relative;
  padding: 125px 0;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;
  border-radius: 32px;
  background-size: cover;
  background-position: center;
  text-align: center;
  align-self: center;
  background-image: url(${BackgroundImage});
  ${device.tablet} {
    padding: 95px 0;
    margin-left: 60px;
    margin-right: 60px;
  }

  ${device.desktop} {
    padding: 65px 0;
    margin-left: 120px;
    margin-right: 120px;
  }
`;

export const Title = styled.p`
  color: #1b1c57;
  margin: 0 auto;
  align-items: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  text-transform: capitalize;
  max-width: 260px;
  ${device.mobile} {
    font-size: 22px;
    max-width: 380px;
  }

  ${device.tablet} {
    font-size: 24px;
    max-width: 380px;
  }

  ${device.desktop} {
    font-size: 32px;
    max-width: 424px;
    width: 496px;
  }
`;

export const DivIcon = styled.div`
  position: relative;
`;
export const ConatinerInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Email = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: -37px;
  left: 14px;
  ${device.tablet} {
    top: -38px;
    left: 26px;
  }

  ${device.desktop} {
    top: -38px;
    left: 25px;
  }
`;

export const ButtonInput = styled.button`
  position: relative;
  padding: 16px 4px;
  align-items: center;
  border-radius: 32px;
  background: #10b981;
  border: none;
  color: #fff;
  font-size: 8px;
  font-weight: 600;
  line-height: 1.6;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: -48px;
  left: 190px;
  ${device.mobile} {
    padding: 14px 12px;
    font-size: 10px;
    top: -48px;
    left: 177px;
  }

  ${device.tablet} {
    font-size: 12px;
    padding: 12px 16px;
    top: -48px;
    left: 275px;
  }

  ${device.desktop} {
    padding: 12px 16px;
    top: -48px;
    left: 371px;
  }
`;

export const Input = styled.input`
  margin-top: 16px;
  width: 260px;
  padding: 16px 12px 16px 44px;
  align-items: center;
  border-radius: 32px;
  border: 1px solid #e0e3eb;
  background: #fff;

  ::placeholder {
    color: #888b97;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.57;
    margin-left: 0px;
  }

  :focus {
    outline: none;
  }

  ${device.tablet} {
    padding: 16px 12px 16px 64px;
    margin-top: 32px;
    width: 400px;
    ::placeholder {
      font-size: 14px;
      font-weight: 500;
      margin-left: 16px;
    }
  }

  ${device.desktop} {
    margin-top: 16px;
    width: 496px;
  }
`;
