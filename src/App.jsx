import React from 'react';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Sobre from './Components/Sobre';

const App = () => {
  return (
    <BrowserRouter>
    <Header />
     <Routes>
      <Route path='/' element={<MainContent/>}/>
      <Route path='about' element={<Sobre/>}/>
     </Routes>
     <Footer />
    </BrowserRouter>
     
  );
};

export default App;

