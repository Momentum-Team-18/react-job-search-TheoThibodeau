import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Latest from './Latest'


function Title() {
    const [title, setTitle] = useState([])
    const [currentJob, setCurrentJob] = useState(0)

    useEffect(() => {
        axios
        .get('https://proxy-findwork-api.glitch.me/api/jobs/', {
            headers: {
            Authorization: `Token ${import.meta.env.VITE_FINDWORK_API_KEY}`,
            'Content-Type': 'application/json',
            }}).then((response) => setTitle(response.data.results))
        }, [])
console.log(title)
return(
<>
    <div className='jobDescription'>
        <p className='jobTitle'>{title.length > 0 && 
            <h1>{title[currentJob].role}</h1>
        }</p>
        <p className='jobCompanyName'>{title.length > 0 && 
            <h2>Company Name: {title[currentJob].company_name}</h2>
        }</p>
        <p className='jobRemote'>{title.length > 0 && 
            <h2>{title[currentJob].remote}</h2>
        }</p>
        {/* <img className='jobLogo'>{title.length > 0 && 
            <h2>{title[currentJob].logo}</h2>
        }</img> */}
        <p className='jobKeywords'>{title.length > 0 && 
            <h2>Keywords: {title[currentJob].keywords}</h2>
        }</p>
        <p className='jobText'>{title.length > 0 && 
            <h2>Job Description: {title[currentJob].text}</h2>
        }</p>
    </div>
</>
)
}

export default Title