import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TaskCard.css";

export default function taskCards(props) {
  return (
    <div>
      <h1>
        {props.element.value}
        <Fragment className="todoText">
          {props.element.isComplete === true ? (
            <Fragment className="buttons">
              <button
                type="button"
                className="btn btn-sm btn-success m-2 ml-auto"
                id={props.element.id}
                onClick={props.isCompleted}
              >
                <FontAwesomeIcon icon="thumbs-down" /> To do
              </button>
            </Fragment>
          ) : (
            <Fragment  className="buttons">
              {" "}
              <button
                type="button"
                className="btn btn-sm btn-warning m-2 ml-auto"
                id={props.element.id}
                onClick={props.isCompleted}
              >
               <FontAwesomeIcon icon="thumbs-up" /> Done
              </button>
            </Fragment>
          )}
        </Fragment>

        <button
          type="button"
          className="btn btn-sm btn-danger m-2 ml-auto"
          id={props.element.id}
          onClick={props.deleteItem}
        >
          <FontAwesomeIcon icon="trash"></FontAwesomeIcon> Delete
        </button>
      </h1>{" "}
    </div>
  );
}
