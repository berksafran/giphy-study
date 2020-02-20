import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Loading from "../../Loading";
import { GifItemWrapper } from "./styles/styles";

GifItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  originalUrl: PropTypes.string.isRequired,
};

function GifItem(props) {
  const [loading, setLoading] = useState(true);
  const [imageProp, setImageProp] = useState({
    url: ""
  });

  useEffect(() => {
    const gif = new Image();
    gif.src = props.imageUrl;
    gif.onload = async () => {
      await setLoading(false);
      await setImageProp(prevState => {
        return {
          ...prevState,
          url: props.imageUrl
        };
      });
    };
  }, [props.imageUrl]);

  if (loading) return <Loading />;

  return (
    <GifItemWrapper imgWidth={props.width} imgHeight={props.height}>
      <a href={props.originalUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageProp.url} alt={props.title} />
        <div className="middle">
          <div className="text">Click to open in a new tab</div>
          <div className="text">{props.title}</div>
        </div>
      </a>
    </GifItemWrapper>
  );
}

export default GifItem;
