import React from 'react'
import {Todo} from './Todo';

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='my=3'>Todo - List </h3>
      {props.todo.length===0?"No Todos to Display":
      props.todo.map((todo)=>{return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>})}
    </div>
  )
}
