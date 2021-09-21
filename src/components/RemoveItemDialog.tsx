import React from "react";

interface removeItemDialogProps {
  id: number,
  visible: boolean
  onRemove: (id: number) => void,
  onToggleVisible: () => void,
}

export const RemoveItemDialog: (React.FC<removeItemDialogProps>) = ({
  id, 
  onRemove, 
  visible,
  onToggleVisible
}) => {

  const handlerCancelClick = () => {
    onToggleVisible()
  }

  const handlerApplyClick = (id: number) => {
    onRemove(id)
    onToggleVisible()
  }

  let classes = ['remove-dialog-container']
  if (!visible) classes.push('d-none')

  return(
    <div className={classes.join(' ')}>
      <div className="remove-dialog">
        <span>Are You shure?</span>
        <button className="apply" onClick={handlerApplyClick.bind(null, id)}>Yes</button>
        <button className="cancel" onClick={handlerCancelClick}>No</button>
      </div>
    </div>
  )
}
