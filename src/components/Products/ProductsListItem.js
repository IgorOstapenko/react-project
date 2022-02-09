import { Button, Card, CardActions, CardContent } from '@mui/material'
import React from 'react'

export const ProductsListItem = (props) => {
    return (
        <>
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={image} alt="" />
                    </div>
                    <h4>{props.name}</h4>
                    <p>{props.description}</p>
                    <div>Type: {props.type}</div>
                    <div>Capacity: {props.capacity}</div>
                    <div>{props.price} $</div>
                </CardContent>
                <CardActions>
                    <Button variant="contained">Add to cart</Button>
                </CardActions>
            </Card>
        </>
    )
}
