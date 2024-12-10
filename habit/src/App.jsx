import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import HabitCard from './components/HabitCard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardPage from './pages/CardPage'


function App() {
     const [cards, setCards] = useState([
          { id: 1, name: 'Habit 1', progress: 50 },
          { id: 2, name: 'Habit 2', progress: 75},
           {id: 3, name: 'Habit 3', progress: 75} 
           
        ]);

        const handleCardUpdate = (id, updatedData) => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === id ? { ...card, ...updatedData } : card
            )
          );
        };

  return (
     <Router>
     <Header />
     <Routes>
       {/* Home Page */}
       <Route
         path="/"
         element={
           <div className="grid">
            {cards.map((card)=>(
        <HabitCard
        key={card.id}
        id={card.id}
        name={card.name}
        progress={card.progress}
        onUpdate={handleCardUpdate}
      />
            ))}
             <p>hi1</p>
           </div>
         }
       />
       {/* Target Page */}
       <Route path="/habit/src/pages/CardPage.jsx/:name" element={<CardPage cards={cards} onUpdate={handleCardUpdate} />} />
     </Routes>
   </Router>
  )

}

export default App
