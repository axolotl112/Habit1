import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

export default function HabitCard({ card, onUpdate, onDelete }) {
  const navigate = useNavigate();

  // Navigate to the CardPage for editing the habit
  const handleClick = () => {
    navigate(`/habit/src/pages/CardPage.jsx/${card.id}`, { state: card });
  };

  // Navigate to the TaskPage for managing tasks
  const TaskPageNavigate = () => {
    navigate(`/tasks/${card.id}`);
  };

  // Delete the habit card after confirmation
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${card.title}"?`)) {
      onDelete(card.id);
    }
  };

  return (
    <section className="sec--card">
      {/* Card's tab */}
      <div className="card-tab"></div>

      {/* Card content */}
      <div className="card-content">
        <h2 className="card-title">{card.title}</h2>
        <p className="card-description">{card.name}</p>
        <p>Start Date: {new Date(card.startDate).toLocaleDateString()}</p>
        <p>End Date: {new Date(card.endDate).toLocaleDateString()}</p>

        {/* Progress bar */}
        <progress className="progress-c" value={card.progress} max={100} />
        <p className="progress-text">{card.progress}% Completed</p>
      </div>

      {/* Card footer with action buttons */}
      <div className="card-footer">
        <div onClick={handleClick} className="footer-text">Edit</div>
        <div onClick={TaskPageNavigate} className="footer-text">Add Tasks</div>
        <div onClick={handleDelete} className="footer-text">Delete</div>
      </div>
    </section>
  );
}
