import { useState, useEffect } from 'react';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import HabitCard from './components/HabitCard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardPage from './pages/CardPage'
import TestPage from './pages/test'
import TaskPage from './pages/TasksPage'
import CreatePage from './pages/CreatePage'


function App() {

  
  
  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem('cards');
    return savedCards
      ? JSON.parse(savedCards).map((card) => ({
          ...card,
          startDate: new Date(card.startDate),
          endDate: new Date(card.endDate),
        }))
      : [];
  });

  useEffect(() => {
    // Convert `Date` objects to strings before saving
    localStorage.setItem('cards', JSON.stringify(cards.map((card) => ({
      ...card,
      startDate: card.startDate.toISOString(),
      endDate: card.endDate.toISOString(),
    }))));
  }, [cards]);

        const handleCardUpdate = (id, updatedData) => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === id ? { ...card, ...updatedData } : card
            )
          );
        };

         // Function to create a new card
  const createCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  // Function to delete a card
  const deleteCard = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
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
        card={card}
        onUpdate={handleCardUpdate}
        onDelete={deleteCard}
        
      />
            ))}
           
          

           </div>
         }
       />
      
       {/* Target Page */}
       <Route path="/habit/src/pages/CardPage.jsx/:id" element={<CardPage onUpdate={handleCardUpdate} />} />
       <Route path='/habit/src/pages/test.jsx' element={<TestPage />}/>
       <Route path='/tasks/:id' element={<TaskPage />} />
       <Route path='/habit/src/pages/CreatePage.jsx' element={<CreatePage onCreate={createCard} /> }/>
     </Routes>
   </Router>
  )

}

export default App
