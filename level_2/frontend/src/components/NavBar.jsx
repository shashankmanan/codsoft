import React from 'react'
import "../styles/NavBar.css"
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
        <div className='nav-container'>
            <nav>
                <ul>
                    <li>
                        <a href=""><h4>Logo</h4></a>
                    </li>
                    <li>
                        <a href=""><h4>Jobs</h4></a>
                    </li>
                    <li>
                        <a href=""><h4>Hire</h4></a>
                    </li>
                    <li>
                        <input type="text" placeholder='search'/>
                    </li>
                    <li>
                        <Link to="/login"><h4>Login</h4></Link>
                    </li>
                </ul>
            </nav>
        </div>
  )
}
