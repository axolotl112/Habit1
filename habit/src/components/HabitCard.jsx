import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export default function HabitCard(props) {
  const [startDate, setStartDate] = useState(new Date()); // State for Start Date
  const [endDate, setEndDate] = useState(new Date()); // State for End Date

  const navigate = useNavigate();

  const handleClick = () => {
    const SProps = {
      id: props.card.id,
      title: props.card.title,
      name: props.card.name,
      progress: props.card.progress,
      startDate, // Pass the start date
      endDate,   // Pass the end date
    };

    navigate(`/habit/src/pages/CardPage.jsx/${props.card.name}` , { state: SProps }); // Target page route
  };

  const TaskPageNavigate = () => {
   
    navigate("/habit/src/pages/TaskPage.jsx"); // Target page route
  };


  const adjustedProgress = props.card.progress > 100 ? 100 : props.card.progress;

  return (
    <section className="sec--card">
      <div className="card-tab"></div>
      <div className="card-content">
        <h2 className="card-title">{props.card.title}</h2>
        <p className="card-description">{props.card.name}</p>

        {/* Start Date */}
        <div>
     
        <p>Start Date: {props.card.startDate.toLocaleDateString()}</p>
        </div>

        {/* End Date */}
        <div>
        <p>End Date: {props.card.endDate.toLocaleDateString()}</p>
        </div>

        <progress className="progress-c" value={props.card.progress} max={100} />
        <p className="progress-text">%{adjustedProgress}</p>
      </div>
      <div className="card-footer">
        <div onClick={handleClick} className="footer-text">Edit</div>
        <div onClick={TaskPageNavigate} className="footer-text">add tasks</div>
      </div>
    </section>
  );
}