import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/mixin";

export const Footercontainer = styled.footer`
  padding: 20px 20px 20px 20px;
  position: relative;
  ${device.tablet} {
    padding: 60px 60px 60px 60px;
  }
  ${device.desktop} {
    padding: 120px 120px 127px 120px;
  }
`;

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  ${device.tablet} {
    display: flex;
    flex-direction: column;
  }

  ${device.desktop} {
    display: flex;
    flex-direction: row;
  }
`;

export const FooterLogoLinksSocial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${device.desktop} {
    display: flex;
    flex-direction: column;
    text-align: start;
    align-items: flex-start;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const IconLogo = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 12px;
`;

export const Title = styled.p`
  color: #626687;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.7;
  opacity: 0.75;
  max-width: 330px;
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const TitleLogo = styled.p`
  color: #1b1c57;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SocialItemList = styled.li`
  margin-right: 24px;
  :last-child {
    margin-right: 0px;
  }
`;

export const SocialItem = styled.ul`
  display: flex;
`;

export const IconSocial = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const ContainerLinksContacts = styled.div`
  ${device.tablet} {
    display: flex;
    margin-top: 44px;
    justify-content: center;
  }

  ${device.desktop} {
    margin-left: auto;
    margin-top: 0px;
    justify-content: start;
  }
`;
export const ContainerProperty = styled.div`
  margin-right: 0px;
  margin-top: 44px;
  text-align: center;
  ${device.tablet} {
    margin-right: 44px;
    margin-top: 0px;
  }
  ${device.desktop} {
    margin-right: 88px;
    text-align: start;
  }
`;
export const ContainerArticle = styled.div`
  margin-right: 0px;
  margin-top: 44px;
  text-align: center;
  ${device.tablet} {
    margin-right: 44px;
    margin-top: 0px;
  }
  ${device.desktop} {
    margin-right: 88px;
    text-align: start;
  }
`;

export const ContainerContacts = styled.div`
  margin-top: 44px;
  text-align: center;
  ${device.tablet} {
    margin-top: 0px;
  }
  ${device.desktop} {
    text-align: start;
  }
`;

export const TitleInfo = styled.p`
  margin-bottom: 24px;
`;

export const Item = styled.li`
  color: #888b97;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 18px;
  cursor: pointer;

  :last-child {
    margin-bottom: 0px;
  }

  a {
    color: #888b97;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 18px;

    :last-child {
      margin-bottom: 0px;
    }
  }
`;

export const Links = styled(NavLink)`
  color: #888b97;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ImageSvgGreen = styled.img`
  position: absolute;
  width: 338px;
  height: 394px;
  right: 46px;
  bottom: 0px;
  z-index: -1;

  ${device.desktop} {
    width: 438px;
    height: 494px;
    right: 46px;
  }
`;

export const ImageSvgBlue = styled.img`
  position: absolute;
  width: 338px;
  height: 394px;
  right: 0px;
  bottom: 0px;

  ${device.desktop} {
    width: 438px;
    height: 494px;
  }
`;
