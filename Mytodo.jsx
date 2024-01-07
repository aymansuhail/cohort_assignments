import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function Mytodo() 
{
    let [todos,settodos] = useState([ { [uuidv4()] : {title : "", description : "" , isDone : false} }])
    let [inputtodo,setinputtodo] = useState("")
    let[inputdesc,setinputdesc] = useState("") 
    function addbutton(){
        settodos((prevtodos)=>{
            return [...prevtodos,{title : inputtodo, description : inputdesc , id : uuidv4(), isDone : false}]
        })
        setinputtodo("")
        setinputdesc("")
    }
  function deletetodo(id){
    console.log(id)
   settodos (todos.filter(function(todo){
       return todo.id != id
    }))
  }
  function isComplete(id) {
    settodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      });
    });
  }

    return (
        <div>
        <input placeholder="Title" value={inputtodo} onChange={function(e){
            setinputtodo(e.target.value)
        }}></input>
        <br />

        <input placeholder="Description" value={inputdesc} onChange={function(e){
            setinputdesc(e.target.value)
            
        }}></input>

      <br />
        <button onClick={addbutton}>Add task</button>
       <br />
        <h3>Todo List</h3>
       <div>
       {
       Object.entries(todos).map(([id, todo]) => (
    
    <div key={id}>
    <span>
    <h3>{todo.title}</h3>
    <p>{todo.description}</p>
    </span>
    <button onClick={()=> deletetodo(todo.id)}>Delete</button>
    <br />
    {/* <button onClick={()=> isComplete(todo.id)}>Mark as done</button> */}
   
  </div>
))}
 
       </div>
        </div>
    )
}