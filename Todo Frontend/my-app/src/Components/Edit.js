
import React, { useState } from 'react';

const Edit = ({ task, editTodo }) => {
  const [inputValue, setInputValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(inputValue, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md flex justify-between items-center mb-2">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full p-2 rounded-md"
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded-md ml-2">
        Save
      </button>
    </form>
  );
};

export default Edit;
