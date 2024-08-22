import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home          from './pages/home'
import AllData       from './pages/alldata'
import CreateAccount from './pages/createaccount'
import Landing from './pages/landing';
import Login         from './pages/login'
import Layout from './components/layout';

function App() {
  

  return (
    <>
      <UserContextProvider>
        {/* <NavBar/> */}
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route element={<Layout />}>
            <Route path='/home' element={ <Home/> } />
            <Route path='/createaccount' element={ <CreateAccount/> } />
            <Route path='/login' element={ <Login/> } />
            <Route path='/alldata' element={ <AllData/> } />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
