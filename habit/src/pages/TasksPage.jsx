import { useState } from 'react'

export default function TaskPage(){
    const [tasks, setTasks] = useState([]); // State to store tasks
    const [newTask, setNewTask] = useState(''); // State for new task input

      const addTask = (e) => {
         e.preventDefault();
          setTasks([...tasks, { text: newTask, completed: false }]);
          setNewTask('');
        
      };
    
      const toggleTaskCompletion = (index) => {
        const updatedTasks = tasks.map((task, i) =>
          i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
      };
    
      const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
      };
    

      return (
        <div className="task-page">
          <h1 className="task-page-title">Task Page</h1>
    
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
    
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li
                key={index}
                className={`task-item ${task.completed ? 'completed' : ''}`}
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