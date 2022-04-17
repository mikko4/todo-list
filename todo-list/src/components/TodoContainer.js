import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Beat Liverpool",
        completed: false,
      },
      {
        id: 2,
        title: "Score 2 hat tricks in the best league itw",
        completed: true,
      },
      {
        id: 3,
        title: "Become the GOAT",
        completed: true,
      },
    ],
  };

  render() {
    return (
      <>
        <Header />
        <TodosList todos={this.state.todos} />
      </>
    );
  }
}

export default TodoContainer;
