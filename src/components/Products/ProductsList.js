import React from 'react'
import Typography from '@mui/material/Typography'

export const ProductsList = () => {
    return (
        <>
            <Typography
                align="center"
                component="h1"
                variant="h4"
                style={{
                    textTransform: 'uppercase',
                    margin: '30px 0',
                }}
            >
                Products List
            </Typography>
        </>
    )
}
