
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardMovie from '../../common/cardMovie/CardMovie'
import styles from "./Home.module.css"
import Header from '../../common/header/Header'

const Home = () => {

  const [movies, setMovies] =useState([])
  const [dispatchLike, setDispatchLike] =useState([false])
  const [favorite, setFavorite] =useState(false)

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

  const moviesFilter = movies.filter(movie => movie.isLiked)


  return (
    <>
      <Header setFavorite={setFavorite}/>
      <div className={styles.containerCards}>
        {
          !favorite ?
          movies.map((movie)=>{
            return(
              <CardMovie movie={movie}  key={movie.id} handleLike={handleLike}/>
              
            )
          }) :  moviesFilter.map((movie)=>{
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