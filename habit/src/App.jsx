import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import HabitCard from './components/HabitCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <div className='grid'>
     <HabitCard 
     
     name ={"abc"}
     />
      <HabitCard 
     
     name ={"abc"}
     />
      <HabitCard 
     
     name ={"abc"}
     />
      <HabitCard
           name ={"abc"}

      />
      <HabitCard
           name ={"abc"}

      />
      <HabitCard
           name ={"abc"}

      />
      <HabitCard
           name ={"abc"}

      />
     </div>
     <p>hi1</p>

    </>
  )
}

export default App
