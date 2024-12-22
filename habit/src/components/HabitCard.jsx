import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export default function HabitCard({ card, onUpdate, onDelete }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/habit/src/pages/CardPage.jsx/${card.name}`, { state: card });
  };

  const TaskPageNavigate = () => {
    navigate(`/tasks/${card.id}`);
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${card.title}"?`)) {
      onDelete(card.id);
    }
  };

  return (
    <section className="sec--card">
      <div className="card-tab"></div>
      <div className="card-content">
        <h2 className="card-title">{card.title}</h2>
        <p className="card-description">{card.name}</p>
        <p>Start Date: {card.startDate.toLocaleDateString()}</p>
        <p>End Date: {card.endDate.toLocaleDateString()}</p>
        <progress className="progress-c" value={card.progress} max={100} />
        <p className="progress-text">%{card.progress}</p>
      </div>
      <div className="card-footer">
        <div onClick={handleClick} className="footer-text">Edit</div>
        <div onClick={TaskPageNavigate} className="footer-text">Add Tasks</div>
        <div onClick={handleDelete} className="footer-text">Delete</div>
      </div>
    </section>
  );
}
