import React, { useState } from "react";

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

  const todosList = todos.map((input, index) => (
    <tr key={index}>
      <td>{input.date}</td>
      <td>{input.desc}</td>
    </tr>
  ));
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

      <table>
        <tbody>
          <tr>
            <td>
              <b>Date</b>
            </td>
            <td>
              <b>Description</b>
            </td>
          </tr>
          {todosList}
        </tbody>
      </table>
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
