import React from "react";
import {
  SectionReview,
  ReviewParagraph,
  ContainerParagraph,
  ParagraphTitle,
} from "./Review.styled.jsx";

import SliderAboutUs from "./SliderAboutUs.jsx";

export const Review = () => {
  return (
    <SectionReview>
      <ContainerParagraph>
        <ReviewParagraph>See Our Review</ReviewParagraph>
      </ContainerParagraph>
      <ParagraphTitle>What Our User Say About Us</ParagraphTitle>
      <div>
        <SliderAboutUs />
      </div>
    </SectionReview>
  );
};
