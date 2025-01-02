import React from 'react'
import "../styles/Card.css"

export default function Card({item}) {
  const {job_title,location, salary,experience_level,company_name} = item
  return (
    <div className='main-box'>
      <div className="box-item">
          <h2>{job_title}</h2>
          <h4>{salary}</h4>
      </div>        
      <div className="box-item">
          <h2>{company_name}</h2>
          <h4>{experience_level}</h4>
      </div> 
      <div className="box-item">
          <h4>{location}</h4>
      </div> 
    </div>
  )
}
