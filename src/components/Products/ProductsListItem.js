import { Button, Card, CardActions, CardContent } from '@mui/material'
import React from 'react'

export const ProductsListItem = () => {
    return (
        <>
            <Card>
                <CardContent>
                    <h4>iPhone X</h4>
                    <p>This is iPhone X</p>
                    <div>Type: phone</div>
                    <div>Capacity: 64Gb</div>
                    <div>500 $</div>
                </CardContent>
                <CardActions>
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        </>
    )
}
