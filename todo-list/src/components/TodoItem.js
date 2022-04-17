import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <p>
        <input type="checkbox" /> 
        &nbsp;
        {this.props.todo.title}
        {/* &nbsp;
        <input type="date"/> */}
      </p>
    );
  }
}

export default TodoItem;
