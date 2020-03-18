import React from "react";
import { Link } from "react-router-dom";

const ShowNav = props => {
  const { shows, currentId } = props;

  return (
    <div>
      <div className="hr-grey line-top"></div>
      <div className="nav-bar-container">
        {Object.keys(shows).map((showId, index) => (
          <Link key={showId} className="nav-item-container" to={`/?id=${showId}`}>
            <div className={showId === currentId ? 'nav-box-selected': 'nav-box-unselected'}></div>
            <div className="nav-label">{index + 1}</div>
          </Link>
        ))}
      </div>
      <div className="hr-grey line-bottom"></div>
    </div>
  );
};

export default ShowNav;
