import React, { Component, Fragment } from "react";
import {
  Button,
  Nav,
  Card,
  InputGroup,
  FormControl,
  Container,
  Col,
  Row,
} from "react-bootstrap";

export default class toDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navBaseChosen: "",
      tasks: [],
      currentTask: {
        value: "",
        id: "",
        isComplete: false,
      },
    };
    this.clickNavCard = this.clickNavCard.bind(this);
    this.isComplete = this.isComplete.bind(this);
    this.taskCards = this.taskCards.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Create elements to render
  inputBar() {
    return (
      <div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="to do"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={this.state.currentTask.value}
            onChange={this.handleOnChange}
          />
          <InputGroup.Append>
            <Button onClick={this.handleSubmit} variant="outline-secondary">
              Add task
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }

  navCard() {
    return (
      <div>
        <Card>
          <Card.Header>
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link onClick={this.clickNavCard} href="/all">
                  All
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={this.clickNavCard} href="/complete">
                  Complete
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={this.clickNavCard} href="/incomplete">
                  Incomplete
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          {this.state.tasks.length >= 1 && this.state.navBaseChosen !== "" ? (
            <Card.Body>
              <Card.Text>
                {this.state.navBaseChosen === "all"
                  ? this.state.tasks.map((el) => this.taskCards(el))
                  : this.state.tasks
                      .filter((el) =>
                        this.state.navBaseChosen === "complete"
                          ? el.isComplete === true
                          : el.isComplete === false
                      )
                      .map((el) => this.taskCards(el))}
              </Card.Text>
            </Card.Body>
          ) : null}
        </Card>
      </div>
    );
  }

  //Create functions to manipulate the elements

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
    this.setState({
      tasks: [...this.state.tasks, this.state.currentTask],
      currentTask: {
        value: "",
        id: "",
        isComplete: false,
      },
    });
  };

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

  isComplete = (e) => {
    e.preventDefault();
    const taskIndex = this.state.tasks.findIndex((el) => el.id === e.target.id);
    let newArray = [...this.state.tasks];
    newArray[taskIndex] = {
      ...newArray[taskIndex],
      isComplete: !this.state.tasks[taskIndex].isComplete,
    };

    this.setState({
      tasks: newArray,
    });
  };

  deleteItem = (e) => {
    e.preventDefault();
    let newArray = this.state.tasks
      .filter((el) => el.id !== e.target.id)
      .map((el) => el);

    this.setState({
      tasks: newArray,
    });
  };

  taskCards = (el) => {
    return (
      <div>
        {el.value}{" "}
        <Fragment>
          {el.isComplete === true ? (
            <Button id={el.id} onClick={this.isComplete} variant="primary">
              Incomplete
            </Button>
          ) : (
            <Fragment>
              {" "}
              <Button id={el.id} onClick={this.isComplete} variant="primary">
                Complete
              </Button>
            </Fragment>
          )}
        </Fragment>
        <Fragment>
          {" "}
          <Button id={el.id} onClick={this.deleteItem} variant="primary">
            Delete
          </Button>
        </Fragment>
      </div>
    );
  };

  render() {
    return (
      <div>
        {" "}
        <Container className="container-fluid">
          <Row>
            <Col xs={3}></Col>
            <Col xs={6}>{this.inputBar()}</Col>
            <Col xs={3}></Col>
          </Row>
          <Row>
            <Col xs={2}></Col>
            <Col xs={8}>{this.navCard()}</Col>
            <Col xs={2}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
