import React from "react";
import "./ProgressBar.scss";
export default function ProgressBar(props) {
  return (
    <section className="progress__wrapper">
      <div className='progress__box'>
        <h2 className="progress__title">PROGRESS</h2>
      </div>
      
      <div className="progress">
        <div className="progress__in" style={{ width: `${props.progress.percent}%`}}></div>
      </div>
      <p className='progress__left'> {props.progress.left} Tasks Left</p>
    </section>
  );
}
