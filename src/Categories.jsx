import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Title from './Title'
import Latest from './Latest'

function Categories() {
    
    const [jobCategories, setJobCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")
   
    const handleCategoryClick = (category) => {
        console.log(category)
        setSelectedCategory(category)
    }
    useEffect(() => {
        axios
        .get('https://proxy-findwork-api.glitch.me/api/jobs/', {
            headers: {
            Authorization: `Token ${import.meta.env.VITE_FINDWORK_API_KEY}`,
            'Content-Type': 'application/json',
            }}).then((response) => setJobCategories(response.data.results))
        }, [])

    useEffect(() => {
        axios
        .get(categoryURL, {
            headers: {
            Authorization: `Token ${import.meta.env.VITE_FINDWORK_API_KEY}`,
            'Content-Type': 'application/json',
            }}).then((response) => setJobCategories(response.data.results))
        }, [selectedCategory])
    
        const categoryURL = `https://proxy-findwork-api.glitch.me/api/jobs/?remote=true&search=${selectedCategory}&sort_by=relevance`
        console.log(jobCategories)

        return (
    <>
        <h2>Job Search
        <div className="sortBy">
        <div className="searchButtons">
          <div
            onClick={() => handleCategoryClick("react")}
          >
            React
          </div>
          <div
            onClick={() => handleCategoryClick("django")}
          >
            Django
          </div>
          <div
            onClick={() => handleCategoryClick("python")}
          >
            Python
          </div>
          <div
            onClick={() => handleCategoryClick("javascript")}
          >
            Javascript
          </div>
        </div>
        <div className="mt-4">
          <input
            placeholder="Search..."
          />
        </div>
      </div>
        </h2>
        <Latest />
    </>
    )}

    export default Categories