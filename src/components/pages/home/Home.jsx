
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardMovie from '../../common/cardMovie/CardMovie'
const Home = () => {

  const [movies, setMovies] =useState([])

  useEffect(()=>{
    axios.get("http://localhost:4000/movies")
      .then((resp)=>setMovies(resp.data))
      .catch((err)=> console.log(err))
  }, [])


  return (
    <>
      <div>
        {
          movies.map((movie)=>{
            return(
              <CardMovie movie={movie}  key={movie.id}/>
              
            )
          })
        }
      </div>
    </>
  )
}

export default Home