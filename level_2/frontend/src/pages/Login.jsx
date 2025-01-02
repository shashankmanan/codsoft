import React from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <NavBar />
        <table style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <tr>
            <td><h3>Log Into Existing Account:</h3></td>
          </tr>
          <tr>
            <td><h5>UserName:</h5></td>
            <td><input type="text" /></td>
          </tr>        
        <tr>
          <td><h5>Password:</h5></td>
          <td><input type="password" /></td> 
        </tr>
        <tr>
          <td><button>Sign In</button></td>
        </tr>
        <tr>
          <td><Link to="/register">Not Yet registered? register here</Link></td>   
        </tr>
        </table>
    </div>
  )
}
