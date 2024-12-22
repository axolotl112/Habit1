import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CardPage({ onUpdate }) {
  const location = useLocation();
  const navigate = useNavigate();

  const { id } = location.state || {}; // Use id from state or fallback to null
  const storedData = JSON.parse(localStorage.getItem(`card-${id}`)) || {};

  // Local states for editing
  const [localTitle, setLocalTitle] = useState(storedData.title || location.state.title);
  const [localName, setLocalName] = useState(storedData.name || location.state.name);
  const [localProgress, setLocalProgress] = useState(storedData.progress || location.state.progress);
  const [localStartDate, setLocalStartDate] = useState(
    new Date(storedData.startDate || location.state.startDate)
  );
  const [localEndDate, setLocalEndDate] = useState(
    new Date(storedData.endDate || location.state.endDate)
  );

  // Save data to localStorage on every change
  useEffect(() => {
    const dataToSave = {
      id,
      title: localTitle,
      name: localName,
      progress: localProgress,
      startDate: localStartDate,
      endDate: localEndDate,
    };
    localStorage.setItem(`card-${id}`, JSON.stringify(dataToSave));
  }, [id, localTitle, localName, localProgress, localStartDate, localEndDate]);

  const handleTitleChange = (e) => setLocalTitle(e.target.value);
  const handleNameChange = (e) => setLocalName(e.target.value);
  const handleProgressChange = (e) =>
    setLocalProgress(Math.min(100, Math.max(0, parseInt(e.target.value, 10) || 0)));

  const handleSave = () => {
    // Pass the updated data to the parent component or API
    onUpdate(id, {
      title: localTitle,
      name: localName,
      progress: localProgress,
      startDate: localStartDate,
      endDate: localEndDate,
    });

    // Navigate back to the home page
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Habit</h2>

      <div className="form-row">
        <label>Title:</label>
        <input
          type="text"
          value={localTitle}
          onChange={handleTitleChange}
          placeholder="Edit title"
        />
      </div>

      <div className="form-row">
        <label>Name:</label>
        <input
          type="text"
          value={localName}
          onChange={handleNameChange}
          placeholder="Edit name"
        />
      </div>

      <div className="form-row">
        <label>Progress (%):</label>
        <input
          type="number"
          value={localProgress}
          onChange={handleProgressChange}
          max="100"
          min="0"
          placeholder="Edit progress"
        />
      </div>

      <div className="form-row">
        <label>Start Date:</label>
        <DatePicker
          selected={localStartDate}
          onChange={(date) => setLocalStartDate(date)}
          dateFormat="MMMM d, yyyy"
        />
      </div>

      <div className="form-row">
        <label>End Date:</label>
        <DatePicker
          selected={localEndDate}
          onChange={(date) => setLocalEndDate(date)}
          dateFormat="MMMM d, yyyy"
          minDate={localStartDate} // Ensure end date is not before start date
        />
      </div>

      <button onClick={handleSave}>Save</button>
    </div>
  );
}
