import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import Title from './Title'

function Latest(){

    const [latestJobs, setLatestJobs] = useState([])
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    }
    const navigateToJob = () => {
        location.href = '/Title'
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
    <h3>
        <h2>LatestJobs</h2>
        <ul className='descriptors'>
            <p>Job Title</p>
            <p>Company Name</p>
            <p>Date Posted</p>
        </ul>
        {latestJobs.map((job) =>( 
            <ul class='latestJobs'>
                <p><a href='#' onClick={navigateToJob}>{truncateText(job.role, 15)}</a></p>
                <p>{truncateText(job.company_name, 10)}</p>
                <p>{dayjs(job.date_posted).format('MM/DD/YYYY')}</p> 
            </ul>
        ))}
    </h3>

    {/* // }
    // <h3>Latest Jobs
    // {latestJob.map((job) => (
    //     <ul key={job.results}>
    //         <p>{job.role}</p>
    //         <p>{job.date_posted}</p>
    //     </ul>
    // ))}
    // </h3> */}
</>
)

}


export default Latest