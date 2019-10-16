function App() {
    const [todo, setTodo] = useState({desc: '', date: ''});
    const [todos, setTodos] = useState([]);
  
    const addTodo = (event) => {
      event.preventDefault();
      setTodos([...todos, todo]);
    }
  
    const inputChanged = (event) => {
      setTodo({...todo, [event.target.name]: event.target.value});
    } 
  
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              My Todolist
            </Typography>
          </Toolbar>
        </AppBar>
        
          <TextField style={{marginRight:10}} type='date' name='date' value={todo.date} onChange={inputChanged} />
          <TextField type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
          <Button type="submit"  variant="contained" color="primary" size="medium" onClick={addTodo}>Add<Button/>
          <table><tbody>
            {
              todos.map((todo, index) => 
                <tr key={index}>
                  <td>{todo.date}</td>
                  <td>{todo.desc}</td>
                </tr>
              }
          </tbody></table>
      </div>
    );
  }
  
  export default App;