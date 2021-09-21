import React, {useState} from "react";

interface todoFormProps{
  onAdd(title: string): void
}

export const TodoForm: React.FunctionComponent<todoFormProps> = props => {
    const [title, setTitle] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter') {
        props.onAdd(title)
        setTitle('')
      }
    }

    return (
        <div className="input-field mt2">
          <input 
            placeholder="Enter todo" 
            id="todo-input" 
            type="text" 
            className="validate"
            onChange={changeHandler}
            onKeyPress={keyPressHandler}
            value={title}
          />
          <label className="active" htmlFor="todo-input">Enter todo</label>
        </div>
    )
}