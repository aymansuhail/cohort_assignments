export default function Header(props)
{   
    function random (){
     r = Math.random()
    }
   return ( <div>
    <button onClick={random}>add name</button>
    <h1>{props.title}</h1>
    <h1>{props.title}</h1>
   </div>
   
    
   
    )
}