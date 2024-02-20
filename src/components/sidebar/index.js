import React, { useEffect, useState } from 'react'
import './sidebar.css'
import SidebarButton from './sidebarButton'
import { IoMdTrendingUp } from "react-icons/io";
import { CgFeed } from "react-icons/cg";
import { PiFinnTheHumanFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { IoLibrarySharp } from "react-icons/io5";
import { PiSignOut } from "react-icons/pi";
import apiClient from '../../spotify';

export default function Sidebar() {
  const [image, setImage]= useState("https://i.pinimg.com/564x/b2/d3/46/b2d346e483ff586357ce7b9b08d672c6.jpg")
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);


  return (
    <div className= "sidebar-container">
         <img
         src={image}
          className='profile-img'
         alt='profile'
         />
         <div>
          <SidebarButton title="Trending" to="/trending" icon={<IoMdTrendingUp/>}/>
          <SidebarButton  title="Feed" to="/feed" icon={<CgFeed/>}/>
          <SidebarButton  title="Player" to="/player" icon={<PiFinnTheHumanFill/>}/>
          <SidebarButton  title="Favorite" to="/favourite" icon={<FaHeart/>}/>
          <SidebarButton title="Library" to="/" icon={<IoLibrarySharp/>}/>
         </div>
         <SidebarButton title="Sign-out" to="" icon={<PiSignOut/>}/>
    </div>
  )
}
