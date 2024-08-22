import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home          from './pages/home'
import AllData       from './pages/alldata'
import CreateAccount from './pages/createaccount'
import NavBar        from './components/navbar'
import Login         from './pages/login'
import Balance       from './pages/balance'
import Deposit       from './pages/deposit'
import Withdraw      from './pages/withdraw'
import Logout        from './components/logout'

function App() {
  

  return (
    <>
      <UserContextProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/createaccount' element={ <CreateAccount/> } />
          <Route path='/login' element={ <Login/> } />
          <Route path='/balance' element={ <Balance/> } />
          <Route path='/deposit' element={ <Deposit/> } />
          <Route path='/withdraw' element={ <Withdraw/> } />
          <Route path='/logout' element={ <Logout/> } />
          <Route path='/alldata' element={ <AllData/> } />
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
