import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material';
import {Box} from '@mui/material';
import logo from '../assets/logo.svg'

const theme = createTheme({
    typography: {
        fontFamily: 'Raleway',
    }
});

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{
            marginX: {xs: 1, md: 3, lg: 5},
            marginY: {xs: 1, md: 2, lg: 3},
            paddingY: {xs: 1, md: 2, lg: 3},
            paddingX: {xs: 1, md: 2, lg: 3},
            boxShadow: '0px 12px 12px rgba(0, 0, 0, 0.04), 0px 0px 12px rgba(0, 0, 0, 0.04)',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'space-batween', 
            alignItems: 'center'
        }}>
            <img src={logo} alt='urban-racers' />
            <Box sx={{fontFamily: 'Montserrat'}}>
                <a href='/'>ГЛАВНАЯ</a>
                <a href='/'>КАТАЛОГ</a>
                <a href='/'>ИНФОРМАЦИЯ</a>
                <a href='/'>КОНТАКТЫ</a>
                <a href='/'>ЕЩЕ...</a>
            </Box>
        </Box>
    </ThemeProvider>
  )
}

export default Navbar