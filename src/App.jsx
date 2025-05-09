import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';

const App = () => {
  const { todos, addTodo, editTodo, deleteTodo } = useTodos();

  return (
    <div className="min-h-screen bg-[#121212] text-white flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-2xl space-y-8">
        <h1 className="text-4xl font-semibold text-left text-white tracking-tight border-l-4 border-cyan-400 pl-4">
          TODO List
        </h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default App;
