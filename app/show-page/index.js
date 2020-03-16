import React from "react";
import images from '../images';

const ShowPage = props => {
  const { show } = props;
  const imgSrc = images[show.product_image_url].default;
  return (
    <div className="show-page-container">
      <img src={imgSrc} alt={show.title} />
      <p className="num-episodes">{show.episodes} episodes</p>
      <h2>{show.title}</h2>
    </div>
  );
};

export default ShowPage;
