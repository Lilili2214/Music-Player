import React from 'react'
import "./albumInfo.css"
export default function AlbumInfo({album}) {
  const albums= album.album
 
  const artistss= [];
  if (!album || !album.album || !album.album.artists) {
    //
    return <p>Loading...</p>; // Display a loading message or handle the case when data is not available
  }
  console.log(albums.artists[0].name)
  albums.artists.forEach(element => {
    artistss.push(element.name)
  });
  return (

    <div className='albumInfo-card'>
      <div className='albumName-container'>
        <div className='marquee'>
        <p>{album.album?.name+ " - " + artistss?.join(", ")}</p>
      </div>
      </div>
      <div className="album-info">
        <p>{`${albums?.name} is an ${albums?.album_type} by ${artistss?.join(", ")} with ${albums?.total_tracks} tracks(s)`  }</p>
      </div>
      <div className='album-release'>
        <p>Release Date: {albums?.release_date}</p>
      </div>
    </div>
  )
}
