import {
  SectionReadyToSell,
  ReadyParagraph,
  Title,
  TitleSmall,
  TitleDetail,
  Info,
  TitleInfo,
  ContainerInfo,
  ContainerBedCar,
  ContainerBathStairs,
  ContainerLine,
  ContainerDirector,
  IconDirector,
  ContainerInfoDirector,
  DirectorName,
  DirectorJob,
  ContainerIcon,
  ContainerButton,
  Button,
  ContainerSlider,
  OrangeImage,
  ContainerInfoImage,
  YellowImage,
  Background,
  Picture,
} from "./ReadyToSell.styled.jsx";

import Slider from "./Slider.jsx";

import { ReactComponent as BedIcon } from "../../image/ReadyToSell/bed.svg";
import { ReactComponent as BathIcon } from "../../image/ReadyToSell/bath.svg";
import { ReactComponent as CarIcon } from "../../image/ReadyToSell/carGarage.svg";
import { ReactComponent as StairsIcon } from "../../image/ReadyToSell/stairs.svg";

import { ReactComponent as CallIcon } from "../../image/ReadyToSell/call.svg";
import iconRealtorDianna from "../../image/sliderheroimage/Ellipse1.svg";

import orangeImage from "../../image/ReadyToSell/OrangeSVG.svg";
import yellowImage from "../../image/ReadyToSell/YellowSVG.svg";

import BackgroundImage from "../../image/ReadyToSell/video.png";
import BackgroundImage2x from "../../image/ReadyToSell/video2x.png";
import { ReactComponent as PlayIcon } from "../../image/ReadyToSell/playIcon.svg";

export const ReadyToSell = () => {
  return (
    <>
      <div>
        <SectionReadyToSell>
          <ReadyParagraph>Ready to Sell!</ReadyParagraph>
          <ContainerInfoImage>
            <div>
              <div>
                <Title>Let’s tour and see our house!</Title>
                <TitleSmall>
                  Houses recommended by our partners that have been curated to
                  become the home of your dreams!
                </TitleSmall>
                <TitleDetail>House Detail</TitleDetail>
                <ContainerInfo>
                  <ContainerBedCar>
                    <Info>
                      <BedIcon />
                      <TitleInfo>4 Bedrooms</TitleInfo>
                    </Info>
                    <Info>
                      <CarIcon />
                      <TitleInfo>1 Carport</TitleInfo>
                    </Info>
                  </ContainerBedCar>
                  <ContainerBathStairs>
                    <Info>
                      <BathIcon />
                      <TitleInfo>2 Bathrooms</TitleInfo>
                    </Info>
                    <Info>
                      <StairsIcon />
                      <TitleInfo>2 Floors</TitleInfo>
                    </Info>
                  </ContainerBathStairs>
                </ContainerInfo>
                <ContainerLine />
              </div>
              <ContainerDirector>
                <ContainerIcon>
                  <IconDirector
                    src={iconRealtorDianna}
                    alt={iconRealtorDianna}
                  />
                </ContainerIcon>
                <ContainerInfoDirector>
                  <DirectorName>Dianne Russell</DirectorName>
                  <DirectorJob>Manager Director</DirectorJob>
                </ContainerInfoDirector>
                <ContainerButton>
                  <Button>
                    <CallIcon />
                    Contact Now
                  </Button>
                </ContainerButton>
              </ContainerDirector>
            </div>
            <ContainerSlider>
              <Background>
                <Picture>
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
                  <img src={BackgroundImage} alt="video" />
                </Picture>
                <PlayIcon />
              </Background>
              <Slider />
              <OrangeImage src={orangeImage} alt={orangeImage} />
              <YellowImage src={yellowImage} alt={yellowImage} />
            </ContainerSlider>
          </ContainerInfoImage>
        </SectionReadyToSell>
      </div>
    </>
  );
};
