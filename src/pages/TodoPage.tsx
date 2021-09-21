import React, { useState } from 'react'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { ITodo } from '../interfaces'

export const TodoPage: (React.FC) = () => {

  const [todos, setTodos] = useState<ITodo[]>([])

  const handlerAddTodo = (title: string) => {
    const newTodo: ITodo = {
      title,
      completed: false,
      deleted: false,
      id: Date.now()
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {

    const newTodos = todos.map(todo => {
      if (todo.id === id) todo.completed = !todo.completed
      return todo
    })

    setTodos(newTodos)
  }

  const removeHandler = (id: number) => {

    const newTodos = todos.filter(todo => todo.id !== id)

    setTodos(newTodos)
  }

  return(
    <div className="container">
      <TodoForm onAdd={handlerAddTodo} />
      <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
    </div>
  )
}