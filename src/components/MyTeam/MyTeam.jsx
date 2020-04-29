import React from 'react';
import {userData} from '../../mockData';
import arrow from '../../assets/svg/right-arrow.svg'
import './MyTeam.scss';
import SubHeader from '../SubHeader/SubHeader';

export default class MyTeam extends React.Component {

    state= {
        buddy: userData[0],
        show1: false,
        show2: false
    }

    handleClick1 = () => {
        this.setState({ show1: !this.state.show1})
    }

    handleClick2 = () => {
        this.setState({ show2: !this.state.show2})
    }

    componentDidMount = () => {
        let num = Math.floor(Math.random() * userData.length);
        this.setState({ buddy: userData[num]})
    }
    
    render() {
        return(
            <div className="myTeam">

                <SubHeader userData={userData} title='My Team'/>

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
                        <div className="myTeam__partner">
                            <p className="myTeam__name">{this.state.buddy.name}</p>
                            <p className="myTeam__position">{this.state.buddy.job}</p>
                        </div>

                        <button className="myTeam__dropDown" onClick={this.handleClick1}>
                            {this.state.buddy.name}'s Progress <img className="arrow" src={arrow} alt=""/>
                        </button>

                        <button className="myTeam__dropDown" onClick={this.handleClick2}>
                            {this.state.buddy.name}'s Tasks  <img className="arrow" src={arrow} alt=""/>
                        </button>
                        {this.state.show2 && this.state.buddy.list.map(listItem => <p>{listItem}</p>)}

                        <div className="myTeam__buttons">
                            <button className="myTeam__message">Message</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}