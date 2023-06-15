
import React from 'react'
import {Box, Button, Modal, TextField, Typography} from '@mui/material';
import { useFormik } from 'formik';
import axios from 'axios';

const CreateMovieModal = ( {open, handleClose, setIsCreateMovie}) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  let initialValues = {
    name: "",
    description:"",
    createdAt:"",
    img:""
  }

  const onSubmit = (data)=>{
    const newMovie = {
      name: data.name,
      description: data.description,
      img: data.img,
      createdAt: data.createdAt,
      isLiked: false
    }

    axios.post("http://localhost:4000/movies", newMovie)
    .then(resp => {
      handleClose()
      setIsCreateMovie(true)

    })
    .catch(error => console.log(error))
  }

  const {handleChange, handleSubmit} = useFormik({
    initialValues,
    onSubmit
  })



  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "400px"
          }}
          onSubmit={handleSubmit}
          >
            <Typography variant='h6' color={"primary"}>Añadir película</Typography>
            <TextField
              id="name" 
              label="Nombre de la película" 
              variant="outlined"
              name='name'
              onChange={handleChange} />
              <TextField
              id="createdAt" 
              label="Fecha de creación" 
              variant="outlined"
              name='createdAt'
              onChange={handleChange} />
              <TextField
              id="description" 
              label="Descripción" 
              variant="outlined"
              name='description' 
              onChange={handleChange}/>
              <TextField
              id="img" 
              label="Adjutar URL de imagen" 
              variant="outlined" 
              name='img'
              onChange={handleChange}/>
              <Button type='submit' variant='contained' color='primary' >Añadir película</Button>
            </form>
        </Box>
      </Modal>
    </div>
  )
}

export default CreateMovieModal