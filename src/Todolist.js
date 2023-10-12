import { useState } from "react"
import { Button } from '@chakra-ui/react';



function Todoedit({ todo, todos, setTodos, index }) {
  const [editText, setEditText] = useState(todo);
  const [disable, setdisable] = useState(true)

  function handleDeletetodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function handleSavetodo() {
    const newTodos = [...todos];
    newTodos[index] = editText;
    setTodos(newTodos);
  }


  return (
    <div style={{marginBottom: "12px"}}>
      <input readOnly={disable} text="text" className="input edit" value={editText} style={{border: '2px solid #ccc', fontFamily: 'Arial'}} 
        onChange={(e) => setEditText(e.target.value)} />
      <Button colorScheme="blue"
        onClick={() => { setdisable(false); }} >Edit</Button>
      <Button className="btn delete" colorScheme= 'red' style={{ marginTop: "5px", marginBottom: "5px", marginLeft: "5px", colorScheme: 'Red' }}
        onClick={() => handleDeletetodo(index)} >Delete</Button>
      <Button className="btn save" colorScheme="green" style={{ marginTop: "5px", marginBottom: "5px", marginLeft: "5px" }}
        onClick={() => { handleSavetodo(index); setdisable(true); }} >Save</Button>
    </div>

  )

}


function Todolist() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setnewTodo] = useState();

  function handleAddtodo() {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo.trim()]);
      setnewTodo("");
    }
  };


  return (
    <>
      <h1 style={{display: 'block',
    fontSize: '2em',
    marginTop: '0.67em',
    marginBottom: '0.67em',
    marginLeft: 0,
    marginRight: 0,
    fontWeight: 'bold'}}>To do List</h1>
      <div style={{marginBottom: '1.5rem'}}>
        <input text="text" className="input type" value={newTodo} style={{border: '2px solid #ccc', fontFamily: 'Arial'}} onChange={(e) => setnewTodo(e.target.value)} 
        onKeyDown = {(e) => { if (e.key === 'Enter') {
            handleAddtodo();  
        }}}/>
        <Button className="btn add" colorScheme="blue" style={{marginLeft: '0.50em'}} onClick={handleAddtodo}>Add</Button>
     </div>
      <ul style={{listStyleType: 'none'}}>
        {todos.map((todo, index) => (
          <li key={index}>
            <Todoedit todo={todo} setTodos={setTodos} index={index} todos={todos} />

          </li>
        ))}
      </ul>
    </>
  );

};

export default Todolist;