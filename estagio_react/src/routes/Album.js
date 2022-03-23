import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getPhotos } from '../services/album'
import '../styles/album.css'
export default function Album(props) {
  const { id } = useParams()
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    getPhotos({userId: localStorage.getItem('user_id'), albumId: id}).then(resp => {
      setPhotos(resp)
    })
  }, [id])

  if(!photos.length){
    return <p>loading...</p>
  }

  return (
    <main className='albums_container'>
      <div className="albums_header">
        <p>{localStorage.getItem('user_name')}</p>
      </div>
      <ul className="photos_list">
        {photos.map(photo => <li key={photo.id}>foto {photo.id}</li>)}
      </ul>
    </main>
  );
}