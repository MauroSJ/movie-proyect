
import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';

const CardMovie = ({movie, handleLike, deleteMovieById,}) => {

  return (
    <>
      <Card sx={{ width: 300, height: 500 }}>
        <CardHeader
          title= {movie.name}
          subheader= {movie.createdAt}
        />
        <CardMedia
          component="img"
          height="194"
          image= {movie.img}
          alt= {movie.name}
        />
        <CardContent sx={{height: 150 }}>
          <Typography variant="body2" color="text.secondary">
            {movie.description}
          </Typography>
        </CardContent>
        <CardActions sx={{display:"flex", justifyContent:"end"}}>
          <IconButton aria-label="add to favorites">
          </IconButton>
          <FavoriteIcon color={movie.isLiked ? "error" : "disabled"} onClick={()=>{handleLike(movie)}}/>
          <Button type='button' variant='outlined' color='primary' onClick={()=>deleteMovieById(movie.id)}>Eliminar</Button>
        </CardActions>
      </Card>
    </>
  )
}

export default CardMovie