import React, { useState, useEffect } from "react";
import { BsTrashFill } from "react-icons/bs";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    setTodos(JSON.parse(storedTodos));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="main-cont px-12">
      <h1 className="text-4xl font-bold pt-6 text-center">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 flex-grow mr-2 font-sans"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul className="todo-list relative flex-grow h-1/2 overflow-y-auto">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`flex items-center justify-between p-2 mb-2 border rounded ${
              todo.completed ? "line-through" : ""
            }`}
          >
            <label
              htmlFor={`checkbox-${index}`}
              className="flex-grow cursor-pointer"
            >
              <input
                id={`checkbox-${index}`}
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(index)}
                className="mr-2 rounded-full"
              />
              {todo.text}
            </label>
            <BsTrashFill
              size={20}
              onClick={() => handleDeleteTodo(index)}
              className="cursor-pointer text-red-500 ml-2"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
