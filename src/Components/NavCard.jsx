import React from "react";
import { Card, Nav, Dropdown, NavItem, NavLink } from "react-bootstrap";
import TaskCards from "./TaskCard";
import "./NavCard.css";

export function NavCardHead(props) {
  return (
    <div>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle className="dropdown" as={NavLink}>Options</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Nav.Link className="nav" onClick={props.clickNavCard} href="/all">
              Show all tasks
            </Nav.Link>
            <Nav.Link
              className="nav"
              onClick={props.clickNavCard}
              href="/complete"
            >
              Completed tasks
            </Nav.Link>
            <Nav.Link
              className="nav"
              onClick={props.clickNavCard}
              href="/incomplete"
            >
              Incompleted tasks
            </Nav.Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export function NavCardBody(props) {
  return (
    <div>
      {props.tasks.length >= 1 && props.navBaseChosen !== "" ? (
        <Card.Body>
          <Card.Text>
            {props.navBaseChosen === "all"
              ? props.tasks.map((el) => (
                  <TaskCards
                    element={el}
                    deleteItem={props.deleteItem}
                    isCompleted={props.isCompleted}
                  ></TaskCards>
                ))
              : props.tasks
                  .filter((el) =>
                    props.navBaseChosen === "complete"
                      ? el.isComplete === true
                      : el.isComplete === false
                  )
                  .map((el) => (
                    <TaskCards
                      element={el}
                      deleteItem={props.deleteItem}
                      isCompleted={props.isCompleted}
                    ></TaskCards>
                  ))}
          </Card.Text>
        </Card.Body>
      ) : null}
    </div>
  );
}
