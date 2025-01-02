import React from 'react'
import NavBar from '../components/NavBar'
import JobsList from './employee/JobsList'

export default function HomePage() {
  return (
    <div>
        <NavBar />
        <JobsList />
    </div>
  )
}
