import React from 'react'
import "./audioPlayer.css"
import ProgressCircle from './progressCircle.js'
export default function AudioPlayer({currentTrack}) {
    console.log(currentTrack)
    console.log("-----------")
  return (
    <div className='player-body'>
        <div className='player-left-body'>
            <ProgressCircle percentage={75}
            isPlaying={true}
            //image={currentTrack?.images[0]?.url}
            size={300}
            color="#c96850"
            />
            <div className='player-right-body'>

            </div>
        </div>
    </div>
  )
}
