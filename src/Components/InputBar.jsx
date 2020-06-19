import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export default function inputBar(props) {
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
        
          className="inputBar"
          value={props.currentTask.value}
          onChange={props.handleOnChange}
        />
        <InputGroup.Append>
          <Button onClick={props.handleSubmit} variant="danger">
            Add task
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}
