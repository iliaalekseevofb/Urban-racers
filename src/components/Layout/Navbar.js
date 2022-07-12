import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
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
        <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Link className='link' to='/'><img src={logo} alt='urban-racers' /></Link>
            <Link className='link' to='/'>ГЛАВНАЯ</Link>
            <Link className='link' to='/catalogue'>КАТАЛОГ</Link>
            <Link className='link' to='/info'>ИНФОРМАЦИЯ</Link>
            <Link className='link' to='/contacts'>КОНТАКТЫ</Link>
            <Link className='link' to='/more'>ЕЩЕ...</Link>
        </Box>
    </Box>
  )
}

export default Navbar