import React from "react";
import { Link } from "react-router-dom";

//import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function Card({ title, img, text, itemId }) {
//  const visibility = React.useContext(VisibilityContext);

 // const visible = visibility.isItemVisible(itemId);

  return (
    <Link to={"/"+ itemId}>
    <div
      role="button"
      style={{
        border: "1px solid",
        display: "inline-block",
        margin: "0px 10px",
        width: "420px",
        userSelect: "none"
      }}
      tabIndex={0}
      className="card"
    >
      <div id = 'row'>
        <div><h3>{title}</h3></div>
        <div className='thumbnail' style={{
           height: "420px"
          }}>
          {' '}
          <img src={img} alt='...' className='team-img' />
            <div className='caption'>
              <p>{text}</p>
            </div>
        </div>
      </div>
    </div>
    </Link>
  );
}
