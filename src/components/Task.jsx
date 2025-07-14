import React from "react";
import { FaTrash, FaCheckCircle } from "react-icons/fa";


export default function Task({ task, index, toggleComplete, deleteTask }) {
  return (
    <div className={`todo ${task.completed ? "completed" : ""}`}>
      <div className="task-text">
        <h1>{task.title}</h1>
        <p>{task.time}</p>
      </div>

      <div className="buttons">
        <button onClick={() => toggleComplete(index)} className="check-btn" title="Mark as done">
          <FaCheckCircle />
        </button>
        <button onClick={() => deleteTask(index)} className="delete-btn" title="Delete task">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
