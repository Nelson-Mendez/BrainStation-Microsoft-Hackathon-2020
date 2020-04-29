import React from "react";
import "./TaskItem.scss";
export default function TaskItem(props) {
  if (props.task.checked) {
    return (
      <div className="item--checked">
        <div className="item__box--checked"></div>
        <h4 className="item__title--checked">{props.task.title}</h4>
      </div>
    );
  } else {
    return (
      <div className="item">
        <div className="item__box"></div>
        <h4 className="item__title">{props.task.title}</h4>
      </div>
    );
  }
}
