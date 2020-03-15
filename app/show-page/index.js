import React from "react";

const ShowPage = props => {
  const { show } = props;
  console.log(5, show)
  return (
    <div>
      <p className="num-episodes">{show.episodes} episodes</p>
      <h2>{show.title}</h2>
    </div>
  );
};

export default ShowPage;
