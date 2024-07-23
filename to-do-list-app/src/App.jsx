import { useState, useEffect } from "react";
import Footer from "./assets/components/Footer";
import Navbar from "./assets/components/Navbar";
import ToDoList from "./assets/components/ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskChange = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <ToDoList tasks={tasks} onTaskChange={handleTaskChange} />
      </div>
      <Footer />
    </>
  );
}

export default App;
