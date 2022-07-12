import React from 'react';
import Container from '@mui/material/Container';
import Layout from './components/Layout/Layout';
import { Catalogue, Contacts, Home, Info, More, NotFound } from './pages';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
    return (
        <Container maxWidth="xl" sx={{paddingX: 0}}>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path='catalogue' element={<Catalogue />}></Route>
                    <Route path='info' element={<Info />}></Route>
                    <Route path='contacts' element={<Contacts />}></Route>
                    <Route path='more' element={<More />}></Route>
                    <Route path='*' element={<NotFound />}></Route>
                </Route>
            </Routes>
        </Container>
    )
}

export default App