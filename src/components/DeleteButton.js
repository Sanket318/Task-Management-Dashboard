
import React from 'react';

function DeleteButton({ taskId, onDelete }) {


const handleDelete = ()=>{
    onDelete(taskId);
}


  return (
    <button onClick={handleDelete}
    title="Delete Task"
    > Delete</button>
  );
}

export default DeleteButton;