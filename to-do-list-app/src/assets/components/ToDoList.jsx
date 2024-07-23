import { useState } from "react";

const ToDoList = ({ tasks, onTaskChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    onTaskChange(updatedTasks);
  };

  const handleToggle = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    onTaskChange(updatedTasks);
  };

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      onTaskChange([
        ...tasks,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };

  return (
    <div className="todo-list flex flex-col gap-2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        className="border border-gray-300 rounded px-2 py-1"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-2 py-1 rounded-md"
      >
        Add
      </button>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="todo-item flex items-center justify-between gap-2 border-b border-gray-300 pb-2"
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggle(task.id)}
            className="mr-2 border-r-2 border-black h-4 w-4 rounded text-blue-600 focus:ring-blue-500 border-r-black"
          />
          <p>{task.text}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
