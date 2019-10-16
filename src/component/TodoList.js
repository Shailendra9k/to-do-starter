import React, { useState } from "react";

function TodoList() {
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {};

  const inputChanged = () => {};
  return (
    <form onSubmit={addTodo}>
      <input type="text" onChange={inputChanged} value={desc} />
      <input type="submit" value="Add" />
    </form>
  );
}
export default TodoList;
