import React from 'react'
import "./songCard.css"
import AlbumImage from './albumImage.js'
import AlbumInfo from './albumInfo.js'

export default function SongCard(album) {
    
  return (
    <div className='songCard-body flex'>
    
    <AlbumImage url={album?.album?.images[0]?.url}/>
    <AlbumInfo album={album}/>

    </div>
  )
}
