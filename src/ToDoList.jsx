import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { NavCardHead, NavCardBody } from "./Components/NavCard";
import InputBar from "./Components/InputBar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ToDoList.css";

export default class toDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navBaseChosen: "all",
      tasks: [],
      currentTask: {
        value: "",
        id: "",
        isComplete: false,
      },
    };
  }

  //methods to InputBar
  handleOnChange = (e) => {
    e.preventDefault();
    this.setState({
      currentTask: {
        value: e.target.value,
        id: Date.now().toString(),
        isComplete: false,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.currentTask.value !== "") {
      this.setState({
        tasks: [...this.state.tasks, this.state.currentTask],
        currentTask: {
          value: "",
          id: "",
          isComplete: false,
        },
      });
      return;
    }
    toast.configure();
    const notify = () => {
      toast.error(
        "Write the task on the blank bar before adding it to the list",
        { autoclose: 10000 }
      );
    };
    notify();
  };

  //method to NavCard
  clickNavCard = (e) => {
    e.preventDefault();
    if (this.state.navBaseChosen === e.target.href.split("/").pop()) {
      this.setState({
        navBaseChosen: "",
      });
      return;
    }
    this.setState({
      navBaseChosen: e.target.href.split("/").pop(),
    });
  };

  //methods to TaskCards
  isCompleted = (e) => {
    e.preventDefault();
    const taskIndex = this.state.tasks.findIndex((el) => el.id === e.target.id);
    let tasksCopy = [...this.state.tasks];
    tasksCopy[taskIndex] = {
      ...tasksCopy[taskIndex],
      isComplete: !this.state.tasks[taskIndex].isComplete,
    };

    this.setState({
      tasks: tasksCopy,
    });
    console.log(tasksCopy);
  };

  deleteItem = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let tasksCopy = this.state.tasks
      .filter((el) => el.id !== e.target.id)
      .map((el) => el);

    this.setState({
      tasks: tasksCopy,
    });
  };

  render() {
    return (
      <div className="border rounded-lg">
        {" "}
        <Container className="container-fluid">
          <Row>
            <Col xs={2}></Col>
            <Col xs={8}>
              <InputBar
                currentTask={this.state.currentTask}
                handleOnChange={this.handleOnChange}
                handleSubmit={this.handleSubmit}
              ></InputBar>
            </Col>
            <Col xs={2}></Col>
          </Row>
          <div className="line border-top border-dark"></div>
          <Row>
            <Col xs={2}>
              <NavCardHead clickNavCard={this.clickNavCard}></NavCardHead>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col xs={12}>
              <NavCardBody //InputBar
                tasks={this.state.tasks}
                navBaseChosen={this.state.navBaseChosen}
                //TaskCards
                isCompleted={this.isCompleted.bind(this)}
                deleteItem={this.deleteItem.bind(this)}
              ></NavCardBody>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
