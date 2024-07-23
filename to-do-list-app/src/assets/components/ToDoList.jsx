import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ToDoList = ({ tasks, onTaskChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    onTaskChange(updatedTasks);
  };

  const handleDeleteAll = () => {
    onTaskChange([]);
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
    <div className="flex flex-col relative gap-2">
      <div className="flex flex-col pt-4 gap-2 p-3">
        <div className="flex w-full justify-between gap-2">
          <input
            className="bg-[#222630] w-full px-5 py-4 text-xl outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
            name="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            placeholder="Enter your task"
            type="text"
          />
          <button
            className="group cursor-pointer outline-none hover:rotate-90 duration-300"
            title="Add New"
            onClick={handleAdd}
          >
            <svg
              className="stroke-teal-500 fill-none group-hover:fill-teal-800 group-active:stroke-teal-200 group-active:fill-teal-600 group-active:duration-0 duration-300"
              viewBox="0 0 24 24"
              height="50px"
              width="50px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeWidth="1.5"
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              ></path>
              <path strokeWidth="1.5" d="M8 12H16"></path>
              <path strokeWidth="1.5" d="M12 16V8"></path>
            </svg>
          </button>
        </div>
        <button
          onClick={handleDeleteAll}
          className="flex h-fit w-full items-center justify-center gap-[0.5em] rounded-full bg-[#c60808] px-[2em] py-[1em] text-white shadow-[inset_0px_-4px_4px_0px_#f05b5b,0px_0px_0px_2px_#f9d1d1,0px_4px_0px_0px_#A60000] duration-[250ms] hover:translate-y-[0.25em] active:translate-y-[0.5em] active:shadow-[inset_0px_-4px_4px_0px_#f05b5b,0px_0px_0px_2px_#f9d1d1]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[1.5em] w-[1.5em]"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#fff"
                strokeWidth="1.5"
              ></circle>
              <path
                d="M9 17C9.85038 16.3697 10.8846 16 12 16C13.1154 16 14.1496 16.3697 15 17"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="#fff"></ellipse>
              <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="#fff"></ellipse>
            </g>
          </svg>
          <p className="[text-shadow:0px_1px_1px_0px_#950000]">Delete All</p>
        </button>
      </div>
      <div className="h-[400px] w-full absolute top-40 overflow-auto flex flex-col gap-2 p-2">
        <TransitionGroup>
          {tasks.map((task) => (
            <CSSTransition key={task.id} timeout={300} classNames="fade">
              <div className="todo-item flex items-center justify-between gap-2 border-b border-gray-300 pb-2">
                <div className="checkbox-wrapper-12">
                  <div className="cbx">
                    <input
                      id={`cbx-${task.id}`}
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggle(task.id)}
                    />
                    <label
                      htmlFor={`cbx-${task.id}`}
                      className="cursor-pointer"
                    ></label>
                    <svg width="50" height="49" viewBox="0 0 15 14" fill="none">
                      <path d="M2 8.36364L6.23077 12L13 2"></path>
                    </svg>
                  </div>
                </div>
                <p className="flex-1 text-2xl">{task.text}</p>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="group relative flex h-14 w-14 flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-red-800 bg-red-400 hover:bg-red-600"
                >
                  <svg
                    viewBox="0 0 1.625 1.625"
                    className="absolute -top-7 fill-white delay-100 group-hover:top-6 group-hover:animate-[spin_1.4s] group-hover:duration-1000"
                    height="15"
                    width="15"
                  >
                    <path d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195"></path>
                    <path d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033"></path>
                    <path d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016"></path>
                  </svg>
                  <svg
                    width="16"
                    fill="none"
                    viewBox="0 0 39 7"
                    className="origin-right duration-500 group-hover:rotate-90"
                  >
                    <line
                      strokeWidth="4"
                      stroke="white"
                      y2="5"
                      x2="39"
                      y1="5"
                    ></line>
                    <line
                      strokeWidth="3"
                      stroke="white"
                      y2="1.5"
                      x2="26.0357"
                      y1="1.5"
                      x1="12"
                    ></line>
                  </svg>
                  <svg width="16" fill="none" viewBox="0 0 33 39" className="">
                    <mask fill="white" id="path-1-inside-1_8_19">
                      <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                    </mask>
                    <path
                      mask="url(#path-1-inside-1_8_19)"
                      fill="white"
                      d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                    ></path>
                    <path strokeWidth="4" stroke="white" d="M12 6L12 29"></path>
                    <path strokeWidth="4" stroke="white" d="M21 6V29"></path>
                  </svg>
                </button>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default ToDoList;
