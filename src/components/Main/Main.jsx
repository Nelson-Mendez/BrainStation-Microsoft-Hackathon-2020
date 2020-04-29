import React, {Component} from "react";
import Sidebar from "../Sidebar/Sidebar";
import Info from "../Info/Info";
import LeftBar from "../LeftBar/LeftBar";
import MyTeam from "../MyTeam/MyTeam";
import "./Main.scss";

class Main extends Component {
  state = {
    tasks: true,
  }

  toggle = () => {
    this.setState(
      {
        tasks: !this.state.tasks,
      }
    )
  }
  render () {
    return (
      <article className="asside">
        <Sidebar />
        <LeftBar toggle={this.toggle} tasks={this.state.tasks}/>
        {this.state.tasks && <Info />}
        {!this.state.tasks && <MyTeam />}
        {/* <Info /> */}
      </article>
    );
  }
}

export default Main;
