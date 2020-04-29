import React from 'react';
import {userData} from '../../mockData';
import './MyTeam.scss';

export default class MyTeam extends React.Component {

    state= {
        buddy: userData[0]
    }
    
    render() {
        return(
            <div className="myTeam">
                <div className="myTeam__header">
                    <img></img>
                    <h3>My Team</h3>
                    <p>{(userData.length + 1)} members</p>
                </div>

                <div className="myTeam__information">
                    <div className="myTeam__members">
                        <h4>Other Team Members</h4>
                         {userData.map(user => 
                            <h5>{user.name} ({user.status})</h5>
                        )}
                    </div>

                    <div className="myTeam__buddy">
                        <h4>Buddy for today</h4>
                        <p>{this.state.buddy.name}</p>
                        <p>{this.state.buddy.name}'s Progress</p>
                        <p>{this.state.buddy.name}'s Tasks</p>

                        <div className="myTeam__buttons">
                            <button>Message</button>
                            <button>Encourage</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}