import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import { BASE_URL, API_KEY } from "../../constant"
import axios from "axios"

export default function SingleMovie() {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const params = useParams()
    
    useEffect(() => {
        const getSingleMovie = async() => {
            const res = await axios.get(`${BASE_URL}search/find/${params.id}?external_source="imdb_id"&api_key=${API_KEY}`)
            if(res.status === 200) {
             console.log(res.data)
             setLoading(false)
            }
        }

        getSingleMovie()
    }, [params])
  return (
    
    <>
    {loading && <p>Loading...</p>}
    {!loading && (
        <>
       <p>Hiiiii</p>
        </>
    )}
    </>
  )
  
  // return (

  // )
}
