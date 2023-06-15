
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardMovie from '../../common/cardMovie/CardMovie'
import styles from "./Home.module.css"
import Header from '../../common/header/Header'
import confetti from "canvas-confetti"
import Button from '@mui/material/Button';
import CreateMovieModal from '../../common/createMovieModal/CreateMovieModal'

const Home = () => {

  const [movies, setMovies] =useState([])
  const [dispatchLike, setDispatchLike] =useState([false])
  const [favorite, setFavorite] =useState(false)
  const [isCreateMovie, setIsCreateMovie] =useState(false)
  const [isDeleteMovie, setIsDeleteMovie] =useState(false)

  useEffect(()=>{
    axios.get("http://localhost:4000/movies")
      .then((resp)=>setMovies(resp.data))
      .catch((err)=> console.log(err))

      setDispatchLike(false)
      setIsCreateMovie(false)
      setIsDeleteMovie(false)
      
  }, [dispatchLike, isCreateMovie, isDeleteMovie])

  const handleLike = (movie)=>{

    if(!movie.isLiked){
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 0.5,
          y: 0
        }  
      })
    }

    axios.patch(`http://localhost:4000/movies/${movie.id}`,{isLiked: !movie.isLiked})
    .then((resp)=>setDispatchLike(true))
    .catch((err)=>console.log(err))
  }

  const moviesFilter = movies.filter(movie => movie.isLiked)

  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteMovieById = (id)=>{
    
    axios.delete(`http://localhost:4000/movies/${id}`)
    .then(resp=>{
      setIsDeleteMovie(true)
    })
    .catch(error=>console.log(error))
  }


  return (
    <>
      <Header setFavorite={setFavorite}/>
      <Button onClick={handleOpen} >Añadir película</Button>
      <CreateMovieModal open={open} handleClose={handleClose} setIsCreateMovie={setIsCreateMovie}/>
      <div className={styles.containerCards}>
        {
          !favorite ?
          movies.map((movie)=>{
            return(
              <CardMovie deleteMovieById={deleteMovieById} movie={movie}  key={movie.id} handleLike={handleLike}/>
              
            )
          }) :  moviesFilter.map((movie)=>{
            return(
              <CardMovie deleteMovieById={deleteMovieById} movie={movie}  key={movie.id} handleLike={handleLike}/>
              
            )
          })
        }
      </div>
      
    </>
  )
}

export default Home