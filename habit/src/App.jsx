import { useState } from 'react'
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

  
  
     const [cards, setCards] = useState([
          { id: 1, title:"test" ,  name: 'Habit 1', progress: 100, startDate: new Date(),
            endDate: new Date(), },
          { id: 2, title:"test2" , name: 'Habit 2', progress: 40 ,     startDate: new Date(),
            endDate: new Date(), },
           {id: 3, title:"test3" , name: 'Habit 3', progress: 10 ,     startDate: new Date(),
            endDate: new Date(),} 
           
        ]);

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
