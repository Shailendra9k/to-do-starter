import React, { useState } from "react";
import TodoTable from "./TodoTable";

function TodoList() {
  const [descState, setDesckstate] = useState({
    desc: "",
    date: ""
  });
  const [todos, setTodos] = useState([]);

  const inputChanged = event => {
    setDesckstate({ ...descState, [event.target.name]: event.target.value });
  };

  const addToDo = event => {
    event.preventDefault();
    setTodos([...todos, descState]);
    setDesckstate([""]);
  };

  const handleDelete = index => {
    const filtered = todos.filter((todo, i) => i !== index);
    setTodos(filtered);
  };

  // const todosList = todos.map((input, index) => (
  //   <tr key={index}>
  //     <td>{input.date}</td>
  //     <td>{input.desc}</td>
  //     <td>
  //       <button onClick={() => handleDelete(index)}>Delete</button>
  //     </td>
  //   </tr>
  // ));

  return (
    <div className="App">
      <form onSubmit={addToDo}>
        <label>Description:</label>
        <input
          type="text"
          name="desc"
          value={descState.desc}
          onChange={inputChanged}
        />
        <label>Date:</label>
        <input
          type="text"
          name="date"
          value={descState.date}
          onChange={inputChanged}
        />

        <input type="submit" value="Add" />
      </form>
      <TodoTable todos={todos} onDelete={handleDelete} />
    </div>
  );
}

export default TodoList;

// function TodoList() {
//   const [desc, setDesc] = useState({
//     description: "",
//     date: ""
//   });
//   const [todos, setTodos] = useState([]);

//   const inputChanged = event => {
//     setDesc({ ...desc, [event.target.name]: event.target.value });
//   };

//   const addTodo = event => {
//     event.preventDefault();
//     setTodos([...todos, desc]);
//     setDesc([""]);
//   };

//   const todosList = todos.map((todo, index) => (
//     <tr key={index}>
//       <td>{todo.date}</td>
//       <td>{todo.description}</td>
//     </tr>
//   ));

//   return (
//     <div>
//       <form onSubmit={addTodo}>
//         <label>Description:</label>
//         <input
//           type="text"
//           name="desc"
//           value={desc.description}
//           onChange={inputChanged}
//         />
//         <label>Date:</label>
//         <input
//           type="text"
//           name="date"
//           value={desc.date}
//           onChange={inputChanged}
//         />
//         <input type="submit" value="Add" />
//       </form>

//       <table>
//         <tbody>
//           <tr>
//             <td>Date</td>
//             <td>Description</td>
//           </tr>
//           {todosList}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default TodoList;
