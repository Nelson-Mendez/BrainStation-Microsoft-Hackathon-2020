import React from 'react';
import {userData} from '../../mockData';
import ellipsis from '../../assets/svg/ellipsis.svg';
import './MyTeam.scss';

export default class MyTeam extends React.Component {

    state= {
        buddy: userData[0]
    }
    
    render() {
        return(
            <div className="myTeam">

                <div className="myTeam__header">
                    <div className="myTeam__icon">C</div>
                    <h3 className="myTeam__title">My Team</h3>
                    <p className="myTeam__teamSize">{(userData.length + 1)} members</p>
                    <img src={ellipsis} alt="" className="ellipsis" />
                </div>

                <div className="myTeam__information">

                    <div className="myTeam__members">
                        <h4 className="myTeam__subHeader">Other Team Members</h4>
                         {userData.map(user => <>
                            <h5 className="myTeam__name">{user.name} {user.status}</h5>
                            <p className="myTeam__position">{user.job}</p> </>
                        )}
                    </div>

                    <div className="myTeam__buddy">
                        <h4 className="myTeam__subHeader">Acountabilibuddy</h4>
                        <p className="myTeam__name">{this.state.buddy.name}</p>
                        <p className="myTeam__position">{this.state.buddy.job}</p>
                        <p className="myTeam__dropDown">{this.state.buddy.name}'s Progress</p>
                        <p className="myTeam__dropDown">{this.state.buddy.name}'s Tasks</p>

                        <div className="myTeam__buttons">
                            <button className="myTeam__message">Message</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}