import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{
  items: Todo[];
  onTodoItemClick: (id: string) => void;
}> = (props) => {
  const onTodoItemClick = (id: string) => {
    props.onTodoItemClick(id);
  };

  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onClick={() => onTodoItemClick(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
