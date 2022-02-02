import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Header } from 'cotainers/Header/Header'
import { Main } from 'cotainers/Main/Main'
import { Footer } from 'cotainers/Footer/Footer'

export const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </>
    )
}
