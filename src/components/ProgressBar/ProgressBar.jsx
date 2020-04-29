import React from "react";
import "./ProgressBar.scss";
export default function ProgressBar(props) {
  return (
    <section className="progress__wrapper">
      <h2 className="progress__title">PROGRESS</h2>
      <div className="border"></div>
      <div className="progress">
        <div className="progress__in">{props.remaining}</div>
      </div>
      <p> {props.remaining} Tasks Left</p>
    </section>
  );
}
