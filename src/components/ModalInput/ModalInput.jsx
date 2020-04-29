import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export default function ModalInput(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form onSubmit={props.newTodo}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">NEW TODO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label for="todoInput">Todo</label>
          <input
            type="text"
            class="form-control"
            id="todoInput"
            placeholder="todo"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#4287f5", border: "#4287f5" }}
            onClick={props.onHide}
            type="submit"
          >
            Submit
          </Button>
          <Button
            style={{ backgroundColor: "#ff4056", border: "#ff4056" }}
            onClick={props.onHide}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
