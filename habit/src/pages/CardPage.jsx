import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function CardPage({ onUpdate }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve serializable state passed via navigate
  const { id, name, progress } = location.state;

  const [localName, setLocalName] = useState(name);
  const [localProgress, setLocalProgress] = useState(progress);

  const handleNameChange = (e) => {
    setLocalName(e.target.value);
  };

  const handleProgressChange = (e) => {
    setLocalProgress(parseInt(e.target.value, 10) || 0);
  };

  const handleSave = () => {
    onUpdate(id, { name: localName, progress: localProgress }); // Update card data
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div>
      <h2>Edit Habit</h2>
      <input
        type="text"
        value={localName}
        onChange={handleNameChange}
        placeholder="Edit name"
      />
      <input
        type="number"
        value={localProgress}
        onChange={handleProgressChange}
        max="100"
        min="0"
        placeholder="Edit progress"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
