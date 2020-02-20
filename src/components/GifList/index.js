import React from "react";
import PropTypes from "prop-types";
import { GifListWrapper } from "./styles";
import GifItem from "./GifItem";

GifList.propTypes = {
  gifData: PropTypes.array.isRequired
};

function GifList(props) {
  const { gifData } = props;
  return (
    <GifListWrapper>
      <div className="gallery">
        {gifData &&
          gifData.map(gif => (
            <GifItem
              key={gif.id}
              imageUrl={gif.images.fixed_width_downsampled.url}
              title={gif.title}
              width={gif.images.fixed_width_downsampled.width}
              height={gif.images.fixed_width_downsampled.height}
              originalUrl={gif.images.original.mp4}
            ></GifItem>
          ))}
      </div>
    </GifListWrapper>
  );
}

export default GifList;
