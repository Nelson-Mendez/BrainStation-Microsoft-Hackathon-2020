import React from "react";
import "./Leftbar.scss";
import tasks from '../../assets/svg/tasks-icon.svg';
import people from '../../assets/svg/people-icon.svg';


class Leftbar extends React.Component{

  changeHighlight = () => {
    let item;
    let other;
    if (this.props.tasks) {
      item = document.getElementById('tasks');
      other = document.getElementById('teams');
    } else {
      item = document.getElementById('teams');
      other = document.getElementById('tasks');
    }
    item.classList.add("leftbar__box--highlight");
    other.classList.remove("leftbar__box--highlight")
  }

  componentDidMount() {
    this.changeHighlight()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.tasks !== this.props.tasks) {
      this.changeHighlight()
    }
  }

  render() {
    return (
      <section className="leftbar">
        <h3 className="leftbar__title">Productivity</h3>
        <div id='tasks' className="leftbar__box" onClick={this.props.toggleTasks}>
          <img className="leftbar__img" src={tasks}/>
          <h5 className="leftbar__task">My Tasks</h5>
        </div>
        <div id='teams' className="leftbar__box" onClick={this.props.toggleTeams}>
          <img className="leftbar__img" src={people}/>
          <h5 className="leftbar__task">My Teams</h5>
        </div>
      </section>);
  }
}

export default Leftbar;
