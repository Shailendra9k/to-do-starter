import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div>
      <header className="App-header">TodoList</header>
      <TodoList />
    </div>
  );
}
export default App;
