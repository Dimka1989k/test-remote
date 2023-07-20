import {
  Footercontainer,
  ContainerFooter,
  FooterLogoLinksSocial,
  IconLogo,
  ContainerLogo,
  Title,
  TitleLogo,
  SocialItem,
  SocialItemList,
  IconSocial,
  ContainerLinksContacts,
  ContainerProperty,
  ContainerArticle,
  ContainerContacts,
  TitleInfo,
  Item,
  ImageSvgGreen,
  ImageSvgBlue,
} from "./Footer.styled.jsx";

import logo from "../../image/logo.svg";
import facebookIcon from "../../image/Footer/facebookIcon.svg";
import twiterIcon from "../../image/Footer/twiterIcon.svg";
import instaIcon from "../../image/Footer/instaIcon.svg";
import IconSVG3 from "../../image/Footer/IconSVG3.svg";
import IconSVG2 from "../../image/Footer/IconSVG2.svg";

export const Footer = () => {
  return (
    <Footercontainer>
      <ImageSvgGreen src={IconSVG3} alt={IconSVG3} />
      <ImageSvgBlue src={IconSVG2} alt={IconSVG2} />

      <ContainerFooter>
        <FooterLogoLinksSocial>
          <ContainerLogo>
            <IconLogo src={logo} />
            <TitleLogo>Hounter</TitleLogo>
          </ContainerLogo>
          <Title>
            We provide information about properties such as houses, villas and
            apartments to help people find their dream home
          </Title>
          <SocialItem>
            <SocialItemList>
              <IconSocial src={facebookIcon} alt={facebookIcon} />
            </SocialItemList>
            <SocialItemList>
              <IconSocial src={twiterIcon} alt={twiterIcon} />
            </SocialItemList>
            <SocialItemList>
              <IconSocial src={instaIcon} alt={instaIcon} />
            </SocialItemList>
          </SocialItem>
        </FooterLogoLinksSocial>
        <ContainerLinksContacts>
          <ContainerProperty>
            <TitleInfo>Property</TitleInfo>
            <ul>
              <Item>House</Item>
              <Item>Apartment</Item>
              <Item>Villa</Item>
            </ul>
          </ContainerProperty>
          <ContainerArticle>
            <TitleInfo>Article</TitleInfo>
            <ul>
              <Item>New Article</Item>
              <Item>Popular Article</Item>
              <Item>Most Read</Item>
              <Item>Tips & Tricks</Item>
            </ul>
          </ContainerArticle>
          <ContainerContacts>
            <TitleInfo>Contact</TitleInfo>
            <address>
              <ul>
                <Item>
                  <a href="https://goo.gl/maps/8Md3YcPntPyLdyUd6">
                    2464 Royal Ln. Mesa, New Jersey 45463
                  </a>
                </Item>
                <Item>
                  <a href="tel:(671) 555-0110">(671) 555-0110</a>
                </Item>
                <Item>
                  <a href="mailto:info@hounter.com">info@hounter.com</a>
                </Item>
              </ul>
            </address>
          </ContainerContacts>
        </ContainerLinksContacts>
      </ContainerFooter>
    </Footercontainer>
  );
};
