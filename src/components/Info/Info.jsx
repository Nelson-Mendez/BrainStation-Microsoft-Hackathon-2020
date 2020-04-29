import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Info.scss";
import ModalInput from "../ModalInput/ModalInput";
export default function Info(props) {
  const [modalShow, setModalShow] = React.useState(false);
  //   const [currModal, setCurrModal] = React.useState({ response: null });
  const newTodo = (e) => {
    e.preventDefault();
    console.log(e.target[1].value);
  };
  return (
    <section className="info">
      {props.children}
      <div
        onClick={() => {
          //   setCurrModal(calModal());
          setModalShow(true);
        }}
      >
        {" "}
        <p>MODAL</p>
      </div>
      <ModalInput
        newTodo={newTodo}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </section>
  );
}
