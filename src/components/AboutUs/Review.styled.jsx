import styled from "styled-components";
import { device } from "../../utils/mixin";

export const SectionReview = styled.section`
  overflow: hidden;
  padding: 20px;

  ${device.tablet} {
    padding: 30px 0px;
  }

  ${device.desktop} {
    padding: 60px 0px;
  }
`;

export const ContainerParagraph = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReviewParagraph = styled.p`
  display: flex;
  flex-direction: column;
  color: #f59e0b;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  ::before {
    display: flex;
    align-self: center;
    content: "";
    width: 32px;
    height: 1px;
    background-color: #f59e0b;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
  }
`;

export const ParagraphTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1b1c57;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  margin-top: 12px;
  margin-bottom: 37px;
`;
