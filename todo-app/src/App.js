import './App.css';
import {useState} from 'react';
//using useState to make Changes
//.map(like for loop)if already exist an array,we can get the data by using .map
//.filter:create a new array based onthe given condition
function App() {
  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2> Make it Productive🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id:Date.now(),text: toDo, status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
      {  toDos.map((obj)=>{

        return(<div className="todo">
          <div className="left">
            <input onChange={(e)=>{
                setToDos(toDos.filter(obj2=>{
                    if(obj2.id===obj.id){
                        obj2.status=e.target.checked
                    }
                    return obj2
                }))

            }}
            value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>)
             })
            }
            {toDos.map((obj)=>{
                if(obj.status){
                    return(<h2>{obj.text}</h2>)
                }
                return null
            })}
      </div>
    </div>
  );
}
export default App;
