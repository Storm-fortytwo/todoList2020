import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Teste extends React.Component {
  state = {
    items: [
      {
        val: 1,
        id: "id 1",
      },
      {
        val: 2,
        id: "id 2",
      },
      {
        val: 3,
        id: "id 3",
      },
    ],
  };

  getItems = () => {
    let { items } = this.state;
    items = [
      {
        val: 1,
        id: 1,
      },
      {
        val: 2,
        id: 2,
      },
      {
        val: 3,
        id: 3,
      },
    ];
    setTimeout(() => {
      this.setState({ items });
    }, 1000);
  };

  /* componentDidMount() {
    this.getItems();
  } */

  removeItem = (name, e) => {
    console.log(`Removing: ${name}`);
    let { items } = this.state;
    items = items.filter((item) => item.id !== name);
    this.setState({ items: items });
  };

  render() {
    return (
      <div className="container w-50">
        
        {this.state.items &&
          this.state.items.map((item) => (
            <div key={item.id} className="row">
              <div className="col">{item.val}</div>
              <div className="col">{item.id}</div>
              <button
                type="button"
                className="btn btn-sm btn-secondary m-2 ml-auto"
                name={item.id}
                onClick={this.removeItem.bind(this, item.id)}
              >
                <FontAwesomeIcon icon="thumbs-up" />
              </button>
              
            </div>
          ))}
      </div>
    );
  }
}

export default Teste;
