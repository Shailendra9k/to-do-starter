import React from "react";
function TodoTable(props) {
  const todosList = props.todos.map((input, index) => (
    <tr key={index}>
      <td>{input.date}</td>
      <td>{input.desc}</td>
      <td>
        <button onClick={() => props.onDelete(index)}>Delete</button>
      </td>
    </tr>
  ));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>

        <tbody>{todosList}</tbody>
      </table>
    </div>
  );
}
export default TodoTable;
