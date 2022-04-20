import  { useState } from 'react'
import {TodoInput} from './TodoInput'

import {TodoItems} from "./TodoItems"
import { nanoid } from 'nanoid';

function Todo() {
   const [todoList,setTodolist]=useState([]);

   const [complite,setComplite]=useState([]);

   function getData(todos){
     const playLoad={
       title:todos,
       status:false,
       id:nanoid(5),
     }    
      setTodolist([...todoList,playLoad]);
      // setComplite(playLoad.map((e)=>e.status ? e.title:""))
      if(playLoad.status){
        setComplite(playLoad.title)
      }
      else{
        setComplite("")
      }
   }
   const handleChange=(id)=>{
    setTodolist([...todoList.map((e)=>(e.id===id ? {...e, status: !e.status}:e)),]);
    showItem(id)
   }
   const showItem=(id)=>{
   }
   const removehandler=(id)=>{
    const newList = todoList.filter((item) => item.id !== id);

    setTodolist(newList);
   }
  return (
    <div>
      <TodoInput getData={getData}/>
      {todoList.map((e)=>(
        <TodoItems handleChange={handleChange} 
         removehandler={ removehandler} todosend={e}></TodoItems>
      ))}
      <button onClick={()=> {}}>Show Completed Todos</button>
     {complite}
    </div>
  )
}
export {Todo}
