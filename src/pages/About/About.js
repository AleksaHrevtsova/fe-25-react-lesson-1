import React from "react";
import s from "./About.module.css";
import Slider from "../../components/Carousel/Carousel";

const About = () => {
  return (
    <div className={s.about}>
      <h1>About</h1>
      <Slider />
    </div>
  );
};

export default About;
