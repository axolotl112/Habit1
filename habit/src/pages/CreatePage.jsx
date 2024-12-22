import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateHabitPage({ onCreate }) {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!title || !name) {
      alert("Please provide both a title and name for the habit.");
      return;
    }
    const newHabit = {
      id: Date.now(),
      title,
      name,
      progress: 0,
      startDate,
      endDate,
    };
    onCreate(newHabit); // Call the createCard function passed from App
    navigate("/"); // Navigate back to the home page
  };

  return (
    <div>
      <h1>Create Habit</h1>
      <input
        type="text"
        placeholder="Habit Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Habit Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Start Date</label>
      <input
        type="date"
        value={startDate.toISOString().substring(0, 10)}
        onChange={(e) => setStartDate(new Date(e.target.value))}
      />
      <label>End Date</label>
      <input
        type="date"
        value={endDate.toISOString().substring(0, 10)}
        onChange={(e) => setEndDate(new Date(e.target.value))}
      />
      <button onClick={handleSubmit}>Add Habit</button>
    </div>
  );
}
