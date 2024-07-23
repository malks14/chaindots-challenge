import React from 'react'
import { Button, Card, CardActions, CardContent } from '@mui/material'

const CardCity = () => {
  return (
    <Card sx={{
      transition: "0.2s",
      "&:hover": {
        transform: "scale(1.05)"
      },
      mt: 5
    }}>
        <CardContent>
            <h3>Ciudad</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, iste. Porro eum sapiente sequi quod deserunt optio itaque eveniet, accusamus eaque molestias rerum amet quibusdam atque error velit quisquam animi.</p>
        </CardContent>
        <CardActions>
          <Button>More</Button>
        </CardActions>
    </Card>
  )
}

export default CardCity