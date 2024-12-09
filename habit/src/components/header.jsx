import React from 'react'

export default function Header(){


    return (

        <header>
        <h1 className="title">Habit tracker</h1>
        <nav>
          <ul className="nav-list-h">
            <li className="nav-item-h"><a href="#home" className="link">Home</a></li>
            <li className="nav-item-h"><a href="#about" className="link">About</a></li>
            <li className="nav-item-h"><a href="#contact" className="link">Create a schedule</a></li>
            <li className="nav-item-h"><a href="#contact" className="link">Contact</a></li>
          </ul>
        </nav>
      </header>
    )
}