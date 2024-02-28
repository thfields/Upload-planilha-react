import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Upload from './pages/Upload';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
        
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/upload' element={<Upload/>} />
            </Routes>
        </BrowserRouter>
        <ToastContainer />
      

        
    </>
  )
}

export default App
