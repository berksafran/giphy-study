import React from "react";
import PropTypes from "prop-types";
import { ButtonWrapper } from "./styles/styles";

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  disabled: PropTypes.bool  
};

function Button(props) {
  return (
    <ButtonWrapper
      disabled={props.disabled}
      onClick={props.onClick}
      bgColor={props.bgColor}
      textColor={props.textColor}
    >
      {props.text}
    </ButtonWrapper>
  );
}

export default Button;
