import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import { LeftArrow, RightArrow } from "./arrows";
import { Card } from "./card";

import "./hideScrollbar.css";

const elemPrefix = "project-";
const getId = (index) => `${elemPrefix}${index}`;
const getIdYear = getId+2022

const getItems = (size) =>
  Array(size)
    .fill(0)
    .map((_, ind) => ({ id: getIdYear(ind) }));

function ProjectsMenu(props) {
  const [items] = React.useState(getItems(props["props"]["data"].length));

  var projects = [];
  for (var i = 0; i < props["props"]["data"].length; i++) {
    var element = props["props"]["data"][i];
    projects.push({
      id: items[i].id,
      icon: element.icon,
      name: element.name,
      text: element.text,
    });
  }

  return (
    <>
      <div className="projects">
        <div>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={onWheel}
          >
            {projects.map(({ id, icon, name, text }) => (
              <Card
                title={name}
                img={icon}
                text={text}
                itemId={id} // NOTE: itemId is required for track items
                key={id}
              />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
}
export default ProjectsMenu;

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
