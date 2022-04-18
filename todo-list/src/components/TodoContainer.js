import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 } from "uuid";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: v4(),
        title: "Score 2 hat tricks in the best league itw",
        completed: true,
      },
      {
        id: v4(),
        title: "Beat Liverpool",
        completed: false,
      },

      {
        id: v4(),
        title: "Get top 4",
        completed: false,
      },
    ],
  };

  handleChange = (id) => {
    // console.log("check", id);
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    // console.log("deleted", id);
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  addTodoItem = (title) => {
    // console.log(title);
    const newTodo = {
      id: v4(),
      title: title,
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <>
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </>
    );
  }
}

export default TodoContainer;
