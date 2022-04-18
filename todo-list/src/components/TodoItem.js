import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <p>
        <input
          type="checkbox"
          checked={this.props.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        &nbsp;
        <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
          Delete
        </button>
        &nbsp;
        {this.props.todo.title}
      </p>
    );
  }
}

export default TodoItem;
