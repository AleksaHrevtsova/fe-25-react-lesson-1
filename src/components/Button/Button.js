import React from "react";
import { Button as BsBtn } from "react-bootstrap";

const Button = ({ name }) => {
  return <BsBtn variant="success">{name}</BsBtn>;
};
export default Button;
