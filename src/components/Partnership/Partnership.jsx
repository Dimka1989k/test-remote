import {
  SectionPartnership,
  ContainerParagraph,
  Paragraph,
  ParagraphTitle,
  Button,
  ContainerButton,
  ConatinerHouseImage,
  HouseSmall,
  HouseBiger,
  ConatinerDirector,
  Icon,
  NameDirector,
  Title,
  Container,
  IconContainer,
  IconTime,
  TextTime,
  ContainerInfoPartnership,
  TitleBig,
  Text,
  ConatinerDirectorCameron,
  IconSVG,
  IconSVG2,
} from "./Partnership.styled.jsx";

import InTheHouse from "../../image/Partnership/InTheHouse.png";
import InTheHouse2x from "../../image/Partnership/InTheHouse2x.png";
import SmallHouse from "../../image/Partnership/SmallHouse.png";
import SmallHouse2x from "../../image/Partnership/SmallHouse2x.png";
import iconDianna from "../../image/sliderheroimage/Ellipse1.svg";
import iconHenry from "../../image/Partnership/IconHenr.svg";
import IconRobertson from "../../image/Partnership/IconRobertson.svg";
import ImageVilla from "../../image/Partnership/Villa.png";
import ImageVilla2x from "../../image/Partnership/Villa2x.png";
import WhiteHouse from "../../image/Partnership/WhiteHouse.png";
import WhiteHouse2x from "../../image/Partnership/WhiteHouse2x.png";
import IconCameron from "../../image/Partnership/IconCameron.svg";
import time from "../../image/Partnership/time.svg";

import PartnershipSVG from "../../image/Partnership/PartnershipSVG.svg";
import PartnershipSVG2 from "../../image/Partnership/PartnershipSVG2.svg";

export const Partnership = () => {
  return (
    <SectionPartnership>
      <IconSVG src={PartnershipSVG} alt={PartnershipSVG} />
      <IconSVG2 src={PartnershipSVG2} alt={PartnershipSVG2} />
      <ContainerParagraph>
        <Paragraph>See tips and trick from our partnership</Paragraph>
      </ContainerParagraph>
      <ContainerParagraph>
        <ParagraphTitle>
          Find out more about selling and buying homes
        </ParagraphTitle>
      </ContainerParagraph>
      <ContainerButton>
        <Button>More Artikel</Button>
      </ContainerButton>
      <ConatinerHouseImage>
        <HouseSmall>
          <ContainerInfoPartnership>
            <picture>
              <source
                srcSet={`${InTheHouse} 1x, ${InTheHouse2x} 2x`}
                media="(max-width: 767px)"
              />
              <source
                srcSet={`${InTheHouse} 1x, ${InTheHouse2x} 2x`}
                media="(max-width: 1279px)"
              />
              <source
                srcSet={`${InTheHouse} 1x, ${InTheHouse2x} 2x`}
                media="(min-width: 1280px)"
              />
              <source
                srcSet={`${InTheHouse} 1x, ${InTheHouse2x} 2x`}
                media="(min-width: 1440px)"
              />
              <img src={InTheHouse} alt="home-girl_and_dog" />
            </picture>

            <Container>
              <ConatinerDirector>
                <Icon src={iconDianna} alt={iconDianna} />
                <NameDirector>Dianne Russell</NameDirector>
              </ConatinerDirector>
              <Title>
                The things we need to check when we want to buy a house
              </Title>

              <IconContainer>
                <IconTime src={time} alt={time} />
                <TextTime>4 min read | 25 Apr 2021</TextTime>
              </IconContainer>
            </Container>
          </ContainerInfoPartnership>
          <ContainerInfoPartnership>
            <picture>
              <source
                srcSet={`${SmallHouse} 1x, ${SmallHouse2x} 2x`}
                media="(max-width: 767px)"
              />
              <source
                srcSet={`${SmallHouse} 1x, ${SmallHouse2x} 2x`}
                media="(max-width: 1279px)"
              />
              <source
                srcSet={`${SmallHouse} 1x, ${SmallHouse2x} 2x`}
                media="(min-width: 1280px)"
              />
              <source
                srcSet={`${SmallHouse} 1x, ${SmallHouse2x} 2x`}
                media="(min-width: 1440px)"
              />
              <img src={SmallHouse} alt="home-girl_and_dog" />
            </picture>
            <Container>
              <ConatinerDirector>
                <Icon src={iconHenry} alt={iconHenry} />
                <NameDirector>Courtney Henry</NameDirector>
              </ConatinerDirector>
              <Title>
                7 Ways to distinguish the quality of the house we want to buy
              </Title>
              <IconContainer>
                <IconTime src={time} alt={time} />
                <TextTime>6 min read | 24 Apr 2021</TextTime>
              </IconContainer>
            </Container>
          </ContainerInfoPartnership>
          <ContainerInfoPartnership>
            <picture>
              <source
                srcSet={`${ImageVilla} 1x, ${ImageVilla2x} 2x`}
                media="(max-width: 767px)"
              />
              <source
                srcSet={`${ImageVilla} 1x, ${ImageVilla2x} 2x`}
                media="(max-width: 1279px)"
              />
              <source
                srcSet={`${ImageVilla} 1x, ${ImageVilla2x} 2x`}
                media="(min-width: 1280px)"
              />
              <source
                srcSet={`${ImageVilla} 1x, ${ImageVilla2x} 2x`}
                media="(min-width: 1440px)"
              />
              <img src={ImageVilla} alt="home-girl_and_dog" />
            </picture>
            <Container>
              <ConatinerDirector>
                <Icon src={IconRobertson} alt={IconRobertson} />
                <NameDirector>Darlene Robertson</NameDirector>
              </ConatinerDirector>
              <Title>
                The best way to know the quality of the house we want to buy
              </Title>
              <IconContainer>
                <IconTime src={time} alt={time} />
                <TextTime>2 min read | 24 Apr 2021</TextTime>
              </IconContainer>
            </Container>
          </ContainerInfoPartnership>
        </HouseSmall>
        <HouseBiger>
          <div>
            <picture>
              <source
                srcSet={`${WhiteHouse} 1x, ${WhiteHouse2x} 2x`}
                media="(max-width: 767px)"
              />
              <source
                srcSet={`${WhiteHouse} 1x, ${WhiteHouse2x} 2x`}
                media="(max-width: 1279px)"
              />
              <source
                srcSet={`${WhiteHouse} 1x, ${WhiteHouse2x} 2x`}
                media="(min-width: 1280px)"
              />
              <source
                srcSet={`${WhiteHouse} 1x, ${WhiteHouse2x} 2x`}
                media="(min-width: 1440px)"
              />
              <img src={WhiteHouse} alt="home-girl_and_dog" />
            </picture>
            <ConatinerDirectorCameron>
              <Icon src={IconCameron} alt={IconCameron} />
              <NameDirector>Cameron Williamson</NameDirector>
            </ConatinerDirectorCameron>
          </div>
          <TitleBig>12 Things to know before buying a house</TitleBig>
          <Text>
            Want to buy a house but are unsure about what we should know, here I
            will try to explain what we should know and check when we want to
            buy a house
          </Text>

          <IconContainer>
            <IconTime src={time} alt={time} />
            <TextTime>8 min read | 25 Apr 2021</TextTime>
          </IconContainer>
        </HouseBiger>
      </ConatinerHouseImage>
    </SectionPartnership>
  );
};
