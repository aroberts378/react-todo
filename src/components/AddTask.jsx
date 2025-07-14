import React, { useEffect } from "react";

export default function AddTask({ task, setTask, addTask }) {
    const inputRef = React.useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="addTask">
      <div className="task-form">
        <input
        ref={inputRef}  
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
        className="task-input"
        autoComplete="off"
        placeholder="Add a new task..."
        />
        <button className="add-btn" onClick={addTask}>
          <span className="btn-text">Add Task</span>
        </button>
      </div>
    </div>
  );
}
