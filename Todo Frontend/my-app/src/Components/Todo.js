
import React from 'react';

const Todo = ({ task, deleteTodo, editTodo }) => {
  return (
    <div className="bg-white p-4 rounded-md flex justify-between items-center mb-2">
      <span>{task.task}</span>
      <div>
        <button onClick={() => editTodo(task.id)} className="bg-yellow-500 text-white p-2 rounded-md mr-2">
          Edit
        </button>
        <button onClick={() => deleteTodo(task.id)} className="bg-red-500 text-white p-2 rounded-md">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
