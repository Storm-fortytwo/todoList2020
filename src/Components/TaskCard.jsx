import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TaskCard(props) {
  return (
    <div>
      <p
        className="justify-content-center"
        style={{
          backgroundColor: props.element.isComplete ? "#A9D575" : "#FF8660",
          fontSize: "20px",
          padding: "5px",
        }}
        id={props.element.id}
        onClick={props.isCompleted}
      >
        {props.element.value}{" "}
        <button
          style={{
            padding: "1px",
            position: "relative",
            float: "right",
            marginRight: 0,
            marginLeft: "auto",
          }}
          type="button"
          className="btn btn-sm btn-danger m-2 ml-auto"
          id={props.element.id}
          onClick={props.deleteItem}
        >
          <FontAwesomeIcon icon="trash"></FontAwesomeIcon> Delete
        </button>
      </p>
    </div>
  );
}
