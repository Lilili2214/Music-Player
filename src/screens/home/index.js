import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Favourite from '../favorites/favourite'
import Feed from '../feed/feed'
import Trending from '../trending/trending'
import Player from '../player/index'
import Library from '../library/index'
import './home.css';
import Sidebar from '../../components/sidebar/index'
import Login from '../auth/login'
import { setClientToken } from '../../spotify'

export default function Home() {
  const [token, setToken]= useState("")
  useEffect(()=>{
    const token = window.localStorage.getItem("token")
    const hash =window.location.hash;
    window.location.hash=""
    if (!token && hash){
      const _token= hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token)
      setToken(_token); 
      console.log(_token)
      setClientToken(_token)
    } else{
      setToken(token)
      setClientToken(token)
    }
    
    
  },[])
  return !token ? (
    <Login/>) : (
    <Router>
      <div className="main_body">
        
        <Sidebar/>
        <Routes>
            <Route path ="/" element ={<Library />}/>
            <Route path ="/trending" element={<Trending/>}/>
            <Route path ="/player" element ={<Player/>}/>
            <Route path ="/favourite" element ={<Favourite/>}/>
            <Route path ="/feed" element ={<Feed/>}/>
        </Routes> 
        </div>
    </Router>
  )
}
