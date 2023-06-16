import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Categories() {
    const [jobCategories, setJobCategories] = useState([])


    const handleJobCategories = (keywords) => {
        setJobCategories(keywords)
    }

    useEffect(() => {
        axios
        .get('https://proxy-findwork-api.glitch.me/api/jobs/', {
            headers: {
            Authorization: `Token ${import.meta.env.VITE_FINDWORK_API_KEY}`,
            'Content-Type': 'application/json',
            }}).then((response) => setJobCategories(response.data.results))
        }, [])
        

    return (
    <>
        <h1>Job Search</h1>
        {jobCategories.map((job) => (
            <ul key={job.results}>
                <button onClick={() => handleJobCategories(job.results)}>{job.employment_type}</button>
            </ul>
        ))}
    </>
    )}

    export default Categories