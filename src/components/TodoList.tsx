import React, { useState } from "react";

import { ITodo } from "../interfaces";
import { RemoveItemDialog } from "./RemoveItemDialog";

interface todoListProps {
  todos: ITodo[]
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}

export const TodoList: (React.FC<todoListProps>) = ({todos, onToggle, onRemove}) => {

  const [todoId, setTodoId] = useState<number>(0)
  const [visible, setVisible] = useState<boolean>(false)

  const toggleVisibleHandler = () => {
    setVisible(!visible)
  }

  return(
    <>
    <ul className="todo-list">
      {todos.map(todo => {
        let classes = ['todo-item']
        if (todo.completed) classes.push('completed')
        
        return (<li  key={todo.id} className={classes.join(' ')}>
          <label>
            <input type="checkbox" checked={todo.completed} onChange={onToggle.bind(null, todo.id)} />
            <span>
              {todo.title}
            </span>
            <i className="material-icons" onClick={(e) => {
              e.preventDefault()
              setTodoId(todo.id)
              setVisible(true)
            }}>delete</i>
          </label>
        </li>)
      })}
    </ul>
    <RemoveItemDialog 
      id={todoId} 
      onRemove={onRemove} 
      visible={visible}
      onToggleVisible={toggleVisibleHandler}
    />
    </>
  )
}