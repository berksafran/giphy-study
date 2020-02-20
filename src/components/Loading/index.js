import React from "react";
import PropTypes from "prop-types";
import { LoadingWrapper } from "./styles/styles";

Loading.propTypes = {
  size: PropTypes.number,
  weight: PropTypes.number,
  padding: PropTypes.number
};

Loading.defaultProps = {
  size: 30,
  weight: 3,
  padding: 0
};

function Loading(props) {
  return (
    <LoadingWrapper
      size={props.size}
      weight={props.weight}
      padding={props.padding}
    />
  );
}

export default Loading;
