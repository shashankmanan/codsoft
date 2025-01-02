import React from 'react'
import CardList from '../../components/CardList'
import { getJobsList } from '../../API/employee/JobsApi'

export default function JobsList() {
  
    return (
    <div>
        <h2>Available jobs near you:</h2>
        <CardList find="jobs"/>
    </div>
  )
}
