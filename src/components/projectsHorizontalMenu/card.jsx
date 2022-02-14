import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function Card({ title, itemId }) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <div
      role="button"
      style={{
        border: "1px solid",
        display: "inline-block",
        margin: "0 10px",
        width: "260px",
        userSelect: "none"
      }}
      tabIndex={0}
      className="card"
    >
      <div>
        <div>{title}</div>
        <div style={{ backgroundColor: visible ? "transparent" : "gray" }}>
          visible: {JSON.stringify(visible)}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "bisque",
          height: "200px"
        }}
      />
    </div>
  );
}
