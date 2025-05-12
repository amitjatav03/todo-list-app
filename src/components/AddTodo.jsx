import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(todoText.trim()) {
      addTodo(todoText);
      setTodoText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add you tasks here"
        className="flex-grow px-4 py-3 bg-[#1f1f1f] text-white rounded-lg outline-none focus:ring-2 focus:ring-cyan-500 transition"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition shadow"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
