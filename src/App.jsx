import { StrictMode, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Home from './pages/HomePage.jsx';
import Favorites from './pages/Favorites.jsx';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import { MovieProvider } from './context/MovieContext.jsx';


function App() {
 
  return(
    <MovieProvider>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/favorites' element={<Favorites />}></Route>
        </Routes>
      </main>
    </MovieProvider>
  );
}



export default App
