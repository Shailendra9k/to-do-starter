import React, { useState } from "react";

function TodoList() {
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);

  const inputChanged = event => {
    setDesc(event.target.value);
  };

  const addTodo = event => {
    event.preventDefault();
    setTodos([...todos, desc]);
  };

  const todosList = todos.map((todo, id) => (
    <tr key={id}>
      <td>{todo}</td>
    </tr>
  ));

  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" onChange={inputChanged} value={desc} />
        <input type="submit" value="Add" />
      </form>

      <table>
        <tbody>{todosList}</tbody>
      </table>
    </div>
  );
}
export default TodoList;
