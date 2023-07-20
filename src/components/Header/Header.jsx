import {
  LogoImage,
  Paragraph,
  ContainerHeader,
  BackgroundGreen,
  BackgroundGreenTwo,
} from "./Header.styled.jsx";

import logo from "../../image/logo.svg";

import { Navigation } from "../Navigation/Navigation.jsx";
import GrenImage from "../../image/GreenSVG.svg";
import GrenImageTwo from "../../image/GreenSVG2.svg";

export const Header = () => {
  return (
    <>
      <ContainerHeader>
        <LogoImage src={logo} alt="logo" />
        <Paragraph>Hounter</Paragraph>
        <Navigation />
        <BackgroundGreen src={GrenImage} alt="ImageGreen" />
        <BackgroundGreenTwo src={GrenImageTwo} alt="GrenImageTwon" />
      </ContainerHeader>
    </>
  );
};
