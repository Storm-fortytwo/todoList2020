import React from "react";
import Teste from "./Components/Teste";
import ToDoList from "./ToDoList";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faThumbsUp);
library.add(faThumbsDown);
library.add(faTrash);

export default function () {
  return (
    <div className="App">
      <div className="container-fluid">
          <ToDoList></ToDoList>
      </div>
    </div>
  );
}
