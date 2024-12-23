import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Alert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";

export default function TaskPage({ onProgress }) {
  const { id } = useParams(); // Get the card ID from the URL
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem(`tasks-${id}`)) || []
  );
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0); // Track the progress percentage

  // Calculate progress when tasks change
  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.completed).length;
    const totalTasks = tasks.length;
    const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    // Update local state
    setProgress(progressPercentage);

    // Update the parent state once
    onProgress(parseInt(id), { progress: progressPercentage });

    // Save tasks to localStorage
    localStorage.setItem(`tasks-${id}`, JSON.stringify(tasks));
  }, [tasks, id]); 

  const addTask = (e) => {
    e.preventDefault();

    if (newTask.trim() === "") {
      setError("Enter a task");
      setTimeout(() => setError(""), 5000); // Clear the error message after 5 seconds
    } else {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask(""); // Clear the input field
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-page">
      <h1>Task Page for Card {id}</h1>

      {/* Progress bar */}
      <div className="progress-bar-container">
        <LinearProgress variant="determinate" value={progress} />
        <p>{progress.toFixed(0)}% Completed</p>
      </div>

      <div className="task-input-container">
        <input
          type="text"
          className="task-input"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="task-add-button" onClick={addTask}>
          Add Task
        </button>
      </div>

      {error && (
        <Alert variant="filled" severity="error" className="task-error-alert">
          {error}
        </Alert>
      )}

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <input
              type="checkbox"
              className="task-checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <span className="task-text">{task.text}</span>
            <button
              className="task-delete-button"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
