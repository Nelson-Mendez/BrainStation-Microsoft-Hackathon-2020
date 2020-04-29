import React from "react";
import "./Icon.scss";
export default function Icon(props) {

    if (props.icon.hover) {
        return(
            <div className='icon--hovered'>
                <img className='icon__image' src={props.icon.image}/>
                <h5 className='icon__title'>{props.icon.title}</h5>
            </div>
        );
    } else {
        return(
            <div className='icon'>
                <img className='icon__image' src={props.icon.image}/>
                <h5 className='icon__title'>{props.icon.title}</h5>
            </div>
        );
    }
}