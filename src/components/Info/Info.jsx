import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Info.scss";
import plus from "../../assets/svg/plus.svg";
import edit from "../../assets/svg/edit.svg";
import TaskItem from "../TaskItem/TaskItem";
import ModalInput from "../ModalInput/ModalInput";

let list = [
  { checked: true, title: "Email Account Manager about New Account" },
  { checked: false, title: "Take a lunch break at 12:30 PM" },
  {
    checked: false,
    title: "Hand off project mockups to Dev Team",
  },
  {
    checked: false,
    title: "30 Minute workout",
  },
];

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      setModalShow: false,
    };
  }

  render() {
    const newTodo = (e) => {
      e.preventDefault();
      console.log(e.target[1].value);
    };
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
                      this.setState({ setModalShow: true });
                    }}
                  >
                    <img src={plus} />
                  </div>
                  <div className="task__icon-box">
                    <img src={edit} />
                  </div>
                </div>
              </li>
              {list.map((item) => (
                <TaskItem task={item} />
              ))}
            </ul>
          </div>
        </div>

        <ModalInput
          newTodo={this.newTodo}
          show={this.state.modalShow}
          onHide={() => this.setState({ setModalShow: false })}
        />
      </section>
    );
  }
}
