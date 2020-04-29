import React from "react";
import "./SubHeader.scss";
import ellipsis from '../../assets/svg/ellipsis.svg';
import icon from '../../assets/svg/userIconRound.svg'

export default function SubHeader(props) {
    return (
        <div className="sub">
            <div className='sub__wrap'>
                <div className='sub__icon'>C</div>
                <h3 className="sub__title">{props.title}
                    {props.alert && <div className='sub__alert'></div>}
                </h3>
            </div>
            <div className='sub__wrap'>
                <p className="sub__team">{(props.userData.length + 1)} members</p>
                <img src={ellipsis} alt="" className="ellipsis" />
            </div>
        </div>
    )
}