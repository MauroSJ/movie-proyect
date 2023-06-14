
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardMovie from '../../common/cardMovie/CardMovie'
import styles from "./Home.module.css"

const Home = () => {

  const [movies, setMovies] =useState([])
  const [dispatchLike, setDispatchLike] =useState([false])

  useEffect(()=>{
    axios.get("http://localhost:4000/movies")
      .then((resp)=>setMovies(resp.data))
      .catch((err)=> console.log(err))

      setDispatchLike(false)
      
  }, [dispatchLike])

  const handleLike = (movie)=>{
    axios.patch(`http://localhost:4000/movies/${movie.id}`,{isLiked: !movie.isLiked})
    .then((resp)=>setDispatchLike(true))
    .catch((err)=>console.log(err))
  }


  return (
    <>
      <div className={styles.containerCards}>
        {
          movies.map((movie)=>{
            return(
              <CardMovie movie={movie}  key={movie.id} handleLike={handleLike}/>
              
            )
          })
        }
      </div>
    </>
  )
}

export default Home