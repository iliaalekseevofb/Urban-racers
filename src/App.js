import React from 'react';
import Navbar from "./components/Navbar";
import Container from '@mui/material/Container';
import './App.css';

const App = () => {
    return (
        <Container maxWidth="xl" sx={{paddingX: 0}}>
            <Navbar />
        </Container>
    )
}

export default App