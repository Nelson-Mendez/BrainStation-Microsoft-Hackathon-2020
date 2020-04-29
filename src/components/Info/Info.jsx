import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Info.scss";
import plus from "../../assets/svg/plus.svg";
import edit from "../../assets/svg/edit.svg";
import TaskItem from "../TaskItem/TaskItem";
import ModalInput from "../ModalInput/ModalInput";

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      setModalShow: false,
      progress: 0,
      list: [
        {
          checked: true,
          title: "Email Account Manager about New Account",
          position: 0,
        },
        {
          checked: false,
          title: "Take a lunch break at 12:30 PM",
          position: 1,
        },
        {
          checked: false,
          title: "Hand off project mockups to Dev Team",
          position: 2,
        },
        {
          checked: false,
          title: "30 Minute workout",
          position: 3,
        },
      ],
    };
  }

  //toChangeBranchName

  //In order to track progress check how many items in the list are checked and unchecked

  updateChecklist = (position) => {
    //This is passed down to each individual Task Item so when the box is pressed
    //it'll change the list items checked value here
    let updated = this.state.list.find((item) => item.position === position);
    updated.checked = !updated.checked;
    this.setState({
      list: this.state.list,
    });
  };

  render() {
    function updateProgress() {
      let x;
      for (let i = 0; i < this.state.list.length; i++) {
        x += this.state.list.length.checked;
      }
      this.setState({ progress: this.state.list.length / x });
    }

    return (
      <section className="info">
        {this.props.children}
        <div className="info__wrap">
          <div className="info__bar">{/*My Tasks bar*/}</div>
          <div className="info__container">
            <ul className="task">
              <li className="task__heading-box">
                <h3 className="task__heading">My Task List</h3>
                <div className="task__icon-wrap">
                  <div
                    className="task__icon-box"
                    onClick={() => {
                      this.setState({ modalShow: true });
                    }}
                  >
                    <img src={plus} />
                  </div>
                  <div className="task__icon-box">
                    <img src={edit} />
                  </div>
                </div>
              </li>

              {this.state.list.map((item) => (
                <TaskItem
                  task={item}
                  onClick={() => updateProgress()}
                  check={this.updateChecklist}
                />
              ))}
            </ul>
          </div>
        </div>

        <ModalInput
          newTodo={(e) => {
            e.preventDefault();
            this.state.list.push({
              title: e.target[1].value,
              checked: false,
              position: this.state.list.length,
            });
            // console.log(newList);
          }}
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
        />
      </section>
    );
  }
}
