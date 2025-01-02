import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar'
import { useState } from 'react'
import { getJobById } from '../../API/employee/JobsApi'
import { useParams } from 'react-router-dom'

export default function Apply() {
    const {id:location} = useParams()
    const [profile,setProfile] = useState()
    const [viewable,setViewable] = useState(false)
    const [isAuthenticated,setIsAuthenticated] = useState(false)

    let years = []
    for(let i = 2000; i <= 2028 ; i++) {
        years.push(i)   
    }
    useEffect(
        () => {
            authenticateUser()        
            populateProfile()
        },[]
    )
    const authenticateUser = () => {
    }
    const populateProfile = () => {
        const prof = getJobById(location)
        setProfile(prof)
        setViewable(true)
    }
  return (
    <div>
        <NavBar />
        {viewable? 
        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}>
        <div>
            <h2>Applying for {profile.job_title},{profile.company_name}</h2>
        </div>
        <div>
            <table>
                <tr>
                    <th>Personal Details:</th>
                </tr>
                <tr>
                    
                    <td>First Name :</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td>Last Name :</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td>Last Name :</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td>Address :</td>
                    <td><textarea cols="30" rows="10"></textarea></td>
                </tr>

                <tr>
                    <th>Education Details:</th>
                </tr>
                <tr>
                    
                    <td>College Name :</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td>Degree Name</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td>Stream :</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td>End Date :</td>
                    <td><select style={{height:"30px" , width:"90px"}}>
                        {
                            years.map( (i) => 
                                <option value="">{i}</option>   
                            )
                        }
                         
                    </select></td>
                </tr>
                <tr>
                    <th>Work Experience:</th>
                </tr>
                <tr>
                    <td>Office Name :</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td>Position :</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td>From :</td>
                    <td><select style={{height:"30px" , width:"90px"}}>
                        {
                            years.map( (i) => 
                                <option value="">{i}</option>   
                            )
                        }
                         
                    </select></td>
                    <td>To :</td>
                    <td><select style={{height:"30px" , width:"90px"}}>
                        {
                            years.map( (i) => 
                                <option value="">{i}</option>   
                            )
                        }
                         
                    </select></td>
                </tr>
                <tr>
                    <td>Upload Resume:</td>
                    <td>
                        <input type="file" />
                    </td>
                </tr>
                <tr>
                    <td><button style={{height:"30px" , width:"90px"}}>Apply</button></td>
                </tr>
            </table>
        </div>
        </div>
        : <></> 
        }
    </div>
  )
}
