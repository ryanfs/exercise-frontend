import React from "react";
import { Link } from "react-router-dom";

const ShowNav = props => {
  const { shows } = props;
  return (
    <div style={{display: 'flex'}}>
      <hr />
      {Object.keys(shows).map(showId => (
        <Link key={showId} to={`/?id=${showId}`}>{showId}</Link>
      ))}
    </div>
  );
};

export default ShowNav;
