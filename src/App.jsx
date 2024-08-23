import { useState, useEffect } from 'react'
import UserContextProvider from './context/UserContextProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home          from './pages/home'
import AllData       from './pages/alldata'
import Landing from './pages/landing';
import Layout from './components/layout';
import axios from 'axios';

function App() {
  
  useEffect(() => {
    let token = sessionStorage.getItem("User");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, [])

  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route element={<Layout />}>
            <Route path='/home' element={ <Home/> } />
            <Route path='/alldata' element={ <AllData/> } />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
