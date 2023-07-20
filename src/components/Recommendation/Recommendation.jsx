import { useState } from "react";
import {
  SectionRecommendation,
  RecommendationParagraph,
  RecomendTitle,
  ButtonHouse,
  ButtonVilla,
  ButtonApartment,
  Container,
  ContainerButton,
  ButtonDiv,
  IconDiv,
  IconHouse,
  ButtonArrowRight,
  ButtonArrowLeft,
  IconArrow,
  SliderContainer,
  ContainerSlide,
  ImageSlide,
  ContainerImg,
  SlideTitle,
  SlideTitleSmall,
  ContainerInformRealtor,
  ImageRealtor,
  ContainerNameRealtor,
  NameRealtor,
  AdressRealtor,
  ContainerImage,
  NoResultsText,
  NoResultsContainer,
  ContainerArrowButton,
} from "./Recommendation.styled.jsx";

import { ReactComponent as IconPopular } from "../../image/SliderRecomendationIcon/IconPopular.svg";
import { ReactComponent as IconNewHouse } from "../../image/SliderRecomendationIcon/IconNewHouse.svg";
import { ReactComponent as IconBestDetails } from "../../image/SliderRecomendationIcon/IconBestDetails.svg";
import iconHouse from "../../image/Recomendationicon/house.svg";
import iconHouseActive from "../../image/Recomendationicon/houseActive.svg";
import iconVilla from "../../image/Recomendationicon/villa.svg";
import iconVillaActive from "../../image/Recomendationicon/villaActive.svg";
import iconApartment from "../../image/Recomendationicon/apartment.svg";
import iconApartmentActive from "../../image/Recomendationicon/apartmentActive.svg";
import arrowLeft from "../../image/Recomendationicon/arrowLeft.svg";
import arrowLeftActive from "../../image/Recomendationicon/arrowLeftActive.svg";
import arrowRight from "../../image/Recomendationicon/arrowRight.svg";
import arrowRightActive from "../../image/Recomendationicon/arrowRightActive.svg";

import imageHouse from "../../image/SliderRecomendationIcon/ImageHouse.png";
import ImageWoodlandside from "../../image/SliderRecomendationIcon/ImageWoodlandside.png";
import imageOldLightHouse from "../../image/SliderRecomendationIcon/ImageOldLightHouse.png";
import cosmosHouse from "../../image/SliderRecomendationIcon/CosmosHouse.png";

import iconDianna from "../../image/sliderheroimage/Ellipse1.svg";
import iconRobert from "../../image/SliderRecomendationIcon/IconRobert.svg";
import iconRonald from "../../image/SliderRecomendationIcon/IconRonald.svg";
import iconJenny from "../../image/SliderRecomendationIcon/IconJenny.svg";

export const Recommendation = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const slides = [
    {
      id: 1,
      type: "house",
      image: imageHouse,
      icon: <IconPopular />,
      title: "Roselands House",
      price: "$ 35.000.000",
      realtor: {
        image: iconDianna,
        name: "Dianne Russell",
        address: "Manchester, Kentucky",
      },
    },
    {
      id: 2,
      type: "villa",
      image: ImageWoodlandside,
      icon: <IconNewHouse />,
      title: "Woodlandside",
      price: "$ 20.000.000",
      realtor: {
        image: iconRobert,
        name: "Robert Fox",
        address: "Dr. San Jose, South Dakota",
      },
    },
    {
      id: 3,
      type: "house",
      image: imageOldLightHouse,
      icon: <IconBestDetails />,
      title: "The Old Lighthouse",
      price: "$ 44.000.000",
      realtor: {
        image: iconRonald,
        name: "Ronald Richards",
        address: "Santa Ana, Illinois",
      },
    },
    {
      id: 4,
      type: "apartment",
      image: cosmosHouse,
      icon: <IconPopular />,
      title: "Cosmo's House",
      price: "$ 22.000.000",
      realtor: {
        image: iconJenny,
        name: "Jenny Wilson",
        address: "Preston Rd. Inglewood, Maine 98380",
      },
    },
    {
      id: 5,
      type: "villa",
      image: imageHouse,
      icon: <IconPopular />,
      title: "Roselands House",
      price: "$ 35.000.000",
      realtor: {
        image: iconDianna,
        name: "Dianne Russell",
        address: "Manchester, Kentucky",
      },
    },
    {
      id: 6,
      type: "house",
      image: cosmosHouse,
      icon: <IconPopular />,
      title: "Cosmo's House",
      price: "$ 22.000.000",
      realtor: {
        image: iconJenny,
        name: "Jenny Wilson",
        address: "Preston Rd. Inglewood, Maine 98380",
      },
    },
    {
      id: 7,
      type: "apartment",
      image: ImageWoodlandside,
      icon: <IconNewHouse />,
      title: "Woodlandside",
      price: "$ 20.000.000",
      realtor: {
        image: iconRobert,
        name: "Robert Fox",
        address: "Dr. San Jose, South Dakota",
      },
    },
  ];

  const [filteredSlides, setFilteredSlides] = useState(slides);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);

    if (buttonName === "house") {
      setFilteredSlides(slides.filter((slide) => slide.type === "house"));
    } else if (buttonName === "villa") {
      setFilteredSlides(slides.filter((slide) => slide.type === "villa"));
    } else if (buttonName === "apartment") {
      setFilteredSlides(slides.filter((slide) => slide.type === "apartment"));
    } else {
      setFilteredSlides(slides);
    }

    setActiveSlideIndex(0);
  };

  const handleArrowLeftClick = () => {
    setActiveButton("arrowLeft");
    setActiveSlideIndex((prevIndex) => {
      const newIndex =
        prevIndex > 0 ? prevIndex - 1 : filteredSlides.length - 1;
      return newIndex;
    });
  };

  const handleArrowRightClick = () => {
    setActiveButton("arrowRight");
    setActiveSlideIndex((prevIndex) => {
      const newIndex =
        prevIndex < filteredSlides.length - 1 ? prevIndex + 1 : 0;
      return newIndex;
    });
  };

  return (
    <>
      <SectionRecommendation>
        <RecommendationParagraph>Our Recommendation</RecommendationParagraph>
        <Container>
          <RecomendTitle>Featured House</RecomendTitle>
          <ContainerButton>
            <ButtonDiv>
              <ButtonHouse
                active={activeButton === "house"}
                onClick={() => handleButtonClick("house")}
              >
                <IconDiv>
                  {activeButton === "house" ? (
                    <IconHouse
                      src={iconHouseActive}
                      alt={iconHouseActive}
                      active={true}
                    />
                  ) : (
                    <IconHouse src={iconHouse} alt={iconHouse} active={false} />
                  )}
                </IconDiv>
                House
              </ButtonHouse>
            </ButtonDiv>

            <ButtonDiv>
              <ButtonVilla
                active={activeButton === "villa"}
                onClick={() => handleButtonClick("villa")}
              >
                <IconDiv>
                  {activeButton === "villa" ? (
                    <IconHouse
                      src={iconVillaActive}
                      alt={iconVillaActive}
                      active={true}
                    />
                  ) : (
                    <IconHouse src={iconVilla} alt={iconVilla} active={false} />
                  )}
                </IconDiv>
                Villa
              </ButtonVilla>
            </ButtonDiv>

            <ButtonDiv>
              <ButtonApartment
                active={activeButton === "apartment"}
                onClick={() => handleButtonClick("apartment")}
              >
                <IconDiv>
                  {activeButton === "apartment" ? (
                    <IconHouse
                      src={iconApartmentActive}
                      alt={iconApartmentActive}
                      active={true}
                    />
                  ) : (
                    <IconHouse
                      src={iconApartment}
                      alt={iconApartment}
                      active={false}
                    />
                  )}
                </IconDiv>
                Apartment
              </ButtonApartment>
            </ButtonDiv>
          </ContainerButton>
          <ContainerArrowButton>
            <ButtonArrowLeft
              active={activeButton === "arrowLeft"}
              onClick={handleArrowLeftClick}
            >
              {activeButton === "arrowLeft" ? (
                <IconArrow
                  src={arrowLeftActive}
                  alt={arrowLeftActive}
                  active={true}
                />
              ) : (
                <IconArrow src={arrowLeft} alt={arrowLeft} active={false} />
              )}
            </ButtonArrowLeft>
            <ButtonArrowRight
              active={activeButton === "arrowRight"}
              onClick={handleArrowRightClick}
            >
              {activeButton === "arrowRight" ? (
                <IconArrow
                  src={arrowRightActive}
                  alt={arrowRightActive}
                  active={true}
                />
              ) : (
                <IconArrow src={arrowRight} alt={arrowRight} active={false} />
              )}
            </ButtonArrowRight>
          </ContainerArrowButton>
        </Container>
        <SliderContainer>
          {filteredSlides.length > 0 ? (
            filteredSlides.map((slide, index) => (
              <ContainerSlide
                key={slide.id}
                style={{
                  transform: `translateX(calc(-${activeSlideIndex * 100}% - ${
                    activeSlideIndex * 40
                  }px)`,
                  transition: "transform 0.5s ease",
                }}
              >
                <ContainerImage>
                  <ImageSlide src={slide.image} alt={slide.image} />
                  {slide.icon}
                </ContainerImage>
                <SlideTitle>{slide.title}</SlideTitle>
                <SlideTitleSmall>{slide.price}</SlideTitleSmall>
                <ContainerInformRealtor>
                  <ContainerImg>
                    <ImageRealtor
                      src={slide.realtor.image}
                      alt={slide.realtor.image}
                    />
                  </ContainerImg>
                  <ContainerNameRealtor>
                    <NameRealtor>{slide.realtor.name}</NameRealtor>
                    <AdressRealtor>{slide.realtor.address}</AdressRealtor>
                  </ContainerNameRealtor>
                </ContainerInformRealtor>
              </ContainerSlide>
            ))
          ) : (
            <NoResultsContainer>
              <NoResultsText>No Results</NoResultsText>
            </NoResultsContainer>
          )}
        </SliderContainer>
      </SectionRecommendation>
    </>
  );
};
