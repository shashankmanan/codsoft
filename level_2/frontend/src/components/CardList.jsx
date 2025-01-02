import React, { useEffect,useState } from 'react'
import { getJobsList } from '../API/employee/JobsApi'
import Card from './Card'
import "../styles/CardList.css"
import { Link } from 'react-router-dom'

export default function CardList({find}) {
    const [list,setList] = useState([])
    useEffect(() => {
        if(find === "jobs") {
            let arr = getJobsList()
            setList(arr)
            console.log(arr)
        }
    }, [])
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
            <table>
            {

                list.map(
                    (i) => (
                        <tr>
                            <td>
                                <Card item = {i}/>
                            </td>
                            <td>
                                <Link to={ `/jobs/${i.job_id}` }><button>Apply</button></Link>
                            </td>
                        </tr>
                    )
                )
            }
            </table>
        </div>
  )
}
