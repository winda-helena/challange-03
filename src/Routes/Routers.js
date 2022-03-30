import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cars } from '../Pages/Cars/Cars'
import { Dashboard } from '../Pages/Dashboard/Dashboard'
import { Home } from '../Pages/Home/Home'
import { Login } from '../Pages/Login/Login'
import { NewCars } from '../Pages/NewCars/NewCars'
import { DelateCars } from '../Pages/DelateCars/DelateCars'

export const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='home' element={<Home/>} />
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='cars' element={<Cars/>} />
        <Route path='/Delate' elemen={<DelateCars/>} />
        <Route path='new-cars' element={<NewCars/>} />
        
    </Routes>
    )
}
