import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logoMobile, search, burger } from '../../assets';
import { Box, Button, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {main: '#F05454'}
  },
  breakpoints: {
    values: {xs: 0, sm: 600, md: 1000, lg: 1200, xl: 1536,}
  }
});

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        marginX: {xs: 1, md: 3, lg: 5},
        marginTop: {xs: 1, md: 2, lg: 3},
        marginTop: {xs: 1, md: 2},
        paddingY: {xs: 1, md: 2},
        paddingX: {xs: 1, md: 2, lg: 3},
        boxShadow: '0px 12px 12px rgba(0, 0, 0, 0.04), 0px 0px 12px rgba(0, 0, 0, 0.04)',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'center',
      }}>
        <Box display='flex' alignItems='center'>
          <Link className='navbar-link-logo' to='/'><img src={logoMobile} alt='urban-racers' /></Link>
          <Box sx={{
            display: {xs: 'none', md: 'flex'},
            paddingLeft: 1
          }}>
            <Link className='navbar-link' to='/'>ГЛАВНАЯ</Link>
            <Link className='navbar-link' to='/catalogue'>КАТАЛОГ</Link>
            <Link className='navbar-link' to='/info'>ИНФОРМАЦИЯ</Link>
            <Link className='navbar-link' to='/contacts'>КОНТАКТЫ</Link>
            <Link className='navbar-link' to='/more'>ЕЩЕ...</Link>
          </Box>
        </Box>
        <Box sx={{display: 'flex'}}>
          <Button variant='contained' className='navbar-button' sx={{
            fontFamily: 'Montserrat',
            fontSize: {xs: '12px', md: '14px'},
            fontWeight: 600,
            display: {xs: 'none', sm: 'block'},
            marginRight: {sm: '10px', md: 0},
          }}>
              Подбор по автомобилю
          </Button>
          <Box sx={{
            display: {xs: 'block', md: 'none'}
          }}>
            <Button size='large'><img src={search} alt='search' /></Button>
            <Button size='large'><img src={burger} alt='burger' /></Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{
        marginX: {xs: 1, md: 3, lg: 5},
        marginBottom: {xs: 1, md: 2, lg: 3},
      }}>
        <Box className='navbar-link-toggle-box'><Link className='navbar-link-toggle' to='/'>ГЛАВНАЯ</Link></Box>
        <Box className='navbar-link-toggle-box'><Link className='navbar-link-toggle' to='/catalogue'>КАТАЛОГ</Link></Box>
        <Box className='navbar-link-toggle-box'><Link className='navbar-link-toggle' to='/info'>ИНФОРМАЦИЯ</Link></Box>
        <Box className='navbar-link-toggle-box'><Link className='navbar-link-toggle' to='/contacts'>КОНТАКТЫ</Link></Box>
        <Box className='navbar-link-toggle-box no-underline'><Link className='navbar-link-toggle' to='/more'>ЕЩЕ...</Link></Box>
      </Box>
    </ThemeProvider>
  )
}

export default Navbar