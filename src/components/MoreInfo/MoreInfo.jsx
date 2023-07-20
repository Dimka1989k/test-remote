import { useState } from "react";
import {
  SectionMoreInfo,
  Title,
  ConatinerInput,
  Input,
  DivIcon,
  Email,
  ButtonInput,
  Icon,
  IconDianna,
  IconRonald,
  IconHouse,
  IconVilla,
  IconHenry,
  IconChair,
  IconRed,
} from "./Moreinfo.styled.jsx";

import EmailIcon from "../../image/MoreInfo/email.svg";

import ChairIcon from "../../image/MoreInfo/whiteChair.svg";
import imageDianna from "../../image/sliderheroimage/Ellipse1.svg";
import imageRonald from "../../image/SliderRecomendationIcon/IconRonald.svg";

import House from "../../image/MoreInfo/house.svg";
import villaNice from "../../image/MoreInfo/villaNice.svg";
import ImageHenry from "../../image/Partnership/IconHenr.svg";
import iconChair from "../../image/MoreInfo/imageChairWhite.svg";
import iconImage from "../../image/MoreInfo/iconRed.svg";

export const MoreInfo = () => {
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmaiError] = useState("This is a required field");

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      default:
        return;
    }
  };

  const emailHandler = (e) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmaiError("Incorrect email");

      if (!e.target.value) {
        setEmaiError("This is a required field");
      }
    } else {
      setEmaiError("");
    }
  };

  return (
    <SectionMoreInfo>
      <Icon src={ChairIcon} alt={ChairIcon} />
      <IconDianna src={imageDianna} alt={imageDianna} />
      <IconRonald src={imageRonald} alt={imageRonald} />
      <IconHouse src={House} alt={House} />
      <IconVilla src={villaNice} alt={villaNice} />
      <IconHenry src={ImageHenry} alt={ImageHenry} />
      <IconChair src={iconChair} alt={iconChair} />
      <IconRed src={iconImage} alt={iconImage} />

      <Title>Subscribe For More Info and update from Hounter</Title>
      <ConatinerInput>
        <form action="" autoComplete="on">
          <Input
            onBlur={blurHandler}
            onChange={emailHandler}
            type="email"
            name="email"
            placeholder="Your email here"
            pattern="[A-Za-zА-Яа-яЁёЄєЇї0-9._%+-]+@[A-Za-zА-Яа-яЁёЄєЇї0-9.-]+\.[A-Za-zА-Яа-яЁёЄєЇї]{2,4}$"
            title="Email may consist of letters, numbers and a mandatory character '@'"
            required
          />
          {emailDirty && emailError && (
            <div
              style={{
                color: "#EB5757",
                fontSize: 10,
                paddingTop: 4,
                position: "absolute",
              }}
            >
              {emailError}
            </div>
          )}

          <DivIcon>
            <Email src={EmailIcon} alt="EmailIcon" />
          </DivIcon>
          <ButtonInput type="submit">Subscribe Now</ButtonInput>
        </form>
      </ConatinerInput>
    </SectionMoreInfo>
  );
};
