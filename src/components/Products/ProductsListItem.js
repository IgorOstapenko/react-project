import { Button, Card, CardActions, CardContent } from '@mui/material'
import React from 'react'
import './ProductsListItem.css'
import PropTypes from 'prop-types'

export const ProductsListItem = ({
    image,
    name,
    description,
    type,
    capacity,
    price,
}) => {
    return (
        <>
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={image} alt="iphone"></img>
                    </div>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">
                        Capacity: {capacity} Gb
                    </div>
                    <div className="product-price">{price} $</div>
                </CardContent>
                <CardActions className="wrap-btn-add-to-cart">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        </>
    )
}

ProductsListItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
}

ProductsListItem.defaultProps = {
    description: 'No description ...',
    image: '/images/no-image.jpg',
}
