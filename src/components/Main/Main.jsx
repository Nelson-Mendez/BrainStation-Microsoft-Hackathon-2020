import React, {Component} from "react";
import Sidebar from "../Sidebar/Sidebar";
import Info from "../Info/Info";
import LeftBar from "../LeftBar/LeftBar";
import MyTeam from "../MyTeam/MyTeam";
import "./Main.scss";

class Main extends Component {
  state = {
    tasks: true,
    teams: false
  }

  toggleTasks = () => {
    if (!this.state.tasks) {
      this.setState({ 
        teams: !this.state.teams, 
        tasks: !this.state.tasks 
      })
    }
  }

  toggleTeams = () => {
    if (!this.state.teams) {
      this.setState({ 
        teams: !this.state.teams, 
        tasks: !this.state.tasks 
      })
    }
  }


  render () {
    return (
      <article className="asside">
        <Sidebar />
        <LeftBar toggleTasks={this.toggleTasks} toggleTeams={this.toggleTeams} tasks={this.state.tasks}/>
        {this.state.tasks && <Info />}
        {this.state.teams && <MyTeam />}
        {/* <Info /> */}
      </article>
    );
  }
}

export default Main;
