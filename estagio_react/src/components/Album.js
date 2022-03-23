import React, { useEffect, useState } from 'react';
import Thumbnail from './Thumbnail';
import { getPhotos } from '../services/album'
import '../styles/album.css'
import { useUserContext } from '../contexts/user';
import Loader from './Loader'

export default function Album(props) {
  const [photos, setPhotos] = useState([])
  const { user } = useUserContext()

  useEffect(() => {
    getPhotos({userId: user.id, albumId: props.id}).then(resp => {
      setPhotos(resp)
    })
  }, [props.id])

  if(!photos.length){
    return <div style={{
      height: '93vh', 
      width: '100%', 
      display: 'grid', 
      placeContent: 'center'}}><Loader /></div>
  }

  return (
    <div className="photos_container">
      <ul className="photos_list">
        {photos.map(photo => 
          <li key={photo.id}><Thumbnail photo={photo}/></li>)}
      </ul>
    </div>
  );
}
