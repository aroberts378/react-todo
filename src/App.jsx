import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditedTask(tasks[index]);
  };

  const saveTask = (index) => {
    const updated = tasks.map((task, i) => (i === index ? editedTask : task));
    setTasks(updated);
    setEditingIndex(null);
    setEditedTask("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div className="App">
      <h2>📝 My To-Do List</h2>

      <div className="addTask">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          onKeyDown={handleKeyPress}
          autoFocus
          autoComplete="off"
        />
        <button className="ss" onClick={addTask}>
          Add Task
        </button>
      </div>

      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="todo">
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button onClick={() => saveTask(index)}>💾</button>
              </>
            ) : (
              <>
                <p>{task}</p>
                <div className="todo-buttons">
                  <button onClick={() => startEditing(index)}>✏️</button>
                  <button onClick={() => deleteTask(index)}>🗑️</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
