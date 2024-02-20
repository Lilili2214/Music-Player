import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import apiClient from '../../spotify';
import SongCard from '../../components/songCard/index';
import Queue from '../../components/queue/index';
import "./player.css"
import AudioPlayer from '../../components/audioplayer/index';
export default function Player() {
  const location =useLocation();
  const [tracks, setTracks]= useState([])
  const [currentTrack, setCurrenTrack]=useState({})
  const [currentIndex, setCurrentIndex]=useState(0)
  useEffect(()=>{
    if(location.state){
      apiClient
      .get("playlists/"+location.state?.id+"/tracks")
      .then((res)=> {
        console.log(res.data)
        setTracks(res.data.items);
        setCurrenTrack(res.data.items[0]?.track)
        console.log(tracks)
      })
    }
  }, [location.state])

  useEffect(()=>{
    setCurrenTrack (tracks[currentIndex]?.track);
  },[currentIndex, tracks])
  
  return (
    <div className="screen-container flex">
      <div className='left-player-body'>
        <AudioPlayer currentTrack={currentTrack}/>
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  )
}
