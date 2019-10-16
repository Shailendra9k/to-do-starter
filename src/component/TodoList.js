import React, { useState } from "react";

function TodoList() {
  const [desc, setDesc] = useState({
    description: "",
    date: ""
  });
  const [todos, setTodos] = useState([]);

  const inputChanged = event => {
    setDesc({ ...desc, [event.target.name]: event.target.value });
  };

  const addTodo = event => {
    event.preventDefault();
    setTodos([...todos, desc]);
    setDesc([""]);
  };

  const todosList = todos.map((todo, index) => (
    <tr key={index}>
      <td>{todo.date}</td>
      <td>{todo.description}</td>
    </tr>
  ));

  return (
    <div>
      <form onSubmit={addTodo}>
        <label>Description:</label>
        <input
          type="text"
          name="desc"
          onChange={inputChanged}
          value={desc.description}
        />
        <input
          type="text"
          name="date"
          onChange={inputChanged}
          value={desc.date}
        />
        <input type="submit" value="Add" />
      </form>

      <table>
        <tbody>
          <tr>
            <td>Date</td>
            <td>Description</td>
          </tr>
          {todosList}
        </tbody>
      </table>
    </div>
  );
}
export default TodoList;
