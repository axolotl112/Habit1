import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Header(){


    return (

        <header>
        <h1 className="title">Habit tracker</h1>
        <nav>
          <ul className="nav-list-h">
            <li className="nav-item-h"><Link className='Link--h' to="/">home</Link></li>
            <li className="nav-item-h"><Link className='Link--h' to="/habit/src/pages/test.jsx">Test Page</Link></li>
            <li className="nav-item-h"><Link className='Link--h' to="/habit/src/pages/CreatePage.jsx">Create Habit</Link></li>

            <li className="nav-item-h">Contact</li>
          </ul>
        </nav>
      </header>
    )
}