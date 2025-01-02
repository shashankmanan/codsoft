import React from 'react'
import "../styles/NavBar.css"

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
                        <a href=""><h4>Sign out</h4></a>
                    </li>
                </ul>
            </nav>
        </div>
  )
}
