import React, { useState } from 'react';

const TodoItem = ({ todo, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editedText.trim()) {
      editTodo(todo.id, editedText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="bg-[#1a1a1a] rounded-lg p-4 flex justify-between items-center shadow-sm hover:shadow-md transition">
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="flex-1 px-3 py-2 bg-[#262626] text-white rounded outline-none mr-3"
        />
      ) : (
        <span className="flex-1 text-base text-white mr-3">{todo.text}</span>
      )}
      <div className="flex gap-2">
        <button
          onClick={handleEdit}
          className="px-3 py-1 rounded text-sm bg-violet-600 hover:bg-violet-700 transition"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>    
        <button
          onClick={() => deleteTodo(todo.id)}
          className="px-3 py-1 rounded text-sm bg-rose-600 hover:bg-rose-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
