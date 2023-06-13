
import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardMovie = ({movie}) => {

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
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
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {movie.description}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default CardMovie