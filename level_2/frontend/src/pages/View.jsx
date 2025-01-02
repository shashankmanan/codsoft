import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { getJobById } from '../API/employee/JobsApi'
import { Link } from 'react-router-dom'

export default function View({type}) {
    const {id:location} = useParams()
    const [profile,setProfile] = useState()
    const [viewable,setViewable] = useState(false)
    useEffect(
        () => {
            populateProfile()
        },[]
    )
    const populateProfile = () => {
        const prof = getJobById(location)
        setProfile(prof)
        setViewable(true)
    }
    return (
        <div>
            <NavBar />
            {viewable? 
                <div style={{display:"flex",flexDirection:"column",alignItems:'center' ,justifyContent:'space-between',margin:"40px"}}>
                    <div>
                        <h1>{profile.job_title}</h1>
                        <h3>{profile.company_name} , {profile.location}</h3>
                        <div style={{textAlign:"right"}}>
                            <h3>{profile.salary}</h3>
                        </div>
                    </div>
                    <div style={{textAlign:"left",margin:"30px"}}>
                        <h5 style={{padding:"10px"}}>Job ID: <span><p>{location}</p></span></h5>
                        <h2 style={{padding:"10px"}}>Experience Required:</h2>
                        <h3 style={{padding:"10px"}}>{profile.experience_level}</h3>
                        <h2 style={{padding:"10px"}}>Description:</h2>
                        <p>{profile.job_description}</p>
                        <h2 style={{padding:"10px"}}>Preferred Qualification:</h2>
                        <p>{profile.job_qualification}</p>
                    </div>
                    <div style={{textAlign:"right"}}>
                        <Link to={`/jobs/${location}/apply`}><button style={{height:"50px",width:"130px",fontSize:"15px"}}>Apply</button></Link>
                    </div>
                </div>
            : <></>
            }
        </div>
    )
}
