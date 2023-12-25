import React from 'react'
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Favourite from './favourite'
import Feed from './feed'
import Trending from './trending'
import Player from './player'
import Library from './library'
export default function home() {
  return (
    <Router>
        <Routes>
            <Route path ="/" element ={<Library />}/>
            <Router path ="/trending" element={<Trending/>}/>
            <Router path ="/player" element ={<Player/>}/>
            <Route path ="/favourite" element ={<Favourite/>}/>
            <Route path ="/feed" element ={<Feed/>}/>
        </Routes>
    </Router>
  )
}
