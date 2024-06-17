/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'
import {Header,Footer} from './components'
import {Outlet} from 'react-router-dom'
import  authService from './appwrite/Auth.js'
import { useDispatch } from 'react-redux'
import {login,logout} from './store/authSlice.js'

function App() {

  const [loading,setloading] =useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getUser().then((usedata) => {
      if(usedata){
        dispatch(login(usedata))
      } else {
        dispatch(logout())
      }
    }).finally(() => setloading(false))
  },[])

  return (
    <div className='min-h-screen flex flex-wrap content-between bg-[#232325]'>
      <div className='w-full block'>
        <Header />
        <br />
        {/* <main> */}
        <Outlet />
        {/* </main> */}
        <br />
        <Footer />
      </div>
    </div>
  ) 
}

export default App
