import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getPhotos } from '../services/album'
export default function Usuarios() {
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
    <main style={{ padding: "1rem 0" }}>
      <h2>album {id}</h2>
      <ul>
        {photos.map(photo => <li key={photo.id}>foto {photo.id}</li>)}
      </ul>
    </main>
  );
}