import styled from "styled-components";
import { device } from "../../utils/mixin";

export const ButtonSign = styled.button`
  color: #047857;
  font-weight: 600;
  line-height: 22px;
  padding: 12px 18px;
  align-items: center;
  border-radius: 32px;
  background: #d1fae5;
  border: none;
  cursor: pointer;
  margin-top: 12px;

  ${device.tablet} {
    color: #047857;
    font-weight: 600;
    line-height: 22px;
    padding: 12px 24px;
    align-items: center;
    border-radius: 32px;
    background: #d1fae5;
    border: none;
    margin-left: 12px;
    margin-top: 0px;
  }

  ${device.desktop} {
    color: #047857;
    font-weight: 600;
    line-height: 22px;
    padding: 12px 24px;
    align-items: center;
    border-radius: 32px;
    background: #d1fae5;
    margin-left: 56px;
    border: none;
    margin-top: 0px;
  }

  :hover {
    transform: scale(1.1);
    transition: transform 0.5s ease;
  }
`;
