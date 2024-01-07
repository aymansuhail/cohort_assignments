import { useState } from "react"

export default function TodoList(){
let[todos,setTodo] = useState(["Sample task"])
let[newTodo,setNewtodo]= useState("")
function addNewtask(){
    setTodo([...todos, newTodo])
    setNewtodo("")
}
    return(
        <div>
            <input placeholder="Title" value={newTodo} onChange={function(e){
                setNewtodo( e.target.value) 
            }}></input> <br />
            {/* <input placeholder="Description"></input> <br /> */}
            <button onClick={addNewtask}>Add </button>
            <br /> <br />
            <h4>Todo List</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li>{todo}</li>
                    ))
                }
            </ul>
        </div>
    )
}