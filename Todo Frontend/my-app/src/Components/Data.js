
import React, { useState } from 'react';

const Data = ({ createTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter new task"
        className="w-full p-2 rounded-md"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 mt-2 rounded-md">
        Add Task
      </button>
    </form>
  );
};

export default Data;
