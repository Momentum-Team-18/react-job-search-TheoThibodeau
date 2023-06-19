import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import Title from './Title'

function Latest(){

    const [latestJobs, setLatestJobs] = useState([])
    const [latestID, setLatestID] = useState(null)
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    }

    const handleSetLatestID = (id) => {
        setLatestID(id)
    }

    useEffect(() => {
        axios
        .get('https://proxy-findwork-api.glitch.me/api/jobs/', {
            headers: {
            Authorization: `Token ${import.meta.env.VITE_FINDWORK_API_KEY}`,
            'Content-Type': 'application/json',
            }}).then((response) => setLatestJobs(response.data.results))
        }, [])

return (
<>
    {latestID ? <Title latestID={latestID} /> : 
    <h3>
        <h2>LatestJobs</h2>
        {latestJobs.map((job) =>( 
            <ul className='latestJobs'>
                <p><a href='#' onClick={() => handleSetLatestID(latestJobs.id)}>{truncateText(job.role, 35)}</a></p>
                <p>Company: <a href='#'>{truncateText(job.company_name, 20)}</a></p>
                <p>Date Posted: {dayjs(job.date_posted).format('MM/DD/YYYY')}</p> 
            </ul>
        ))}
    </h3>}
</>
)

}


export default Latest