import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () =>{
    const trimmed = input.trim();
    if (!trimmed) return;
    setTasks([...tasks, { text: trimmed, completed: false }]);
    setInput("");
  };

  const toggleComplete = (index) =>{
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) =>{
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleKeyPress = (e)=>{
    if(e.key === "Enter")addTask();
  };

  return (
    <div className="app-container">
      <div className="todo-card">
        <h1>Tasks</h1>
        <div className="input-area">
          <input
            type="text"
            placeholder="What do you want to do?"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={addTask}>+</button>
        </div>
        <ul>
          {tasks.map((task, index)=>(
            <li
              key={index}
              className={task.completed ? "completed" : ""}
              onClick={()=>toggleComplete(index)}
            >
              <span>{task.text}</span>
              <button
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTask(index);
                }}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
